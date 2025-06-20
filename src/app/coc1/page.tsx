import Link from 'next/link'
import { Metadata } from 'next'
import { 
  Computer, 
  ArrowLeft, 
  BookOpen,
  CheckCircle,
  Clock,
  Users,
  ChevronRight
} from 'lucide-react'
import Footer from '@/components/Footer'
import COC1Modules from './COC1Modules'

export const metadata: Metadata = {
  title: 'COC 1: Installing and Configuring Computer Systems - CSS NC II Training',
  description: 'Learn to install and configure computer hardware and software, disassemble and assemble computers, and install operating systems. Master computer assembly, BIOS configuration, and OS installation.',
  keywords: 'COC 1, Computer Hardware, Computer Assembly, BIOS Configuration, Operating System Installation, Computer Systems, CSS NC II, TESDA',
  openGraph: {
    title: 'COC 1: Installing and Configuring Computer Systems - CSS NC II Training',
    description: 'Learn to install and configure computer hardware and software, disassemble and assemble computers, and install operating systems.',
    url: 'https://css-nc2-companion.vercel.app/coc1',
    siteName: 'CSS NC II Training Companion App',
    images: [
      {
        url: '/img/meta-coc1.jpg',
        width: 1200,
        height: 630,
        alt: 'COC 1: Installing and Configuring Computer Systems',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'COC 1: Installing and Configuring Computer Systems - CSS NC II Training',
    description: 'Learn to install and configure computer hardware and software, disassemble and assemble computers, and install operating systems.',
    images: ['/img/meta-coc1.jpg'],
  },
};

export default function COC1Page() {
  const learningObjectives = [
    'Disassemble and assemble computer hardware',
    'Install operating systems and drivers',
    'Configure BIOS/UEFI settings',
    'Install and configure application software',
    'Perform system optimization',
    'Troubleshoot hardware and software issues'
  ]

  const assessmentCriteria = [
    'Proper disassembly and assembly procedures',
    'Correct component identification',
    'Successful OS installation',
    'Proper driver installation',
    'System optimization',
    'Troubleshooting skills'
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
              <Link href="/coc2" className="text-gray-600 hover:text-gray-900">COC 2</Link>
              <Link href="/coc3" className="text-gray-600 hover:text-gray-900">COC 3</Link>
              <Link href="/coc4" className="text-gray-600 hover:text-gray-900">COC 4</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center mb-6">
            <Computer className="h-12 w-12 mr-4" />
            <div>
              <h1 className="text-4xl font-bold">COC 1: Installing and Configuring Computer Systems</h1>
              <p className="text-xl opacity-90">Computer Hardware and Software Installation</p>
            </div>
          </div>
          <p className="text-lg max-w-3xl">
            This module covers the installation and configuration of computer hardware and software. 
            You will learn how to disassemble and assemble computers, install operating systems, 
            and configure necessary applications.
          </p>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Duration</h3>
              <p className="text-gray-600">24 Hours</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Prerequisites</h3>
              <p className="text-gray-600">Intro to CSS Course</p>
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

      {/* Modules */}
      <COC1Modules />

      {/* Assessment Criteria */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Assessment Criteria</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your performance will be evaluated based on the following criteria:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {assessmentCriteria.map((criterion, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center">
                  <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 font-medium">{criterion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation to Next COC */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready for the Next Step?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Continue your journey with COC 2: Setting up Computer Networks
            </p>
            <Link 
              href="/coc2"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center"
            >
              Continue to COC 2 <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
} 