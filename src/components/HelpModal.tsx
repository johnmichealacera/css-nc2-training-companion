'use client'

import { useState, useEffect } from 'react'
import { X, Keyboard, MousePointer, ArrowUp } from 'lucide-react'

interface HelpModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function HelpModal({ isOpen, onClose }: HelpModalProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
    } else {
      const timer = setTimeout(() => setIsVisible(false), 200)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  if (!isVisible) return null

  const shortcuts = [
    { key: 'Ctrl/Cmd + K', description: 'Go to home page' },
    { key: 'Ctrl/Cmd + 1', description: 'Go to COC 1 (Installing and Configuring)' },
    { key: 'Ctrl/Cmd + 2', description: 'Go to COC 2 (Setting up Networks)' },
    { key: 'Ctrl/Cmd + 3', description: 'Go to COC 3 (Setting up Servers)' },
    { key: 'Ctrl/Cmd + 4', description: 'Go to COC 4 (Maintaining and Repairing)' },
    { key: 'Ctrl/Cmd + G', description: 'Go to Glossary' },
    { key: 'Ctrl/Cmd + A', description: 'Go to About page' },
    { key: 'Ctrl/Cmd + ?', description: 'Show this help modal' },
    { key: 'Home', description: 'Scroll to top of page' },
    { key: 'End', description: 'Scroll to bottom of page' },
  ]

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-200 ${
      isOpen ? 'opacity-100' : 'opacity-0'
    }`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center space-x-3">
            <Keyboard className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-900">Keyboard Shortcuts</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close help modal"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="space-y-6">
            {/* Navigation Shortcuts */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3 flex items-center">
                <MousePointer className="h-5 w-5 mr-2 text-blue-600" />
                Navigation Shortcuts
              </h3>
              <div className="space-y-2">
                {shortcuts.slice(0, 8).map((shortcut, index) => (
                  <div key={index} className="flex justify-between items-center py-2">
                    <kbd className="px-2 py-1 text-sm font-mono bg-gray-100 rounded border">
                      {shortcut.key}
                    </kbd>
                    <span className="text-gray-600 text-sm">{shortcut.description}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll Shortcuts */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3 flex items-center">
                <ArrowUp className="h-5 w-5 mr-2 text-green-600" />
                Scroll Shortcuts
              </h3>
              <div className="space-y-2">
                {shortcuts.slice(8).map((shortcut, index) => (
                  <div key={index} className="flex justify-between items-center py-2">
                    <kbd className="px-2 py-1 text-sm font-mono bg-gray-100 rounded border">
                      {shortcut.key}
                    </kbd>
                    <span className="text-gray-600 text-sm">{shortcut.description}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-medium text-blue-900 mb-2">💡 Tips</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Use the scroll progress bar at the top to track your position</li>
                <li>• Click the back-to-top button (bottom right) for quick navigation</li>
                <li>• Keyboard shortcuts work anywhere on the site</li>
                <li>• Shortcuts are disabled when typing in forms</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end p-6 border-t bg-gray-50">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  )
} 