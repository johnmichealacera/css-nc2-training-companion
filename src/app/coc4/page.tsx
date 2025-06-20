import Link from 'next/link'
import { Metadata } from 'next'
import { 
  Wrench, 
  ArrowLeft, 
  BookOpen, 
  CheckCircle,
  Clock,
  Users,
  ChevronRight,
  Shield,
  Database,
  HardDrive
} from 'lucide-react'
import Footer from '@/components/Footer'
import COC4Modules from './COC4Modules'

export const metadata: Metadata = {
  title: 'COC 4: Maintaining and Repairing Systems and Networks - CSS NC II Training',
  description: 'Master system and network maintenance, planning, inspection, testing, and repair procedures. Learn preventive maintenance, troubleshooting, and system optimization techniques.',
  keywords: 'COC 4, System Maintenance, Network Maintenance, Preventive Maintenance, Troubleshooting, System Repair, Network Repair, System Optimization, CSS NC II, TESDA',
  openGraph: {
    title: 'COC 4: Maintaining and Repairing Systems and Networks - CSS NC II Training',
    description: 'Master system and network maintenance, planning, inspection, testing, and repair procedures.',
    url: 'https://css-nc2-companion.vercel.app/coc4',
    siteName: 'CSS NC II Training Companion App',
    images: [
      {
        url: '/img/meta-coc4.jpg',
        width: 1200,
        height: 630,
        alt: 'COC 4: Maintaining and Repairing Systems and Networks',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'COC 4: Maintaining and Repairing Systems and Networks - CSS NC II Training',
    description: 'Master system and network maintenance, planning, inspection, testing, and repair procedures.',
    images: ['/img/meta-coc4.jpg'],
  },
};

export default function COC4Page() {
  const learningObjectives = [
    'Perform preventive maintenance on computer systems and networks',
    'Diagnose and troubleshoot system and network problems',
    'Configure backup and restore procedures',
    'Set up file and printer sharing',
    'Implement network security measures',
    'Document maintenance and repair procedures'
  ]

  const maintenanceTypes = [
    {
      name: 'Preventive Maintenance',
      description: 'Regular maintenance to prevent system failures',
      icon: Shield,
      features: ['Regular inspections', 'Software updates', 'Hardware cleaning', 'Performance monitoring']
    },
    {
      name: 'Corrective Maintenance',
      description: 'Repair and fix issues when they occur',
      icon: Wrench,
      features: ['Troubleshooting', 'Component replacement', 'Software fixes', 'System recovery']
    },
    {
      name: 'Predictive Maintenance',
      description: 'Monitor systems to predict potential failures',
      icon: Database,
      features: ['System monitoring', 'Performance analysis', 'Trend analysis', 'Early warning systems']
    },
    {
      name: 'Emergency Maintenance',
      description: 'Immediate response to critical system failures',
      icon: HardDrive,
      features: ['Critical repairs', 'System restoration', 'Data recovery', 'Emergency procedures']
    }
  ]

  const networkServices = [
    {
      name: 'Backup and Restore',
      description: 'Data protection and recovery services',
      features: ['Automated backups', 'Data recovery', 'Version control', 'Disaster recovery']
    },
    {
      name: 'File and Printer Sharing',
      description: 'Network resource management and sharing',
      features: ['File sharing', 'Printer sharing', 'Permission management', 'Access control']
    },
    {
      name: 'System Monitoring',
      description: 'Real-time system and network monitoring',
      features: ['Performance monitoring', 'Resource tracking', 'Alert systems', 'Log management']
    },
    {
      name: 'Security Management',
      description: 'Network and system security implementation',
      features: ['Firewall configuration', 'Access control', 'Security updates', 'Threat prevention']
    }
  ]

  const securityMeasures = [
    {
      title: 'Access Control',
      description: 'Implement proper user authentication and authorization',
      icon: Shield
    },
    {
      title: 'Data Protection',
      description: 'Secure data storage and transmission',
      icon: Database
    },
    {
      title: 'Network Security',
      description: 'Protect network infrastructure and communications',
      icon: Wrench
    },
    {
      title: 'Backup Security',
      description: 'Secure backup and recovery procedures',
      icon: HardDrive
    }
  ]

  const assessmentCriteria = [
    'Proper preventive maintenance procedures',
    'Effective troubleshooting and problem resolution',
    'Successful backup and restore operations',
    'Correct file and printer sharing configuration',
    'Implementation of security measures',
    'Complete documentation and reporting'
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
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center mb-6">
            <Wrench className="h-12 w-12 mr-4" />
            <div>
              <h1 className="text-4xl font-bold">COC 4: Maintaining and Repairing Systems and Networks</h1>
              <p className="text-xl opacity-90">System and Network Maintenance</p>
            </div>
          </div>
          <p className="text-lg max-w-3xl">
            This module covers maintaining and repairing computer systems and networks including 
            preventive maintenance, troubleshooting, backup and restore procedures, and system optimization. 
            You will learn to keep systems running efficiently and resolve issues effectively.
          </p>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Duration</h3>
              <p className="text-gray-600">32 Hours</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Prerequisites</h3>
              <p className="text-gray-600">Intro to CSS + COC 1 + COC 2 + COC 3</p>
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
                  <CheckCircle className="h-6 w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{objective}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Maintenance</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding different maintenance approaches and their specific applications in system management.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {maintenanceTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <type.icon className="h-8 w-8 text-orange-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{type.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <ChevronRight className="h-3 w-3 mr-2 text-orange-500" />
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
              Essential network services for maintaining and optimizing system performance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {networkServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-orange-600 p-6">
                  <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <ChevronRight className="h-3 w-3 mr-2 text-orange-500" />
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
              Essential security practices to protect systems and networks during maintenance operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {securityMeasures.map((measure, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <measure.icon className="h-8 w-8 text-orange-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{measure.title}</h3>
                </div>
                <p className="text-gray-600">{measure.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules - Client Component */}
      <COC4Modules />

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
                  <div className="bg-orange-100 w-8 h-8 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-600 font-semibold text-sm">{index + 1}</span>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Congratulations!</h2>
            <p className="text-lg text-gray-600 mb-8">
              You have completed all four Core Competencies of CSS NC II Training. You are now ready for assessment!
            </p>
            <Link 
              href="/"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center"
            >
              Back to Home <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
} 