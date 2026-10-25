'use client'

import { youtubeEmbedUrl } from '@/lib/youtube'

export default function VideoModal({
  url,
  title,
  description,
  onClose,
}: {
  url: string
  title: string
  description?: string
  onClose: () => void
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden">
        <div className="p-3 sm:p-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 pr-2">{title}</h3>
            <button type="button" onClick={onClose} className="text-gray-500 hover:text-gray-700 flex-shrink-0" aria-label="Close">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div className="p-3 sm:p-4">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src={youtubeEmbedUrl(url)}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          {description ? (
            <div className="mt-4">
              <h4 className="font-semibold text-gray-900 mb-2">Video Description:</h4>
              <p className="text-gray-600">{description}</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
