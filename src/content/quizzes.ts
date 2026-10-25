export type QuizQuestion = {
  id: string
  prompt: string
  choices: string[]
  answer: number
}

export const moduleQuizzes: Record<'coc1' | 'coc2' | 'coc3' | 'coc4', QuizQuestion[]> = {
  coc1: [
    { id: 'q1', prompt: 'POST happens:', choices: ['After the user logs on', 'Before the OS loads', 'Only when RAM is missing', 'During Windows Update'], answer: 1 },
    { id: 'q2', prompt: 'An anti-static strap is for:', choices: ['Holding the case open', 'Equalizing potential so you do not zap ICs', 'Measuring 12 V', 'Tying cables'], answer: 1 },
    { id: 'q3', prompt: 'GPT disks pair best with:', choices: ['Legacy BIOS only', 'UEFI', 'MS-DOS', 'Floppy boot'], answer: 1 },
    { id: 'q4', prompt: 'A stress test in this unit should include:', choices: ['Only the wallpaper', 'CPU, memory, disk, or video', 'The router WAN', 'Folder redirection'], answer: 1 },
    { id: 'q5', prompt: '5S is mainly about:', choices: ['Subnetting', 'A clean, repeatable workplace', 'Secure Boot', 'DHCP scopes'], answer: 1 },
    { id: 'q6', prompt: 'Portable applications are:', choices: ['Always pirated Office', 'Apps that run from media without a full install', 'Only Linux packages', 'BIOS modules'], answer: 1 },
  ],
  coc2: [
    { id: 'q1', prompt: 'T-568A pin 1 is:', choices: ['White/Orange', 'White/Green', 'Blue', 'Brown'], answer: 1 },
    { id: 'q2', prompt: 'A crossover is usually:', choices: ['A both ends', 'B both ends', 'A on one end and B on the other', 'Rollover 1-8'], answer: 2 },
    { id: 'q3', prompt: '169.254.x.x means:', choices: ['A public web address', 'DHCP failed (APIPA)', 'IPv6 only', 'A WAN reservation'], answer: 1 },
    { id: 'q4', prompt: 'Raceway types in the TR include:', choices: ['Only zip ties', 'Slotted PVC, metallic, flexible conduit', 'SATA only', 'Thunderbolt'], answer: 1 },
    { id: 'q5', prompt: 'Turning the firewall off is:', choices: ['Required in every workplace', 'A lab shortcut if the brief says so', 'The same as WPA2', 'How you set DNS'], answer: 1 },
    { id: 'q6', prompt: 'A /24 IPv4 subnet has how many usable hosts?', choices: ['24', '256', '254', '2'], answer: 2 },
  ],
  coc3: [
    { id: 'q1', prompt: 'Set the server name and static IP:', choices: ['After promoting AD', 'Before promoting AD', 'Only on the client', 'Never'], answer: 1 },
    { id: 'q2', prompt: 'Clients should use DNS:', choices: ['8.8.8.8 only', 'The domain controller', 'APIPA', 'The printer'], answer: 1 },
    { id: 'q3', prompt: 'Effective share access is:', choices: ['Always Everyone', 'The more generous of share and NTFS', 'The tighter of share and NTFS', 'Only the share'], answer: 2 },
    { id: 'q4', prompt: 'Folder redirection is applied with:', choices: ['Rufus', 'A GPO on the OU', 'BIOS', 'WPA2'], answer: 1 },
    { id: 'q5', prompt: 'TR network services include:', choices: ['Only Solitaire', 'File, print, web, DC, remote access', 'Only IPv6', 'Only crossover cables'], answer: 1 },
    { id: 'q6', prompt: 'If you already hold old CHS papers, COC 3 is:', choices: ['Optional forever', 'Still required for CSS NC II', 'Replaced by COC 4', 'A written exam only'], answer: 1 },
  ],
  coc4: [
    { id: 'q1', prompt: 'First action on a repair job:', choices: ['Format the disk', 'Read the service order and apply OH&S', 'Turn off the firewall on the ISP router', 'Install IIS'], answer: 1 },
    { id: 'q2', prompt: 'A restore is proven when:', choices: ['The backup job is scheduled', 'A restored file opens', 'The share is Everyone', 'The PSU fan spins'], answer: 1 },
    { id: 'q3', prompt: 'Incremental backup copies:', choices: ['The entire disk always', 'Changes since the last backup of any type', 'Only the BIOS', 'Only printers'], answer: 1 },
    { id: 'q4', prompt: 'WEEE is about:', choices: ['Wi-Fi encryption', 'Electronic waste disposal', 'WAN encapsulation', 'Windows Easy Enrollment'], answer: 1 },
    { id: 'q5', prompt: 'No POST first checks:', choices: ['Folder redirection', 'Power, RAM, minimal boot', 'SSID only', 'IIS bindings'], answer: 1 },
    { id: 'q6', prompt: 'The job is finished when:', choices: ['It boots, even if the bench is a mess', 'It is tested, the site is 5S, and the report is signed', 'You leave the copper on the floor', 'You disable the firewall forever'], answer: 1 },
  ],
}
