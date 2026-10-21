'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import {
  contentGroupForPath,
  flushAnalytics,
  isDebugPath,
  trackCta,
  trackEvent,
  trackPageView,
} from '@/lib/analytics'

const MEASUREMENT_ID = 'G-1B58WX8K2R'
const SCROLL_MARKS = [25, 50, 75, 90, 100]
const TIME_MARKS = [15, 30, 60, 120, 180, 300]
const COC_PATH = /^\/coc[1-4]$/

let bootScheduled = false
let booted = false
let lastPath = ''
let clickBound = false

const seenScroll = new Set<number>()
const seenTime = new Set<number>()
let startedAt = 0
let accumulatedMs = 0
let visible = true
let sessionSent = false
let activePath = ''
let tick: ReturnType<typeof setInterval> | null = null

function currentKey() {
  return window.location.pathname + window.location.search
}

function context() {
  return {
    page_path: activePath,
    content_group: contentGroupForPath(activePath),
  }
}

function freeze() {
  if (!visible) return
  accumulatedMs += Date.now() - startedAt
  visible = false
}

function resume() {
  if (visible) return
  startedAt = Date.now()
  visible = true
}

function secondsOnPage() {
  const live = visible ? Date.now() - startedAt : 0
  return Math.round((accumulatedMs + live) / 1000)
}

function scrollPercent() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight
  if (scrollable <= 0) return 100
  return Math.min(100, Math.round((window.scrollY / scrollable) * 100))
}

function onScroll() {
  if (!activePath || isDebugPath(activePath)) return
  const percent = scrollPercent()
  for (const mark of SCROLL_MARKS) {
    if (percent < mark || seenScroll.has(mark)) continue
    seenScroll.add(mark)
    trackEvent('scroll_depth', {
      ...context(),
      percent: mark,
      engagement_seconds: secondsOnPage(),
    })
  }
}

function onTick() {
  if (!visible || !activePath || isDebugPath(activePath)) return
  const seconds = secondsOnPage()
  for (const mark of TIME_MARKS) {
    if (seconds < mark || seenTime.has(mark)) continue
    seenTime.add(mark)
    trackEvent('engage_time', {
      ...context(),
      seconds: mark,
      scroll_percent: scrollPercent(),
    })
  }
}

function sendSession() {
  if (sessionSent || !activePath || isDebugPath(activePath)) return
  sessionSent = true
  trackEvent('page_session', {
    ...context(),
    engagement_seconds: secondsOnPage(),
    scroll_percent: scrollPercent(),
  })
}

function onVisibility() {
  if (document.visibilityState === 'hidden') freeze()
  else resume()
}

function stopEngagement() {
  sendSession()
  if (tick) {
    clearInterval(tick)
    tick = null
  }
  window.removeEventListener('scroll', onScroll)
  document.removeEventListener('visibilitychange', onVisibility)
  window.removeEventListener('pagehide', sendSession)
  activePath = ''
}

function startEngagement(path: string) {
  const key = path.split('#')[0]
  if (key === activePath) return
  stopEngagement()
  if (!key || isDebugPath(key)) return
  seenScroll.clear()
  seenTime.clear()
  sessionSent = false
  accumulatedMs = 0
  visible = document.visibilityState !== 'hidden'
  startedAt = Date.now()
  activePath = key
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('visibilitychange', onVisibility)
  window.addEventListener('pagehide', sendSession)
  tick = setInterval(onTick, 5000)
  onScroll()
}

function sendPage(path: string) {
  const key = path.split('#')[0]
  if (!key || key === lastPath || isDebugPath(key)) return
  lastPath = key
  trackPageView(key)
}

function boot() {
  if (booted) return
  booted = true

  const script = document.createElement('script')
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`
  script.async = true
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', MEASUREMENT_ID, { send_page_view: false })
  flushAnalytics()
  sendPage(currentKey())
}

function scheduleBoot() {
  if (bootScheduled) return
  bootScheduled = true
  if (typeof window.requestIdleCallback === 'function') {
    window.requestIdleCallback(boot, { timeout: 4000 })
    return
  }
  window.setTimeout(boot, 2500)
}

function linkText(el: HTMLElement) {
  return (el.getAttribute('aria-label') || el.textContent || '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 80)
}

function onClick(event: MouseEvent) {
  const target = event.target
  if (!(target instanceof Element)) return

  const marked = target.closest('[data-analytics]')
  if (marked instanceof HTMLElement && marked.dataset.analytics === 'module_select') {
    const pagePath = window.location.pathname
    trackEvent('module_select', {
      module_id: marked.dataset.moduleId || '',
      module_action: marked.dataset.moduleAction || '',
      item_title: (marked.dataset.moduleTitle || linkText(marked)).slice(0, 80),
      page_path: pagePath,
      content_group: contentGroupForPath(pagePath),
    })
    return
  }

  const anchor = target.closest('a')
  if (!anchor || !anchor.href) return

  let url: URL
  try {
    url = new URL(anchor.href, window.location.origin)
  } catch {
    return
  }

  const pagePath = window.location.pathname
  const itemPath = url.pathname.replace(/\/$/, '') || '/'
  const group = contentGroupForPath(pagePath)

  if (url.protocol === 'mailto:') {
    trackCta('email')
    return
  }

  if (url.protocol === 'tel:') {
    trackCta('phone')
    return
  }

  if (anchor.dataset.analytics === 'cta') {
    trackCta(anchor.dataset.ctaLabel || linkText(anchor), { item_path: itemPath })
  }

  if (url.origin !== window.location.origin) {
    trackEvent('outbound_click', {
      link_url: url.origin + url.pathname,
      link_domain: url.hostname,
      link_text: linkText(anchor),
      page_path: pagePath,
      content_group: group,
    })
    if (url.pathname.toLowerCase().endsWith('.pdf')) {
      trackEvent('file_download', {
        file_name: decodeURIComponent(url.pathname.split('/').pop() || url.pathname),
        page_path: pagePath,
        content_group: group,
      })
    }
    return
  }

  if (itemPath.toLowerCase().endsWith('.pdf')) {
    trackEvent('file_download', {
      file_name: itemPath.split('/').pop() || itemPath,
      page_path: pagePath,
      content_group: group,
    })
    return
  }

  if (url.hash && itemPath === pagePath && COC_PATH.test(itemPath)) {
    trackEvent('module_jump', {
      item_path: itemPath,
      section: url.hash.slice(1),
      item_title: linkText(anchor),
      page_path: pagePath,
      content_group: group,
    })
    return
  }

  if (COC_PATH.test(itemPath)) {
    trackEvent('coc_select', {
      coc_id: itemPath.slice(1),
      item_path: itemPath,
      item_title: linkText(anchor),
      page_path: pagePath,
      content_group: group,
    })
    return
  }

  if (itemPath === '/glossary') {
    trackEvent('glossary_select', {
      item_path: itemPath,
      item_title: linkText(anchor),
      page_path: pagePath,
      content_group: group,
    })
    return
  }

  if (itemPath === '/about') {
    trackEvent('about_select', {
      item_path: itemPath,
      item_title: linkText(anchor),
      page_path: pagePath,
      content_group: group,
    })
    return
  }

  if (itemPath === '/contact') {
    trackEvent('contact_select', {
      item_path: itemPath,
      item_title: linkText(anchor),
      page_path: pagePath,
      content_group: group,
    })
  }
}

function bindClick() {
  if (clickBound) return
  clickBound = true
  document.addEventListener('click', onClick, true)
}

export function AnalyticsTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const path = pathname + (searchParams.toString() ? `?${searchParams}` : '')

  useEffect(() => {
    scheduleBoot()
    bindClick()
  }, [])

  useEffect(() => {
    sendPage(path)
    startEngagement(path)
  }, [path])

  return null
}
