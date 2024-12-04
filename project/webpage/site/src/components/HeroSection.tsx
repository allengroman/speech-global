import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative h-[500px] flex items-center justify-center text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-50" 
        style={{backgroundImage: "url('https://github.com/allengroman/web-assets/raw/main/speechglobal/fuzz.jpg')"}}
      ></div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold mb-6">Platform for real time speech translation</h1>
        <div className="space-x-4">
          <Button variant="outline" className="bg-blue-800 hover:bg-blue-900">Join Stream</Button>
          <Button variant="outline" className="bg-blue-800 hover:bg-blue-900">Login User</Button>
        </div>
      </div>
    </section>
  )
}

