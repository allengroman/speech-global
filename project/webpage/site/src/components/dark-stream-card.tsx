import { useState, useEffect } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Link } from 'react-router-dom'

interface Channel {
  id: string
  name: string
}

interface Language {
  id: string
  name: string
}

export default function DarkStreamCard() {
  const [channels, setChannels] = useState<Channel[]>([])
  const [languages, setLanguages] = useState<Language[]>([])
  const [filteredChannels, setFilteredChannels] = useState<Channel[]>([])
  const [selectedChannel, setSelectedChannel] = useState<string>('')
  const [selectedLanguage, setSelectedLanguage] = useState<string>('')

  useEffect(() => {
    // Fetch channels
    fetch('https://api.example.com/channels')
      .then(response => response.json())
      .then(data => {
        setChannels(data)
        setFilteredChannels(data)
      })

    // Fetch languages
    fetch('https://api.example.com/languages')
      .then(response => response.json())
      .then(data => setLanguages(data))
  }, [])

  const handleChannelSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase()
    const filtered = channels.filter(channel => 
      channel.name.toLowerCase().includes(searchTerm)
    )
    setFilteredChannels(filtered)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
    <Card className="w-full max-w-md bg-gray-800 text-white">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Join Stream</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="channel-search" className="text-sm font-medium">
            Search Channels
          </label>
          <Input
            id="channel-search"
            placeholder="Enter channel name"
            onChange={handleChannelSearch}
            className="bg-gray-700 text-white placeholder-gray-400"
          />
        </div>
        <Select onValueChange={setSelectedChannel}>
          <SelectTrigger className="bg-gray-700 text-white">
            <SelectValue placeholder="Select a channel" />
          </SelectTrigger>
          <SelectContent className="bg-gray-700 text-white">
            {filteredChannels.map(channel => (
              <SelectItem key={channel.id} value={channel.id}>
                {channel.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select onValueChange={setSelectedLanguage}>
          <SelectTrigger className="bg-gray-700 text-white">
            <SelectValue placeholder="Select a language" />
          </SelectTrigger>
          <SelectContent className="bg-gray-700 text-white">
            {languages.map(language => (
              <SelectItem key={language.id} value={language.id}>
                {language.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <div className="flex space-x-2 w-full">
          <Button 
            className="flex-1 bg-blue-600 hover:bg-blue-700"
            onClick={() => console.log('Join stream')}
          >
            Join Stream
          </Button>
          <Button 
            className="flex-1 bg-red-600 hover:bg-red-700"
            onClick={() => console.log('Leave stream')}
          >
            Leave Stream
          </Button>
        </div>
        <Link to="/" className="w-full">
          <Button variant="outline" className="w-full bg-gray-700 text-white hover:bg-gray-600">
            Return Home
          </Button>
        </Link>
      </CardFooter>
    </Card>
    </div>
  )
}

