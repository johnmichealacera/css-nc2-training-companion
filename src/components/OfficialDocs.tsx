import { OFFICIAL_SAG_URL, OFFICIAL_TR_URL, TESDA_ASSESSMENT_URL } from '@/content/program'

export default function OfficialDocs({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? 'text-sm' : ''}>
      <p className="text-gray-700 mb-3">
        This site is an independent companion. It is not a TESDA-registered 280-hour program and is not affiliated with TESDA.
      </p>
      <ul className="space-y-2">
        <li>
          <a href={OFFICIAL_TR_URL} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
            Official Training Regulations (TR) PDF
          </a>
        </li>
        <li>
          <a href={OFFICIAL_SAG_URL} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
            Official Self-Assessment Guide (SAG) PDF
          </a>
        </li>
        <li>
          <a href={TESDA_ASSESSMENT_URL} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
            TESDA assessment information
          </a>
        </li>
      </ul>
    </div>
  )
}
