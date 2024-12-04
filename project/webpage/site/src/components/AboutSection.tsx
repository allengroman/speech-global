export function AboutSection() {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">About Speech Global</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-6 border border-gray-800">
            <h3 className="text-2xl font-semibold mb-4 text-white">Vision</h3>
            <p className="text-gray-400">
              Speech Global aims to bridge language barriers by providing a seamless platform for real-time communication across languages. It empowers users to connect, understand, and collaborate by integrating advanced audio streaming, transcription, translation, and text-to-speech technologies into one cohesive system.
            </p>
          </div>
          <div className="bg-gray-900 p-6 border border-gray-800">
            <h3 className="text-2xl font-semibold mb-4 text-white">What It Is</h3>
            <p className="text-gray-400">
              Speech Global is a platform that processes live audio streams from users and transforms them into multilingual outputs in real-time. The platform serves various use cases, such as international meetings, education, and remote collaboration, by enabling users to communicate in their native language while receiving outputs in their desired language.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

