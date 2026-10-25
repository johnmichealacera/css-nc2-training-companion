export type JobSheet = {
  id: string
  cocId: string
  title: string
  minutes: number
  goal: string
  evidence: string[]
  steps: string[]
}

export const jobSheets: JobSheet[] = [
  {
    id: 'coc1-assembly',
    cocId: 'coc1',
    title: 'Assemble, BIOS, and power-on',
    minutes: 45,
    goal: 'Build the PC, configure BIOS/UEFI, and hand it to the assessor for inspection.',
    evidence: ['Parts checklist', 'BIOS boot-order note', 'Power-on observation'],
    steps: [
      'PPE on. Unplug. Ground yourself.',
      'Install CPU, cooler, RAM, motherboard, PSU, storage, and cards.',
      'Cable-manage. No leftover screws.',
      'Set boot order and confirm POST.',
      'Ask for inspection before you close the side panel if that is the house rule.',
    ],
  },
  {
    id: 'coc1-os',
    cocId: 'coc1',
    title: 'Bootable media, OS, drivers, apps, test',
    minutes: 90,
    goal: 'Deliver a working OS with drivers, licensed apps, a stress-test note, and a job sheet.',
    evidence: ['USB labeled', 'Disk layout', 'Device Manager clean', 'Stress-test result', 'Signed job sheet'],
    steps: [
      'Create the installer. Verify it boots.',
      'Custom-install the OS in the brief.',
      'Drivers, updates, Office or equivalent, antivirus.',
      'Stress-test and 5S the bench.',
      'Write the document and stop the clock.',
    ],
  },
  {
    id: 'coc2-cabling',
    cocId: 'coc2',
    title: 'Cables, raceway, and tester',
    minutes: 40,
    goal: 'One straight and one crossover that pass the tester, dressed in raceway.',
    evidence: ['Cable test log', 'Photo or sketch of the route'],
    steps: [
      'Sketch the route. Cut only what you need.',
      'Terminate A-A (or B-B) and A-B.',
      'Test. Fix fails before you dress the raceway.',
      '5S copper scraps.',
    ],
  },
  {
    id: 'coc2-lan',
    cocId: 'coc2',
    title: 'IP plan, router, and ping',
    minutes: 50,
    goal: 'All hosts reach each other and the gateway. Router WAN and Wi-Fi match the brief.',
    evidence: ['IP table', 'ipconfig output', 'ping results', 'Router status page notes'],
    steps: [
      'Apply the IP plan. Static on the server, DHCP or static on clients as briefed.',
      'Set LAN, WAN, SSID, and WPA2.',
      'Ping every host. Record losses.',
      'Fill the inspection report.',
    ],
  },
  {
    id: 'coc3-directory',
    cocId: 'coc3',
    title: 'Directory, users, redirection, RDP',
    minutes: 90,
    goal: 'Domain clients with redirected Desktop and working RDP, plus a server report.',
    evidence: ['Users in the OU', 'Redirected Desktop UNC', 'RDP screenshot or observed session', 'Server report'],
    steps: [
      'Static IP, rename, promote AD, DNS, DHCP.',
      'OU, users, share with least privilege, GPO redirection.',
      'Join clients. Log on. Prove the Desktop landed on the share.',
      'RDP both ways. Write the report.',
    ],
  },
  {
    id: 'coc4-backup-share',
    cocId: 'coc4',
    title: 'Backup, restore, file and printer share',
    minutes: 60,
    goal: 'A proven restore and a working file plus printer share.',
    evidence: ['Backup job success', 'Restored file opened', 'Test print', 'Maintenance report'],
    steps: [
      'Create the backup share. Run backup from the client.',
      'Delete or move a test file, restore it, open it.',
      'Share a folder and the printer. Test from the second client.',
      'Clean the site and complete the report.',
    ],
  },
]
