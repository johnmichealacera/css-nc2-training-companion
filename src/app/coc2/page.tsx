import Link from 'next/link'
import { Metadata } from 'next'
import { 
  Network, 
  ArrowLeft, 
  BookOpen, 
  CheckCircle,
  Clock,
  Users,
  ChevronRight,
  Wifi,
  Cable,
  Server
} from 'lucide-react'
import Footer from '@/components/Footer'
import COC2Modules from './COC2Modules'

export const metadata: Metadata = {
  title: 'COC 2: Setting up Computer Networks - CSS NC II Training',
  description: 'Master wired and wireless network setup, cable creation, router configuration, and workstation connectivity. Learn network protocols, IP addressing, and network troubleshooting.',
  keywords: 'COC 2, Computer Networks, Network Setup, Cable Creation, Router Configuration, Workstation Connectivity, Network Protocols, IP Addressing, CSS NC II, TESDA',
  openGraph: {
    title: 'COC 2: Setting up Computer Networks - CSS NC II Training',
    description: 'Master wired and wireless network setup, cable creation, router configuration, and workstation connectivity.',
    url: 'https://css-nc2-companion.vercel.app/coc2',
    siteName: 'CSS NC II Training Companion App',
    images: [
      {
        url: '/img/meta-coc2.jpg',
        width: 1200,
        height: 630,
        alt: 'COC 2: Setting up Computer Networks',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'COC 2: Setting up Computer Networks - CSS NC II Training',
    description: 'Master wired and wireless network setup, cable creation, router configuration, and workstation connectivity.',
    images: ['/img/meta-coc2.jpg'],
  },
};

export default function COC2Page() {
  const learningObjectives = [
    'Install and configure network cables',
    'Set up network configuration and IP addressing',
    'Configure routers and wireless access points',
    'Set up Wi-Fi and wireless repeaters',
    'Inspect and test configured networks',
    'Troubleshoot network connectivity issues'
  ]

  const networkTypes = [
    {
      name: 'Local Area Networks (LAN)',
      description: 'Connects computers within a limited area like school, office, or home',
      icon: Network
    },
    {
      name: 'Wide Area Networks (WAN)',
      description: 'Covers larger geographical areas with radius of more than a kilometer',
      icon: Network
    },
    {
      name: 'Personal Area Networks (PAN)',
      description: 'Based on individual workspace with device as network center',
      icon: Wifi
    },
    {
      name: 'Metropolitan Area Networks (MAN)',
      description: 'Stretches across metropolitan areas connecting multiple LANs',
      icon: Network
    }
  ]

  const networkComponents = [
    {
      name: 'Network Interface Card (NIC)',
      description: 'Hardware component to connect computers to network',
      features: ['10/100/1000 Mb/s transfer rate', 'MAC address encoding', 'Wired and wireless types']
    },
    {
      name: 'Switch',
      description: 'Advanced network device that connects multiple devices',
      features: ['Direct connection between source and destination', 'Increased network speed', 'Updated routing table']
    },
    {
      name: 'Router',
      description: 'Connects LAN with internet and forwards packets',
      features: ['Layer 3 operation', 'Security and reliability', 'Traffic load balancing']
    },
    {
      name: 'Patch Panel',
      description: 'Hardware with multiple ports to organize cable groups',
      features: ['Scalability', 'Reduces cable clutter', 'Easier maintenance']
    }
  ]

  const assessmentCriteria = [
    'Proper cable crimping and color coding',
    'Correct network configuration setup',
    'Successful router and Wi-Fi configuration',
    'Network connectivity testing',
    'Troubleshooting network issues',
    'Documentation and reporting'
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
              <Link href="/coc3" className="text-gray-600 hover:text-gray-900">COC 3</Link>
              <Link href="/coc4" className="text-gray-600 hover:text-gray-900">COC 4</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center mb-6">
            <Network className="h-12 w-12 mr-4" />
            <div>
              <h1 className="text-4xl font-bold">COC 2: Setting up Computer Networks</h1>
              <p className="text-xl opacity-90">Wired and Wireless Network Configuration</p>
            </div>
          </div>
          <p className="text-lg max-w-3xl">
            This module covers setting up computer networks for LANs and SOHO systems. 
            You will learn to install network cables, configure network settings, set up routers 
            and wireless access points, and test network connectivity.
          </p>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Duration</h3>
              <p className="text-gray-600">32 Hours</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Prerequisites</h3>
              <p className="text-gray-600">Intro to CSS + COC 1</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Format</h3>
              <p className="text-gray-600">Lecture + Hands-on</p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Objectives */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Learning Objectives</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              By the end of this module, you will be able to:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningObjectives.map((objective, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{objective}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Networks</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding different network types and their applications in various environments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {networkTypes.map((network, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <network.icon className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{network.name}</h3>
                </div>
                <p className="text-gray-600">{network.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Components */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Network Components</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Essential hardware components required for network installation and configuration.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {networkComponents.map((component, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-green-600 p-6">
                  <h3 className="text-xl font-semibold text-white">{component.name}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{component.description}</p>
                  <ul className="space-y-2">
                    {component.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <ChevronRight className="h-3 w-3 mr-2 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <COC2Modules />

      {/* Key Topics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Topics Covered</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Essential concepts and practical skills for network setup and configuration.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Cable className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Cable Crimping</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Learn proper UTP cable crimping with T-568A/B color coding standards and testing procedures.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Server className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">IP Addressing</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Master IPv4/IPv6 addressing, subnetting, static vs dynamic IP configuration.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Wifi className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Wireless Setup</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Configure routers, Wi-Fi access points, and wireless repeaters for optimal connectivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Criteria */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Assessment Criteria</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your performance will be evaluated based on the following criteria:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {assessmentCriteria.map((criterion, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center">
                  <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-semibold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 font-medium">{criterion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation to Next COC */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready for the Next Step?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Continue your journey with COC 3: Setting up Computer Servers
            </p>
            <Link 
              href="/coc3"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center"
            >
              Continue to COC 3 <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
} 