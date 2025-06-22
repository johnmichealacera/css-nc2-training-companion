'use client'

import Link from 'next/link'
import { Computer, HelpCircle } from 'lucide-react'
import { useState, useEffect } from 'react'
import HelpModal from './HelpModal'
import { setHelpModalCallback } from './KeyboardNav'

export default function Navigation() {
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false)

  useEffect(() => {
    // Register the help modal callback with keyboard navigation
    setHelpModalCallback(() => setIsHelpModalOpen(true))
  }, [])

  return (
    <>
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Computer className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">CSS NC II Training</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/glossary" className="text-gray-600 hover:text-gray-900">Glossary</Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
              <button
                onClick={() => setIsHelpModalOpen(true)}
                className="text-gray-600 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Show keyboard shortcuts"
              >
                <HelpCircle className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <HelpModal 
        isOpen={isHelpModalOpen} 
        onClose={() => setIsHelpModalOpen(false)} 
      />
    </>
  )
} 