'use client'

import { useState } from 'react'
import { oralBanks } from '@/content/oral-questions'
import { companionCore } from '@/content/program'

export default function OralBank() {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <div className="space-y-8">
      {companionCore.cocs.map((coc) => (
        <section key={coc.id} className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">{coc.label}: {coc.title}</h3>
          <ol className="space-y-3">
            {oralBanks[coc.id].map((item, index) => {
              const key = `${coc.id}-${index}`
              const shown = open === key
              return (
                <li key={key} className="border border-gray-100 rounded-lg p-3">
                  <p className="font-medium text-gray-900">{index + 1}. {item.q}</p>
                  <button
                    type="button"
                    className="mt-2 text-sm text-blue-700 hover:underline"
                    onClick={() => setOpen(shown ? null : key)}
                  >
                    {shown ? 'Hide answer' : 'Show answer'}
                  </button>
                  {shown ? <p className="mt-2 text-gray-700">{item.a}</p> : null}
                </li>
              )
            })}
          </ol>
        </section>
      ))}
    </div>
  )
}
