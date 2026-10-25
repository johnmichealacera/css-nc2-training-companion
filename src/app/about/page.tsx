import Link from 'next/link'
import { Metadata } from 'next'
import { 
  Info, 
  Award,
  Users,
  Clock,
  BookOpen,
  Target,
  CheckCircle
} from 'lucide-react'
import Footer from '@/components/Footer'
import OfficialDocs from '@/components/OfficialDocs'
import PageNav from '@/components/PageNav'
import { companionCore, officialProgram, cocNavLinks } from '@/content/program'

export const metadata: Metadata = {
  title: 'About - CSS NC II Training Companion App',
  description: 'Learn about the CSS NC II Training Companion App, a comprehensive training solution for Computer Systems Servicing NC II assessment preparation. Discover our mission and training approach.',
  keywords: 'About, CSS NC II, Training Companion, Computer Systems Servicing, TESDA, Training Mission, Assessment Preparation',
  openGraph: {
    title: 'About - CSS NC II Training Companion App',
    description: 'Learn about the CSS NC II Training Companion App, a comprehensive training solution for Computer Systems Servicing NC II assessment preparation.',
    url: 'https://css-nc2-companion.vercel.app/about',
    siteName: 'CSS NC II Training Companion App',
    images: [
      {
        url: '/img/meta-about.jpg',
        width: 1200,
        height: 630,
        alt: 'About CSS NC II Training Companion App',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About - CSS NC II Training Companion App',
    description: 'Learn about the CSS NC II Training Companion App, a comprehensive training solution for Computer Systems Servicing NC II assessment preparation.',
    images: ['/img/meta-about.jpg'],
  },
};

export default function AboutPage() {
  const features = [
    {
      icon: BookOpen,
      title: 'Comprehensive Learning',
      description: 'Complete coverage of all four core competencies with detailed modules and practical exercises.'
    },
    {
      icon: Users,
      title: 'Mapped to the official TR',
      description: 'Core COCs follow TESDA CSS NC II units ELC724331 to ELC724334, plus a mock-assessment gym.'
    },
    {
      icon: Clock,
      title: 'Flexible Learning',
      description: 'Learn at your own pace with 24/7 access to training materials and resources.'
    },
    {
      icon: Award,
      title: 'Assessment practice',
      description: 'SAG-style checklists, timed job sheets, and oral questions. A National Certificate comes only from TESDA assessment.'
    }
  ]

  const benefits = [
    {
      title: 'Industry Recognition',
      description: 'TESDA certification is recognized both locally and internationally.',
      icon: Award
    },
    {
      title: 'Career Advancement',
      description: 'Gateway to advanced IT courses and better job opportunities.',
      icon: Target
    },
    {
      title: 'Skill Development',
      description: 'Master essential computer systems servicing skills.',
      icon: CheckCircle
    },
    {
      title: 'Professional Growth',
      description: 'Enhance your professional profile and earning potential.',
      icon: Users
    }
  ]

  const courseStructure = companionCore.cocs.map((coc) => ({
    coc: coc.label,
    title: coc.title,
    duration: `${coc.hours} core hours`,
    description: coc.description,
  }))

  return (
    <div className="min-h-screen bg-gray-50">
      <PageNav links={cocNavLinks} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center mb-6">
            <Info className="h-12 w-12 mr-4" />
            <div>
              <h1 className="text-4xl font-bold">About CSS NC II Training</h1>
              <p className="text-xl opacity-90">Your Path to Professional Certification</p>
            </div>
          </div>
          <p className="text-lg max-w-3xl">
            This companion helps you practice the four core COCs of TESDA Computer Systems
            Servicing NC II. It is not a TESDA-registered 280-hour course and does not issue a National Certificate.
          </p>
        </div>
      </section>

      {/* What is CSS NC II */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What is CSS NC II?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Computer Systems Servicing NC II is a TESDA national qualification ({officialProgram.qualification}).
              The official program is {officialProgram.totalHours} hours: {officialProgram.basicHours} basic, {officialProgram.commonHours} common, and {officialProgram.coreHours} core.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Recognition</h3>
              <p className="text-gray-600 mb-6">
                CSS NC II certification is recognized by employers both locally and internationally. 
                It demonstrates your competence in computer systems servicing and opens doors to 
                various career opportunities in the IT industry.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Industry-standard certification
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Recognized by employers worldwide
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Gateway to advanced IT courses
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Enhanced career opportunities
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Course Overview</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Duration:</span>
                  <span className="font-semibold">{officialProgram.totalHours} official / {companionCore.totalHours} core here</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Core Competencies:</span>
                  <span className="font-semibold">4 Modules</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Format:</span>
                  <span className="font-semibold">Lecture + Hands-on</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Assessment:</span>
                  <span className="font-semibold">TESDA National Assessment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Training?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive training program is designed to provide you with the best learning experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Structure */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Structure</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Companion coverage of the {companionCore.totalHours}-hour core. Basic and common units are summarized in Intro, then assessed with the core.
            </p>
          </div>
          
          <div className="space-y-6">
            {courseStructure.map((course, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold text-sm">{course.coc}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                      <p className="text-gray-600 mt-1">{course.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {course.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of CSS NC II Certification</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Earning your CSS NC II certification opens up numerous opportunities in the IT industry.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <benefit.icon className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Schedule */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Training Schedule</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Flexible training schedule designed to accommodate your learning needs.
            </p>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Weekdays</h3>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-gray-600">Monday to Friday</p>
                  <p className="text-blue-600 font-semibold text-lg">6:00 PM - 8:00 PM</p>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Weekend</h3>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-gray-600">Saturday</p>
                  <p className="text-blue-600 font-semibold text-lg">8:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-6">
              Typical training-center hours. This companion is self-paced.
            </p>
            <div className="mt-8 bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Official TESDA documents</h3>
              <OfficialDocs />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Begin your path to CSS NC II certification today and unlock new career opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/intro"
              data-analytics="cta"
              data-cta-label="about_start_intro"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start with Intro
            </Link>
            <Link 
              href="/assessment" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Practice for Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
} 