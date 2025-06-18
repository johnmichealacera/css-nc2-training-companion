import Link from 'next/link'
import { Computer } from 'lucide-react'

interface FooterProps {
  variant?: 'simple' | 'full'
}

export default function Footer({ variant = 'simple' }: FooterProps) {
  if (variant === 'full') {
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Computer className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">CSS NC II Training</span>
              </div>
              <p className="text-gray-400">
                Comprehensive training companion for Computer Systems Servicing NC II assessment preparation.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/coc1" className="text-gray-400 hover:text-white">COC 1</Link></li>
                <li><Link href="/coc2" className="text-gray-400 hover:text-white">COC 2</Link></li>
                <li><Link href="/coc3" className="text-gray-400 hover:text-white">COC 3</Link></li>
                <li><Link href="/coc4" className="text-gray-400 hover:text-white">COC 4</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/glossary" className="text-gray-400 hover:text-white">Glossary</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 CSS NC II Training Companion App. A project by John Micheal Acera | <a href="https://www.johnmichealacera.com" target="_blank" className="text-blue-400 hover:text-white">johnmichealacera.com</a>
            </p>
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-400">
        © 2025 CSS NC II Training Companion App. A project by John Micheal Acera | <a href="https://www.johnmichealacera.com" target="_blank" className="text-blue-400 hover:text-white">johnmichealacera.com</a>
        </p>
      </div>
    </footer>
  )
} 