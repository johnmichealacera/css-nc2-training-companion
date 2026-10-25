export type SagItem = {
  id: string
  text: string
  critical: boolean
}

export type SagCoc = {
  id: string
  title: string
  unitCode: string
  items: SagItem[]
}

export const sagGuides: SagCoc[] = [
  {
    id: 'coc1',
    title: 'Install and Configure Computer Systems',
    unitCode: 'ELC724331',
    items: [
      { id: 'c1-1', text: 'Plan the assembly, list parts, and follow OH&S (ESD strap, eye protection, unplug power).', critical: true },
      { id: 'c1-2', text: 'Identify and obtain the correct motherboard, storage, PSU, memory, and peripherals.', critical: false },
      { id: 'c1-3', text: 'Assemble the unit and configure BIOS/UEFI for the hardware.', critical: true },
      { id: 'c1-4', text: 'Create a portable bootable installer from vendor media.', critical: true },
      { id: 'c1-5', text: 'Prepare a customized installer and a USB of portable applications.', critical: false },
      { id: 'c1-6', text: 'Install the OS to the brief (Windows client or Server; know Linux/macOS exist in the TR).', critical: true },
      { id: 'c1-7', text: 'Install and configure drivers for onboard devices, printer, and scanner.', critical: true },
      { id: 'c1-8', text: 'Apply OS and driver updates or patches.', critical: true },
      { id: 'c1-9', text: 'Install application software with a valid license (Office, antivirus, utilities).', critical: true },
      { id: 'c1-10', text: 'Run a stress test on CPU, memory, disk, and video.', critical: true },
      { id: 'c1-11', text: 'Apply 5S / 3Rs and complete the installation documentation.', critical: true },
    ],
  },
  {
    id: 'coc2',
    title: 'Set-up Computer Networks',
    unitCode: 'ELC724332',
    items: [
      { id: 'c2-1', text: 'Plan cable routes from the network design and the actual room.', critical: true },
      { id: 'c2-2', text: 'Get the right materials, tools, and tester, and check they are safe to use.', critical: true },
      { id: 'c2-3', text: 'Wear PPE and follow OH&S while pulling and terminating cable.', critical: false },
      { id: 'c2-4', text: 'Splice copper to T-568A and T-568B (straight-through and crossover).', critical: true },
      { id: 'c2-5', text: 'Install UTP in slotted PVC, metallic raceway, or flexible conduit as required.', critical: true },
      { id: 'c2-6', text: 'Follow 5S / 3Rs and dispose of copper waste properly.', critical: false },
      { id: 'c2-7', text: 'Configure NIC settings (static and DHCP) to the design, including gateway and DNS.', critical: true },
      { id: 'c2-8', text: 'Configure router LAN, WAN, Wi-Fi, and security/firewall/advanced settings.', critical: true },
      { id: 'c2-9', text: 'Prove connectivity (tester + ping) and write the inspection report.', critical: true },
    ],
  },
  {
    id: 'coc3',
    title: 'Set-up Computer Servers',
    unitCode: 'ELC724333',
    items: [
      { id: 'c3-1', text: 'Create user folders and set access levels to policy, not Everyone Full Control in production.', critical: true },
      { id: 'c3-2', text: 'Perform a security check (password policy, unused accounts, RDP group).', critical: true },
      { id: 'c3-3', text: 'Confirm the server boots clean and has network connectivity.', critical: false },
      { id: 'c3-4', text: 'Install or update required roles (AD DS, DNS, DHCP, file, print, remote access).', critical: true },
      { id: 'c3-5', text: 'Configure the network services named in the brief and prove they work from a client.', critical: true },
      { id: 'c3-6', text: 'Join clients to the domain, apply folder redirection, and test RDP.', critical: true },
      { id: 'c3-7', text: 'Run pre-deployment checks and complete the server report.', critical: true },
    ],
  },
  {
    id: 'coc4',
    title: 'Maintain and Repair Computer Systems and Networks',
    unitCode: 'ELC724334',
    items: [
      { id: 'c4-1', text: 'Read the job/service order and plan tools, parts, and OH&S before touching the unit.', critical: true },
      { id: 'c4-2', text: 'Perform scheduled or preventive maintenance to the manufacturer interval.', critical: true },
      { id: 'c4-3', text: 'Diagnose system and network faults with a method, not guesswork.', critical: true },
      { id: 'c4-4', text: 'Replace or correct the defective part without damaging nearby services.', critical: true },
      { id: 'c4-5', text: 'Back up and restore user data over the network and prove the restore.', critical: true },
      { id: 'c4-6', text: 'Set up file and printer sharing with working permissions.', critical: true },
      { id: 'c4-7', text: 'Inspect, test for safe operation, clean the site, apply 5S / WEEE, and complete the report.', critical: true },
    ],
  },
]
