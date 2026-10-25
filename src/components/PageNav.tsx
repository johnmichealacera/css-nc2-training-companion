import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PageNav({
  links,
  printHidden = false,
}: {
  links: { href: string; label: string }[]
  printHidden?: boolean
}) {
  return (
    <nav className={`bg-white shadow-sm border-b ${printHidden ? 'print:hidden' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Home
          </Link>
          <div className="flex items-center space-x-4">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-gray-600 hover:text-gray-900">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
