'use client'

import { useEffect, useState } from 'react'
import { sagGuides } from '@/content/sag'

const storageKey = 'css-nc2-sag'

type Answers = Record<string, boolean>

export default function SagChecklist() {
  const [answers, setAnswers] = useState<Answers>({})
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const raw = window.localStorage.getItem(storageKey)
    if (raw) setAnswers(JSON.parse(raw) as Answers)
    setReady(true)
  }, [])

  useEffect(() => {
    if (ready) window.localStorage.setItem(storageKey, JSON.stringify(answers))
  }, [answers, ready])

  return (
    <div className="space-y-8">
      {sagGuides.map((guide) => {
        const done = guide.items.filter((item) => answers[item.id]).length
        return (
          <section key={guide.id} id={`sag-${guide.id}`} className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
              <h3 className="text-xl font-semibold text-gray-900">{guide.title}</h3>
              <p className="text-sm text-gray-500">{guide.unitCode} · {done}/{guide.items.length} yes</p>
            </div>
            <ul className="space-y-3">
              {guide.items.map((item) => (
                <li key={item.id} className="flex items-start gap-3">
                  <input
                    id={item.id}
                    type="checkbox"
                    checked={Boolean(answers[item.id])}
                    onChange={(event) =>
                      setAnswers((current) => ({ ...current, [item.id]: event.target.checked }))
                    }
                    className="mt-1 h-4 w-4"
                  />
                  <label htmlFor={item.id} className="text-gray-800">
                    {item.text}
                    {item.critical ? (
                      <span className="ml-2 text-xs font-medium text-amber-800">critical</span>
                    ) : null}
                  </label>
                </li>
              ))}
            </ul>
          </section>
        )
      })}
    </div>
  )
}
