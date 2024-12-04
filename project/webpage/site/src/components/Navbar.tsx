import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-black border-b border-gray-800">
      <div className="flex items-center space-x-4">
        <span className="text-xl font-bold text-white">Speech Global</span>
        <img src="https://github.com/allengroman/web-assets/raw/main/speechglobal/logo.png" alt="Logo" width={40} height={40} />
      </div>
      <Button variant="outline" className="">Login Admin</Button>
    </nav>
  )
}
