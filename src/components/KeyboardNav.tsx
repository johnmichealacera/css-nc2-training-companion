'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

// Global state for help modal
let helpModalOpenCallback: (() => void) | null = null

export const setHelpModalCallback = (callback: () => void) => {
  helpModalOpenCallback = callback
}

export default function KeyboardNav() {
  const router = useRouter()

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Only trigger shortcuts when not typing in input fields
      if (event.target instanceof HTMLInputElement || 
          event.target instanceof HTMLTextAreaElement ||
          event.target instanceof HTMLSelectElement) {
        return
      }

      // Ctrl/Cmd + K: Go to home page
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault()
        router.push('/')
      }

      // Ctrl/Cmd + 1-4: Navigate to COC modules
      if ((event.ctrlKey || event.metaKey) && ['1', '2', '3', '4'].includes(event.key)) {
        event.preventDefault()
        const cocNumber = event.key
        router.push(`/coc${cocNumber}`)
      }

      // Ctrl/Cmd + G: Go to glossary
      if ((event.ctrlKey || event.metaKey) && event.key === 'g') {
        event.preventDefault()
        router.push('/glossary')
      }

      // Ctrl/Cmd + A: Go to about page
      if ((event.ctrlKey || event.metaKey) && event.key === 'a') {
        event.preventDefault()
        router.push('/about')
      }

      // Ctrl/Cmd + ?: Open help modal
      if ((event.ctrlKey || event.metaKey) && event.key === '?') {
        event.preventDefault()
        if (helpModalOpenCallback) {
          helpModalOpenCallback()
        }
      }

      // Home key: Scroll to top
      if (event.key === 'Home') {
        event.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }

      // End key: Scroll to bottom
      if (event.key === 'End') {
        event.preventDefault()
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [router])

  return null
} 