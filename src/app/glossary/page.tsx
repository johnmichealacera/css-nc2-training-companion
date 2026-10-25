import { Metadata } from 'next'
import { BookOpen } from 'lucide-react'
import Footer from '@/components/Footer'
import GlossaryBrowser from '@/components/GlossaryBrowser'
import PageNav from '@/components/PageNav'
import { OFFICIAL_SAG_URL, OFFICIAL_TR_URL, TESDA_ASSESSMENT_URL } from '@/content/program'
import { glossaryTerms } from '@/content/glossary'

export const metadata: Metadata = {
  title: 'Glossary - CSS NC II Training Companion App',
  description: `Searchable glossary of ${glossaryTerms.length} Computer Systems Servicing NC II terms.`,
}

export default function GlossaryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageNav links={[{ href: '/intro', label: 'Intro' }, { href: '/assessment', label: 'Assessment' }]} />

      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center mb-4">
            <BookOpen className="h-12 w-12 mr-4" />
            <div>
              <h1 className="text-4xl font-bold">CSS NC II Glossary</h1>
              <p className="text-xl opacity-90">{glossaryTerms.length} terms used in the TR, labs, and oral questions</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlossaryBrowser />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Official and practice links</h2>
          <ul className="space-y-2 text-blue-700">
            <li><a href={OFFICIAL_TR_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">TESDA Training Regulations PDF</a></li>
            <li><a href={OFFICIAL_SAG_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">TESDA Self-Assessment Guide PDF</a></li>
            <li><a href={TESDA_ASSESSMENT_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">TESDA assessment page</a></li>
            <li><a href="https://e-tesda.gov.ph/" target="_blank" rel="noopener noreferrer" className="hover:underline">e-TESDA</a></li>
            <li><a href="https://www.virtualbox.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">VirtualBox</a></li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  )
}
