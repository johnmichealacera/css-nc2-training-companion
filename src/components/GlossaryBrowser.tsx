'use client'

import { useMemo, useState } from 'react'
import { glossaryTerms } from '@/content/glossary'

export default function GlossaryBrowser() {
  const [query, setQuery] = useState('')
  const categories = [...new Set(glossaryTerms.map((item) => item.category))]
  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase()
    if (!needle) return glossaryTerms
    return glossaryTerms.filter((item) =>
      `${item.term} ${item.definition} ${item.example} ${item.category}`.toLowerCase().includes(needle)
    )
  }, [query])

  return (
    <div>
      <div className="mb-6">
        <label htmlFor="glossary-search" className="block text-sm font-medium text-gray-700 mb-2">
          Search {glossaryTerms.length} terms
        </label>
        <input
          id="glossary-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="BIOS, T-568A, folder redirection…"
          className="w-full max-w-xl rounded-lg border border-gray-300 px-4 py-2"
        />
      </div>
      {categories.map((category) => {
        const terms = visible.filter((item) => item.category === category)
        if (!terms.length) return null
        return (
          <section key={category} className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{category}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {terms.map((item) => (
                <article key={item.term} className="bg-white rounded-lg border border-gray-200 p-4">
                  <h3 className="font-semibold text-gray-900">{item.term}</h3>
                  <p className="text-gray-700 mt-1">{item.definition}</p>
                  <p className="text-sm text-gray-500 mt-2">Example: {item.example}</p>
                </article>
              ))}
            </div>
          </section>
        )
      })}
      {visible.length === 0 ? <p className="text-gray-600">No terms match that search.</p> : null}
    </div>
  )
}
