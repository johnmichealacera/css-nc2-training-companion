"use client"

import { useEffect } from 'react'
import Link from 'next/link'

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

export default function TestAnalyticsPage() {
  useEffect(() => {
    // Test custom event
    if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
      window.gtag('event', 'test_event', {
        event_category: 'test',
        event_label: 'analytics_test_page',
        value: 1
      })
      console.log('Test event sent to Google Analytics')
    }
  }, [])

  const handleTestClick = () => {
    if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
      window.gtag('event', 'button_click', {
        event_category: 'engagement',
        event_label: 'test_button',
        value: 1
      })
      console.log('Button click event sent to Google Analytics')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Google Analytics Test Page</h1>
        
        <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-4">Analytics Status</h2>
          <div className="space-y-2">
            <p><strong>GTAG Available:</strong> {typeof window !== 'undefined' && typeof window.gtag !== 'undefined' ? '✅ Yes' : '❌ No'}</p>
            <p><strong>DataLayer Available:</strong> {typeof window !== 'undefined' && window.dataLayer ? '✅ Yes' : '❌ No'}</p>
            <p><strong>Current URL:</strong> {typeof window !== 'undefined' ? window.location.href : 'N/A'}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-4">Test Actions</h2>
          <div className="space-y-4">
            <button
              onClick={handleTestClick}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Test Button Click Event
            </button>
            
            <div className="text-sm text-gray-600">
              <p>• Check browser console for analytics logs</p>
              <p>• Verify events in Google Analytics Real-Time reports</p>
              <p>• Check Google Analytics Debugger extension if installed</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Troubleshooting</h2>
          <div className="space-y-2 text-sm">
            <p>1. Open browser developer tools (F12)</p>
            <p>2. Check Console tab for analytics messages</p>
            <p>3. Check Network tab for requests to googletagmanager.com</p>
            <p>4. Verify Google Analytics property ID: G-1B58WX8K2R</p>
            <p>5. Check if ad blockers are interfering</p>
          </div>
        </div>

        <div className="mt-6">
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
} 