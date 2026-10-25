'use client'

import { useState } from 'react'
import Footer from '@/components/Footer'
import PageNav from '@/components/PageNav'
import OfficialDocs from '@/components/OfficialDocs'
import SagChecklist from '@/components/SagChecklist'
import OralBank from '@/components/OralBank'
import MockJobSheet from '@/components/MockJobSheet'
import PrintableForms from '@/components/PrintableForms'

const tabs = [
  { id: 'how', label: 'How assessment works' },
  { id: 'sag', label: 'Self-check' },
  { id: 'mock', label: 'Timed mocks' },
  { id: 'oral', label: 'Oral questions' },
  { id: 'forms', label: 'Blank forms' },
] as const

export default function AssessmentPage() {
  const [tab, setTab] = useState<(typeof tabs)[number]['id']>('how')

  return (
    <div className="min-h-screen bg-gray-50">
      <PageNav printHidden links={[{ href: '/intro', label: 'Intro' }, { href: '/coc1', label: 'COC 1' }]} />

      <section className="bg-gradient-to-r from-blue-800 to-indigo-800 text-white print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h1 className="text-4xl font-bold mb-3">Assessment gym</h1>
          <p className="text-lg max-w-3xl opacity-90">
            Practice the way TESDA assesses: practical demonstration, oral questions, and written evidence.
            Passing here does not grant a National Certificate.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-2 mb-8 print:hidden">
          {tabs.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setTab(item.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                tab === item.id ? 'bg-blue-600 text-white' : 'bg-white border border-gray-200 text-gray-800'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {tab === 'how' ? (
          <div className="space-y-6 max-w-3xl">
            <article className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">What happens on assessment day</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>You demonstrate the four core COCs. Basic and common skills are judged inside those tasks.</li>
                <li>A Certificate of Competency can be issued per COC. The National Certificate comes after all four.</li>
                <li>Expect practical work plus oral questioning. Bring IDs and any center-required tools.</li>
                <li>COC 3 (Set-up Computer Servers) is required even if you already hold older CHS papers.</li>
                <li>Work clean. Assessors watch OH&S, 5S, and the report, not only a successful ping.</li>
              </ul>
            </article>
            <article className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">What to bring</h2>
              <p className="text-gray-700">
                Valid ID, any list the assessment center sent, and calm notes. Do not bring a script of TESDA
                documents — use the official TR and SAG for study, then perform from memory and the brief.
              </p>
            </article>
            <article className="bg-blue-50 rounded-lg p-6">
              <OfficialDocs />
            </article>
          </div>
        ) : null}

        {tab === 'sag' ? <SagChecklist /> : null}
        {tab === 'mock' ? <MockJobSheet /> : null}
        {tab === 'oral' ? <OralBank /> : null}
        {tab === 'forms' ? <PrintableForms /> : null}
      </div>
      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  )
}
