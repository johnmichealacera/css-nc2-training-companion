import Link from 'next/link'
import { Metadata } from 'next'
import { 
  Computer, 
  Network, 
  Server, 
  Wrench, 
  BookOpen, 
  Clock, 
  Users, 
  Award,
  ChevronRight
} from 'lucide-react'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'CSS NC II Training Companion App - Master Computer Systems Servicing',
  description: 'Master Computer Systems Servicing with our comprehensive training companion. Prepare for TESDA certification with hands-on learning and expert guidance in computer hardware, networking, server configuration, and system maintenance.',
  keywords: 'CSS NC II, Computer Systems Servicing, TESDA, Training, Assessment, Computer Hardware, Networking, Server Configuration, System Maintenance, IT Certification',
  openGraph: {
    title: 'CSS NC II Training Companion App - Master Computer Systems Servicing',
    description: 'Master Computer Systems Servicing with our comprehensive training companion. Prepare for TESDA certification with hands-on learning and expert guidance.',
    url: 'https://css-nc2-companion.vercel.app/',
    siteName: 'CSS NC II Training Companion App',
    images: [
      {
        url: '/img/facebook_meta_bg.jpg',
        width: 1200,
        height: 630,
        alt: 'CSS NC II Training Companion App - Master Computer Systems Servicing',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CSS NC II Training Companion App - Master Computer Systems Servicing',
    description: 'Master Computer Systems Servicing with our comprehensive training companion. Prepare for TESDA certification with hands-on learning and expert guidance.',
    images: ['/img/facebook_meta_bg.jpg'],
  },
};

export default function Home() {
  const coreCompetencies = [
    {
      id: 'coc1',
      title: 'Installing and Configuring Computer Systems',
      description: 'Learn to install and configure computer hardware and software, disassemble and assemble computers, and install operating systems.',
      icon: Computer,
      color: 'bg-blue-500',
      href: '/coc1'
    },
    {
      id: 'coc2',
      title: 'Setting up Computer Networks',
      description: 'Master wired and wireless network setup, cable creation, router configuration, and workstation connectivity.',
      icon: Network,
      color: 'bg-green-500',
      href: '/coc2'
    },
    {
      id: 'coc3',
      title: 'Setting up Computer Servers',
      description: 'Learn basic server administration, user access setup, network services configuration, and documentation procedures.',
      icon: Server,
      color: 'bg-purple-500',
      href: '/coc3'
    },
    {
      id: 'coc4',
      title: 'Maintaining and Repairing Systems',
      description: 'Master system and network maintenance, planning, inspection, testing, and repair procedures.',
      icon: Wrench,
      color: 'bg-orange-500',
      href: '/coc4'
    }
  ]

  const courseInfo = [
    {
      icon: Clock,
      title: 'Duration',
      value: '280 Hours'
    },
    {
      icon: Users,
      title: 'Format',
      value: 'Lecture + Hands-on + Mock Assessment'
    },
    {
      icon: Award,
      title: 'Certification',
      value: 'TESDA Recognized'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Computer className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">CSS NC II Training</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/glossary" className="text-gray-600 hover:text-gray-900">Glossary</Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              CSS NC II Training Companion
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Master Computer Systems Servicing with our comprehensive training companion. 
              Prepare for TESDA certification with hands-on learning and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/coc1" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Learning
              </Link>
              <Link 
                href="/about" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why CSS NC II Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why CSS NC II is Important</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Based on industry needs and recognized both locally and abroad, CSS NC II certification 
              serves as a gateway to advanced IT courses and career opportunities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Industry Recognition</h3>
              <p className="text-gray-600 text-sm">Based on industry needs and standards</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">TESDA Certified</h3>
              <p className="text-gray-600 text-sm">Recognized locally and abroad</p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Career Gateway</h3>
              <p className="text-gray-600 text-sm">Gateway to advanced IT courses and jobs</p>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-lg text-center">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Job Benefits</h3>
              <p className="text-gray-600 text-sm">Benefits for job-related purposes or promotion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Competencies You Will Learn</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Master the four essential areas of Computer Systems Servicing through comprehensive training modules.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {coreCompetencies.map((competency) => (
              <div key={competency.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`${competency.color} p-6`}>
                  <div className="flex items-center">
                    <competency.icon className="h-8 w-8 text-white" />
                    <h3 className="ml-3 text-xl font-semibold text-white">{competency.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{competency.description}</p>
                  <Link 
                    href={competency.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Overview</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive training designed to prepare you for the CSS NC II assessment with hands-on experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {courseInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-600">{info.value}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Training Schedule</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Weekdays</h4>
                <p className="text-gray-600">Monday to Friday</p>
                <p className="text-blue-600 font-medium">6:00 PM - 8:00 PM</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Weekend</h4>
                <p className="text-gray-600">Saturday</p>
                <p className="text-blue-600 font-medium">8:00 AM - 5:00 PM</p>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-4">* Schedule is modifiable based on training needs</p>
          </div>
        </div>
      </section>

      {/* Expectations Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Expectations From You</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              To ensure successful completion and certification, we expect the following from all trainees.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">100% Attendance</h3>
              <p className="text-gray-600 text-sm">TESDA requires complete attendance for certification</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Active Participation</h3>
              <p className="text-gray-600 text-sm">Engage in discussions and hands-on activities</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Complete Requirements</h3>
              <p className="text-gray-600 text-sm">Fulfill all requirements for National Assessment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer variant="full" />
    </div>
  )
}
