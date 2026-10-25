'use client'

import { useEffect } from 'react'

export function useLockBody(locked: boolean) {
  useEffect(() => {
    document.body.style.overflow = locked ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [locked])
}
