export type BlankForm = {
  id: string
  title: string
  fields: string[]
}

export const blankForms: BlankForm[] = [
  {
    id: 'inventory',
    title: 'Parts and tools inventory',
    fields: ['Date', 'Trainee', 'Asset / booth', 'Motherboard / CPU / RAM / storage / PSU', 'Tools checked', 'Missing items', 'Signature'],
  },
  {
    id: 'ip-plan',
    title: 'IP and naming plan',
    fields: ['Hostname', 'Role', 'IPv4 / mask', 'Gateway', 'DNS', 'MAC (optional)', 'Notes'],
  },
  {
    id: 'cable-log',
    title: 'Cable test log',
    fields: ['Cable ID', 'Type (straight / cross)', 'Standard (A or B)', 'Length', 'Tester result', 'Fault', 'Retest', 'Tech'],
  },
  {
    id: 'backup-log',
    title: 'Backup and restore log',
    fields: ['Date', 'Source path', 'Destination UNC', 'Type (full / inc)', 'Job result', 'Restore test file', 'Opened OK?', 'Tech'],
  },
  {
    id: 'maintenance',
    title: 'Maintenance and repair report',
    fields: ['Date / time', 'Asset tag', 'Reported symptom', 'Diagnosis', 'Action / parts', 'Tests performed', '5S / WEEE done', 'Customer / assessor sign'],
  },
]
