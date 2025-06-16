"use client"

import Link from 'next/link'
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  Facebook,
  Send,
  User,
  MessageSquare
} from 'lucide-react'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    alert('Thank you for your message! I will get back to you soon.')
  }

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
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Let&apos;s Connect</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Whether you&apos;re planning a new product, need an extra hand on your dev team, 
              or just want to collaborate — I&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">John Micheal Acera</h2>
            <p className="text-lg text-gray-600 mb-8">
              Full Stack Developer & Problem-Solver from the Philippines 🇵🇭
            </p>
            <p className="text-gray-700 max-w-2xl mx-auto">
              I&apos;m passionate about building real-world systems that are not just functional — but purposeful. 
              From small passion projects to full-stack platforms, my goal is always the same: 
              <strong> &quot;To build things that matter — not just to earn, but to empower.&quot;</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:jm@johnmichealacera.com" className="text-blue-600 hover:text-blue-800">
                      jm@johnmichealacera.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a href="tel:+639059666509" className="text-blue-600 hover:text-blue-800">
                      +63 905 966 6509
                    </a>
                  </div>
                </div>

                <div className="pt-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Connect with me</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://github.com/johnmichealacera" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/johnmichealacera/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a 
                      href="https://www.facebook.com/johnmichealacera1992/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Tell me about your project or how I can help..."
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center font-semibold"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">🚀 Let&apos;s build something great together</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            If you like what you see and want to work together, I&apos;d love to hear from you. 
            Let&apos;s discuss your project and see how we can bring your ideas to life.
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="mailto:jm@johnmichealacera.com"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Start a Conversation
            </a>
            <a 
              href="https://www.johnmichealacera.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors font-semibold"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
} 