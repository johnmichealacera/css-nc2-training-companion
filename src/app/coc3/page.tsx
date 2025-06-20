import Link from 'next/link'
import { Metadata } from 'next'
import { 
  Server, 
  ArrowLeft, 
  BookOpen, 
  CheckCircle,
  Clock,
  Users,
  ChevronRight,
  Shield,
  Database,
  Settings,
  Monitor,
  FileText
} from 'lucide-react'
import Footer from '@/components/Footer'
import COC3Modules from './COC3Modules'

export const metadata: Metadata = {
  title: 'COC 3: Configure Server - CSS NC II Training',
  description: 'Learn server configuration and management including local server setup, Active Directory installation, folder redirection, and remote desktop management. Master domain controller setup and network services.',
  keywords: 'COC 3, Server Configuration, Active Directory, Domain Controller, Folder Redirection, Remote Desktop, Network Services, Server Management, CSS NC II, TESDA',
  openGraph: {
    title: 'COC 3: Configure Server - CSS NC II Training',
    description: 'Learn server configuration and management including local server setup, Active Directory installation, folder redirection, and remote desktop management.',
    url: 'https://css-nc2-companion.vercel.app/coc3',
    siteName: 'CSS NC II Training Companion App',
    images: [
      {
        url: '/img/meta-coc3.jpg',
        width: 1200,
        height: 630,
        alt: 'COC 3: Configure Server',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'COC 3: Configure Server - CSS NC II Training',
    description: 'Learn server configuration and management including local server setup, Active Directory installation, folder redirection, and remote desktop management.',
    images: ['/img/meta-coc3.jpg'],
  },
};

export default function COC3Page() {
  const learningObjectives = [
    'Configure local server settings and network configuration',
    'Install and configure server roles including Active Directory',
    'Set up folder redirection and user account management',
    'Enable and manage remote desktop connections',
    'Implement proper server security measures',
    'Test and validate server functionality'
  ]

  const serverTypes = [
    {
      name: 'Domain Controller',
      description: 'Manages network authentication and directory services',
      icon: Shield,
      features: ['User authentication', 'Group policies', 'Active Directory', 'DNS services']
    },
    {
      name: 'File Server',
      description: 'Manages and shares files across the network',
      icon: FileText,
      features: ['File sharing', 'Access control', 'Backup management', 'Folder redirection']
    },
    {
      name: 'DHCP Server',
      description: 'Automatically assigns IP addresses to network devices',
      icon: Database,
      features: ['IP address allocation', 'Subnet configuration', 'Lease management', 'Scope management']
    },
    {
      name: 'Remote Desktop Server',
      description: 'Enables remote access to server and client machines',
      icon: Monitor,
      features: ['Remote access', 'Session management', 'Security policies', 'Connection control']
    }
  ]

  const networkServices = [
    {
      name: 'Active Directory Domain Services (AD DS)',
      description: 'Centralized directory service for user and computer management',
      features: ['User authentication', 'Group policy management', 'Organizational units', 'Domain services']
    },
    {
      name: 'DNS (Domain Name System)',
      description: 'Translates domain names to IP addresses',
      features: ['Name resolution', 'Zone management', 'Record configuration', 'Reverse lookup']
    },
    {
      name: 'DHCP (Dynamic Host Configuration Protocol)',
      description: 'Automatically assigns IP addresses to network devices',
      features: ['IP address allocation', 'Subnet configuration', 'Lease management', 'Scope configuration']
    },
    {
      name: 'Folder Redirection',
      description: 'Redirects user folders to network locations',
      features: ['Desktop redirection', 'Documents redirection', 'Group policy integration', 'Offline access']
    }
  ]

  const securityMeasures = [
    {
      title: 'Firewall Configuration',
      description: 'Configure Windows Firewall to allow necessary services',
      icon: Shield
    },
    {
      title: 'User Access Control',
      description: 'Implement proper user authentication and authorization',
      icon: Users
    },
    {
      title: 'Remote Desktop Security',
      description: 'Secure remote desktop connections with proper credentials',
      icon: Monitor
    },
    {
      title: 'Group Policy Security',
      description: 'Apply security policies through Group Policy Objects',
      icon: Settings
    }
  ]

  const assessmentCriteria = [
    'Proper local server configuration and network setup',
    'Successful installation and configuration of server roles',
    'Correct folder redirection and user account management',
    'Effective remote desktop management and connectivity',
    'Implementation of security measures and policies',
    'Complete testing and validation of server functionality'
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
              <Link href="/coc4" className="text-gray-600 hover:text-gray-900">COC 4</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center mb-6">
            <Server className="h-12 w-12 mr-4" />
            <div>
              <h1 className="text-4xl font-bold">COC 3: Configure Server</h1>
              <p className="text-xl opacity-90">Server Configuration and Management</p>
            </div>
          </div>
          <p className="text-lg max-w-3xl">
            This module covers configuring computer servers including local server setup, 
            Active Directory installation, folder redirection, and remote desktop management. 
            You will learn to configure servers for domain readiness and network services.
          </p>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Duration</h3>
              <p className="text-gray-600">30 Hours</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Prerequisites</h3>
              <p className="text-gray-600">Intro to CSS + COC 1 + COC 2</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-green-600" />
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
                  <CheckCircle className="h-6 w-6 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{objective}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Server Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Servers</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding different server types and their specific roles in network infrastructure.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {serverTypes.map((server, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <server.icon className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{server.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{server.description}</p>
                <ul className="space-y-2">
                  {server.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <ChevronRight className="h-3 w-3 mr-2 text-purple-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Network Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Essential network services that servers provide to support network operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {networkServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-purple-600 p-6">
                  <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <ChevronRight className="h-3 w-3 mr-2 text-purple-500" />
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

      {/* Security Measures */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Security Measures</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Essential security practices to protect servers and network infrastructure.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {securityMeasures.map((measure, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <measure.icon className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{measure.title}</h3>
                </div>
                <p className="text-gray-600">{measure.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <COC3Modules />

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
                  <div className="bg-purple-100 w-8 h-8 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-semibold text-sm">{index + 1}</span>
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
              Continue your journey with COC 4: Maintaining and Repairing Systems and Networks
            </p>
            <Link 
              href="/coc4"
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-flex items-center"
            >
              Continue to COC 4 <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
} 