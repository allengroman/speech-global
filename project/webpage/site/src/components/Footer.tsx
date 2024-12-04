import { Twitter, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-black text-white py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Speech Global</h3>
          </div>
          <div className="flex items-center space-x-4">
            <a href="mailto:speechglobal.ai@gmail.com" className="hover:text-blue-500 flex items-center">
              <Mail className="mr-1" />
              <span>speechglobal.ai@gmail.com</span>
            </a>
            <a href="https://x.com/allengroman" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <Twitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

