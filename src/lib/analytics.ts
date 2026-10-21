declare global {
  interface Window {
    dataLayer: IArguments[]
    gtag?: (...args: unknown[]) => void
  }
}

export type AnalyticsParams = Record<string, string | number | boolean | undefined>

type QueuedEvent = { name: string; params: Record<string, string | number | boolean> }

const PII_KEYS = new Set([
  'email',
  'name',
  'message',
  'phone',
  'tel',
  'user_email',
  'full_name',
  'first_name',
  'last_name',
])

const queue: QueuedEvent[] = []

function cleanParams(params: AnalyticsParams) {
  const cleaned: Record<string, string | number | boolean> = {}
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === '') continue
    if (PII_KEYS.has(key.toLowerCase())) continue
    cleaned[key] = value
  }
  return cleaned
}

export function trackEvent(name: string, params: AnalyticsParams = {}) {
  if (typeof window === 'undefined') return
  const cleaned = cleanParams(params)
  if (typeof window.gtag !== 'function') {
    queue.push({ name, params: cleaned })
    return
  }
  window.gtag('event', name, cleaned)
}

export function flushAnalytics() {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  while (queue.length) {
    const item = queue.shift()
    if (!item) break
    window.gtag('event', item.name, item.params)
  }
}

export function contentGroupForPath(path: string) {
  const pathname = (path.split('?')[0].split('#')[0].replace(/\/$/, '') || '/') as string
  if (pathname === '/') return 'home'
  if (pathname === '/coc1') return 'coc1'
  if (pathname === '/coc2') return 'coc2'
  if (pathname === '/coc3') return 'coc3'
  if (pathname === '/coc4') return 'coc4'
  if (pathname === '/glossary') return 'glossary'
  if (pathname === '/about') return 'about'
  if (pathname === '/contact') return 'contact'
  return 'other'
}

export function isDebugPath(path: string) {
  const pathname = path.split('?')[0].split('#')[0]
  return pathname === '/test-analytics' || pathname.startsWith('/test-analytics/')
}

export function trackPageView(path: string, title?: string) {
  if (isDebugPath(path)) return
  trackEvent('page_view', {
    page_path: path,
    page_title: title || (typeof document !== 'undefined' ? document.title : ''),
    page_location: typeof window !== 'undefined' ? window.location.href : '',
    content_group: contentGroupForPath(path),
  })
}

export function trackCta(label: string, extra: AnalyticsParams = {}) {
  const pagePath = typeof window !== 'undefined' ? window.location.pathname : ''
  trackEvent('cta_click', {
    cta_label: label,
    page_path: pagePath,
    content_group: pagePath ? contentGroupForPath(pagePath) : undefined,
    ...extra,
  })
}

export function trackLead(source: string) {
  trackEvent('generate_lead', {
    lead_source: source,
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    content_group:
      typeof window !== 'undefined' ? contentGroupForPath(window.location.pathname) : undefined,
  })
}
