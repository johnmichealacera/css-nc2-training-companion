'use client'

import { blankForms } from '@/content/forms'

export default function PrintableForms() {
  return (
    <div className="space-y-8 print:space-y-12">
      <p className="text-gray-700 print:hidden">
        Print this page or save as PDF. Fill it during the mock, not after.
      </p>
      {blankForms.map((form) => (
        <section key={form.id} className="bg-white rounded-lg border border-gray-300 p-6 break-inside-avoid">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{form.title}</h3>
          <div className="space-y-4">
            {form.fields.map((field) => (
              <label key={field} className="block">
                <span className="text-sm text-gray-600">{field}</span>
                <span className="mt-1 block border-b border-gray-400 min-h-8" />
              </label>
            ))}
          </div>
        </section>
      ))}
      <button
        type="button"
        onClick={() => window.print()}
        className="print:hidden bg-gray-900 text-white px-5 py-2 rounded-lg"
      >
        Print forms
      </button>
    </div>
  )
}
