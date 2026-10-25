import Link from 'next/link'
import { Metadata } from 'next'
import { BookOpen } from 'lucide-react'
import Footer from '@/components/Footer'
import OfficialDocs from '@/components/OfficialDocs'
import LabNotice from '@/components/LabNotice'
import PageNav from '@/components/PageNav'
import { introSections } from '@/content/intro'
import { companionCore, officialProgram } from '@/content/program'

export const metadata: Metadata = {
  title: 'Intro to CSS NC II - Training Companion',
  description: 'Workplace primer for TESDA Computer Systems Servicing NC II: hours, OH&S, 5S, tools, and documentation.',
}

export default function IntroPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageNav links={[{ href: '/assessment', label: 'Assessment' }, { href: '/coc1', label: 'COC 1' }]} />

      <section className="bg-gradient-to-r from-slate-800 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center mb-4">
            <BookOpen className="h-10 w-10 mr-3" />
            <h1 className="text-4xl font-bold">Intro to CSS NC II</h1>
          </div>
          <p className="text-lg max-w-3xl opacity-90">
            Official program: {officialProgram.totalHours} hours ({officialProgram.basicHours} basic, {officialProgram.commonHours} common, {officialProgram.coreHours} core).
            This companion covers the {companionCore.totalHours}-hour core after this primer.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {introSections.map((section) => (
            <article key={section.id} className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="text-gray-700 mb-3 last:mb-0">{paragraph}</p>
              ))}
            </article>
          ))}

          <article className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Then take the four COCs in order</h2>
            <ol className="space-y-2">
              {companionCore.cocs.map((coc) => (
                <li key={coc.id}>
                  <Link href={coc.href} className="text-blue-700 hover:underline">
                    {coc.label}: {coc.title} ({coc.hours}h, {coc.code})
                  </Link>
                </li>
              ))}
            </ol>
          </article>

          <LabNotice>
            Assessment labs often use short passwords, open shares, and a disabled firewall so the demo finishes on time.
            Treat those as lab-only. The workplace version uses least privilege, WPA2 with a unique passphrase, and a running firewall.
          </LabNotice>

          <article className="bg-blue-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Official TESDA files</h2>
            <OfficialDocs />
          </article>

          <div className="flex flex-wrap gap-3">
            <Link href="/coc1" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
              Continue to COC 1
            </Link>
            <Link href="/assessment" className="border border-gray-300 px-6 py-3 rounded-lg font-semibold">
              Open assessment gym
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
