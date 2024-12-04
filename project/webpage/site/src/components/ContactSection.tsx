import { Phone, Mail } from 'lucide-react'

export function ContactSection() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-white">Contact Us</h2>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="flex items-center justify-center bg-black p-4 border border-gray-800">
            <Phone className="mr-2 text-blue-500" />
            <span className="text-white">470-249-0421</span>
          </div>
          <div className="flex items-center justify-center bg-black p-4 border border-gray-800">
            <Mail className="mr-2 text-blue-500" />
            <span className="text-white">speechglobal.ai@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  )
}

