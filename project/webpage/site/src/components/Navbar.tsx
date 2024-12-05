import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-black border-b border-gray-800">
      <div className="flex items-center space-x-4">
        <span className="text-xl font-bold text-white">Speech Global</span>
        <img src="https://github.com/allengroman/web-assets/raw/main/speechglobal/logo.png" alt="Logo" width={40} height={40} />
      </div>
      <Link to="/channel-sign-in"><Button variant="outline" className="">Login Admin</Button></Link>
    </nav>
  )
}

