import Link from 'next/link'
import { Metadata } from 'next'
import { 
  BookOpen, 
  ArrowLeft, 
  Search,
  Hash,
  Info,
  AlertCircle
} from 'lucide-react'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Glossary - CSS NC II Training Companion App',
  description: 'Comprehensive glossary of Computer Systems Servicing NC II terms and definitions. Find explanations for technical terms, acronyms, and concepts used in CSS NC II training.',
  keywords: 'Glossary, CSS NC II, Computer Systems Servicing, Technical Terms, Definitions, Acronyms, Training Concepts, TESDA',
  openGraph: {
    title: 'Glossary - CSS NC II Training Companion App',
    description: 'Comprehensive glossary of Computer Systems Servicing NC II terms and definitions. Find explanations for technical terms and concepts.',
    url: 'https://css-nc2-companion.vercel.app/glossary',
    siteName: 'CSS NC II Training Companion App',
    images: [
      {
        url: '/img/meta-glossary.jpg',
        width: 1200,
        height: 630,
        alt: 'CSS NC II Training Glossary',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glossary - CSS NC II Training Companion App',
    description: 'Comprehensive glossary of Computer Systems Servicing NC II terms and definitions. Find explanations for technical terms and concepts.',
    images: ['/img/meta-glossary.jpg'],
  },
};

export default function GlossaryPage() {
  const glossaryTerms = [
    {
      category: 'Hardware Components',
      terms: [
        {
          term: 'CPU (Central Processing Unit)',
          definition: 'The primary component of a computer that processes instructions and performs calculations.',
          example: 'Intel Core i7, AMD Ryzen 5'
        },
        {
          term: 'RAM (Random Access Memory)',
          definition: 'Temporary storage that holds data and instructions for the CPU to process.',
          example: '8GB DDR4, 16GB DDR5'
        },
        {
          term: 'Motherboard',
          definition: 'The main circuit board that connects all computer components.',
          example: 'ATX, Micro-ATX, Mini-ITX'
        },
        {
          term: 'NIC (Network Interface Card)',
          definition: 'Hardware component that enables a computer to connect to a network.',
          example: 'Ethernet card, Wireless adapter'
        }
      ]
    },
    {
      category: 'Network Terms',
      terms: [
        {
          term: 'LAN (Local Area Network)',
          definition: 'A network that connects computers within a limited geographical area.',
          example: 'Office network, Home network'
        },
        {
          term: 'WAN (Wide Area Network)',
          definition: 'A network that covers a large geographical area, often connecting multiple LANs.',
          example: 'Internet, Corporate network across cities'
        },
        {
          term: 'IP Address',
          definition: 'A unique numerical identifier assigned to devices on a network.',
          example: '192.168.1.1, 10.0.0.1'
        },
        {
          term: 'DHCP (Dynamic Host Configuration Protocol)',
          definition: 'A protocol that automatically assigns IP addresses to devices on a network.',
          example: 'Router DHCP server'
        },
        {
          term: 'DNS (Domain Name System)',
          definition: 'A system that translates domain names into IP addresses.',
          example: 'google.com → 8.8.8.8'
        }
      ]
    },
    {
      category: 'Server Administration',
      terms: [
        {
          term: 'Domain Controller',
          definition: 'A server that manages network authentication and directory services.',
          example: 'Active Directory Domain Controller'
        },
        {
          term: 'File Server',
          definition: 'A server that provides file storage and sharing services to network clients.',
          example: 'Network file share, NAS device'
        },
        {
          term: 'Web Server',
          definition: 'A server that hosts websites and web applications.',
          example: 'Apache, Nginx, IIS'
        },
        {
          term: 'Database Server',
          definition: 'A server that manages and stores database information.',
          example: 'MySQL, SQL Server, PostgreSQL'
        }
      ]
    },
    {
      category: 'Maintenance & Repair',
      terms: [
        {
          term: 'Preventive Maintenance',
          definition: 'Regular maintenance performed to prevent system failures.',
          example: 'Cleaning, updates, inspections'
        },
        {
          term: 'Corrective Maintenance',
          definition: 'Repair work performed after a system failure.',
          example: 'Replacing failed components'
        },
        {
          term: 'ESD (Electrostatic Discharge)',
          definition: 'The sudden flow of electricity between electrically charged objects.',
          example: 'Static electricity damage to components'
        },
        {
          term: 'BIOS/UEFI',
          definition: 'Firmware that initializes hardware during the boot process.',
          example: 'System configuration, Boot order'
        }
      ]
    },
    {
      category: 'Cabling & Connectors',
      terms: [
        {
          term: 'UTP (Unshielded Twisted Pair)',
          definition: 'A type of cable with twisted pairs of wires without shielding.',
          example: 'Cat5e, Cat6, Cat6a cables'
        },
        {
          term: 'STP (Shielded Twisted Pair)',
          definition: 'A type of cable with twisted pairs of wires with additional shielding.',
          example: 'Industrial network cables'
        },
        {
          term: 'RJ45',
          definition: 'A standardized connector used for Ethernet network connections.',
          example: 'Network cable connector'
        },
        {
          term: 'Crimping',
          definition: 'The process of attaching connectors to the end of cables.',
          example: 'Making network cables'
        }
      ]
    },
    {
      category: 'Security',
      terms: [
        {
          term: 'Firewall',
          definition: 'A security system that monitors and controls network traffic.',
          example: 'Windows Firewall, Router firewall'
        },
        {
          term: 'Encryption',
          definition: 'The process of encoding data to prevent unauthorized access.',
          example: 'SSL/TLS, BitLocker'
        },
        {
          term: 'Authentication',
          definition: 'The process of verifying the identity of a user or system.',
          example: 'Username/password, Biometric'
        },
        {
          term: 'Authorization',
          definition: 'The process of determining what resources a user can access.',
          example: 'File permissions, User rights'
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Home
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/coc1" className="text-gray-600 hover:text-gray-900">COC 1</Link>
              <Link href="/coc2" className="text-gray-600 hover:text-gray-900">COC 2</Link>
              <Link href="/coc3" className="text-gray-600 hover:text-gray-900">COC 3</Link>
              <Link href="/coc4" className="text-gray-600 hover:text-gray-900">COC 4</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center mb-6">
            <BookOpen className="h-12 w-12 mr-4" />
            <div>
              <h1 className="text-4xl font-bold">CSS NC II Glossary</h1>
              <p className="text-xl opacity-90">Comprehensive Reference Guide</p>
            </div>
          </div>
          <p className="text-lg max-w-3xl">
            A comprehensive glossary of terms, definitions, and concepts related to Computer Systems 
            Servicing NC II. Use this reference guide to enhance your understanding of key concepts.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search terms..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Glossary Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {glossaryTerms.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <div className="flex items-center mb-6">
                <Hash className="h-6 w-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">{category.category}</h2>
              </div>
              
              <div className="grid gap-6">
                {category.terms.map((term, termIndex) => (
                  <div key={termIndex} className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-start">
                      <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Info className="h-4 w-4 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{term.term}</h3>
                        <p className="text-gray-600 mb-3">{term.definition}</p>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="flex items-center mb-1">
                            <AlertCircle className="h-4 w-4 text-gray-500 mr-2" />
                            <span className="text-sm font-medium text-gray-700">Example:</span>
                          </div>
                          <p className="text-sm text-gray-600">{term.example}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Resources</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Expand your knowledge with these additional learning resources.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🔗 Online References</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a 
                    href="https://learn.microsoft.com/en-us/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    • Microsoft Documentation
                  </a>
                </li>
                <li>
                  <a 
                    href="https://learningnetwork.cisco.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    • Cisco Learning Network
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.comptia.org/training/resources" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    • CompTIA Resources
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.networkworld.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    • Network World
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🧪 Practice Tools</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a 
                    href="https://www.netacad.com/courses/packet-tracer" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 hover:underline"
                  >
                    • Cisco Packet Tracer (via NetAcad)
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.boson.com/netsim-cisco-network-simulator" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 hover:underline"
                  >
                    • Boson NetSim (Free Trial)
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.virtualbox.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 hover:underline"
                  >
                    • VirtualBox (Virtualization Tool)
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.gns3.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 hover:underline"
                  >
                    • GNS3 (Graphical Network Simulator)
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.examcompass.com/comptia/a-plus-certification/free-a-plus-practice-tests" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 hover:underline"
                  >
                    • ExamCompass Practice Tests
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">📘 Certification Prep</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a 
                    href="https://tesda.gov.ph/Downloadables/TR_CSS%20NC%20II.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-800 hover:underline"
                  >
                    • TESDA CSS NC II Competency Standards PDF
                  </a>
                </li>
                <li>
                  <a 
                    href="https://tesda.gov.ph/Assessment" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-800 hover:underline"
                  >
                    • TESDA Assessment Criteria Page
                  </a>
                </li>
                <li>
                  <a 
                    href="https://e-tesda.gov.ph/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-800 hover:underline"
                  >
                    • e-TESDA Online Courses
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.gocertify.com/quizzes/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-800 hover:underline"
                  >
                    • GoCertify Mock Exams
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
} 