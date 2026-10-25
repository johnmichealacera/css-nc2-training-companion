'use client'

import { useEffect, useState } from 'react'
import { jobSheets } from '@/content/job-sheets'

function format(seconds: number) {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

export default function MockJobSheet() {
  const [activeId, setActiveId] = useState(jobSheets[0].id)
  const [remaining, setRemaining] = useState(jobSheets[0].minutes * 60)
  const [running, setRunning] = useState(false)
  const sheet = jobSheets.find((item) => item.id === activeId) ?? jobSheets[0]

  useEffect(() => {
    if (!running) return
    const tick = window.setInterval(() => {
      setRemaining((value) => (value > 0 ? value - 1 : 0))
    }, 1000)
    return () => window.clearInterval(tick)
  }, [running])

  return (
    <div className="grid lg:grid-cols-[16rem_1fr] gap-6">
      <aside className="space-y-2">
        {jobSheets.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => {
              setActiveId(item.id)
              setRemaining(item.minutes * 60)
              setRunning(false)
            }}
            className={`w-full text-left rounded-lg px-3 py-2 text-sm ${
              item.id === activeId ? 'bg-blue-600 text-white' : 'bg-white border border-gray-200 text-gray-800'
            }`}
          >
            {item.title}
          </button>
        ))}
      </aside>
      <article className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <h3 className="text-xl font-semibold text-gray-900">{sheet.title}</h3>
          <p className={`font-mono text-2xl ${remaining === 0 ? 'text-red-600' : 'text-gray-900'}`}>
            {format(remaining)}
          </p>
        </div>
        <p className="text-gray-700 mb-4">{sheet.goal}</p>
        <div className="flex gap-2 mb-6">
          <button type="button" className="bg-blue-600 text-white px-4 py-2 rounded-lg" onClick={() => setRunning(true)}>
            Start
          </button>
          <button type="button" className="border border-gray-300 px-4 py-2 rounded-lg" onClick={() => setRunning(false)}>
            Pause
          </button>
          <button
            type="button"
            className="border border-gray-300 px-4 py-2 rounded-lg"
            onClick={() => {
              setRemaining(sheet.minutes * 60)
              setRunning(false)
            }}
          >
            Reset
          </button>
        </div>
        <h4 className="font-semibold text-gray-900 mb-2">Do this</h4>
        <ol className="list-decimal list-inside space-y-1 text-gray-700 mb-6">
          {sheet.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <h4 className="font-semibold text-gray-900 mb-2">Evidence to keep</h4>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {sheet.evidence.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
    </div>
  )
}
