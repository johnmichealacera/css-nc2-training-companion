import Link from 'next/link'
import { 
  Info, 
  ArrowLeft, 
  Award,
  Users,
  Clock,
  BookOpen,
  Target,
  CheckCircle
} from 'lucide-react'
import Footer from '@/components/Footer'

export default function AboutPage() {
  const features = [
    {
      icon: BookOpen,
      title: 'Comprehensive Learning',
      description: 'Complete coverage of all four core competencies with detailed modules and practical exercises.'
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Structured learning path designed by industry professionals and TESDA-certified instructors.'
    },
    {
      icon: Clock,
      title: 'Flexible Learning',
      description: 'Learn at your own pace with 24/7 access to training materials and resources.'
    },
    {
      icon: Award,
      title: 'Certification Ready',
      description: 'Prepare for TESDA assessment with hands-on practice and comprehensive testing.'
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

  const courseStructure = [
    {
      coc: 'COC 1',
      title: 'Installing and Configuring Computer Systems',
      duration: '24 Hours',
      description: 'Computer hardware and software installation, system assembly, and configuration.'
    },
    {
      coc: 'COC 2',
      title: 'Setting up Computer Networks',
      duration: '32 Hours',
      description: 'Network setup, cable installation, router configuration, and wireless setup.'
    },
    {
      coc: 'COC 3',
      title: 'Setting up Computer Servers',
      duration: '38 Hours',
      description: 'Server administration, user access management, and network services.'
    },
    {
      coc: 'COC 4',
      title: 'Maintaining and Repairing Systems',
      duration: '36 Hours',
      description: 'System maintenance, troubleshooting, repair procedures, and testing.'
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
            <Info className="h-12 w-12 mr-4" />
            <div>
              <h1 className="text-4xl font-bold">About CSS NC II Training</h1>
              <p className="text-xl opacity-90">Your Path to Professional Certification</p>
            </div>
          </div>
          <p className="text-lg max-w-3xl">
            The CSS NC II Training Companion App is designed to help you master Computer Systems 
            Servicing and prepare for TESDA certification. Our comprehensive program covers all 
            essential skills needed for a successful career in IT.
          </p>
        </div>
      </section>

      {/* What is CSS NC II */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What is CSS NC II?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Computer Systems Servicing NC II is a TESDA-certified qualification that validates 
              your ability to install, configure, and maintain computer systems and networks.
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
                  <span className="font-semibold">280 Hours</span>
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
                  <span className="font-semibold">TESDA Certified</span>
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
              Our training program is structured into four core competencies, each building upon the previous one.
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
              * Schedule is modifiable based on training needs and availability
            </p>
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
              href="/coc1" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Learning
            </Link>
            <Link 
              href="/glossary" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Browse Glossary
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
} 