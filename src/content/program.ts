export const OFFICIAL_TR_URL =
  'https://www.tesda.gov.ph/Downloadables/TR%20Computer%20Systems%20Servicing%20NC%20II%20.pdf'
export const OFFICIAL_SAG_URL =
  'https://www.tesda.gov.ph/Downloadables/Computer%20Systems%20Servicing%20NC%20II.pdf'
export const TESDA_ASSESSMENT_URL = 'https://tesda.gov.ph/Assessment'

export const officialProgram = {
  title: 'Computer Systems Servicing NC II',
  qualification: 'ELCCSS213',
  trEdition: 'Training Regulations, amended December 2013',
  totalHours: 280,
  basicHours: 40,
  commonHours: 80,
  coreHours: 160,
}

export const companionCore = {
  totalHours: 160,
  cocs: [
    {
      id: 'coc1',
      href: '/coc1',
      code: 'ELC724331',
      label: 'COC 1',
      title: 'Install and Configure Computer Systems',
      hours: 40,
      description: 'Assemble hardware, prepare installers, install OS, drivers, and applications, then test and document.',
    },
    {
      id: 'coc2',
      href: '/coc2',
      code: 'ELC724332',
      label: 'COC 2',
      title: 'Set-up Computer Networks',
      hours: 40,
      description: 'Plan and install cables, configure IPs and routers, then inspect and test the LAN.',
    },
    {
      id: 'coc3',
      href: '/coc3',
      code: 'ELC724333',
      label: 'COC 3',
      title: 'Set-up Computer Servers',
      hours: 40,
      description: 'Set user access, configure network services, then test, document, and prepare for deployment.',
    },
    {
      id: 'coc4',
      href: '/coc4',
      code: 'ELC724334',
      label: 'COC 4',
      title: 'Maintain and Repair Computer Systems and Networks',
      hours: 40,
      description: 'Plan maintenance, diagnose and rectify faults, inspect, test, and complete a service report.',
    },
  ],
} as const

export function cocById(id: string) {
  return companionCore.cocs.find((coc) => coc.id === id)
}

export const cocNavLinks = companionCore.cocs.map((coc) => ({ href: coc.href, label: coc.label }))

export function otherCocLinks(currentId: string) {
  return cocNavLinks.filter((link) => link.href !== `/${currentId}`)
}
