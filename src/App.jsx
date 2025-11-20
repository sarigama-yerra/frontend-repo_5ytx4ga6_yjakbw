import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'

function App() {
  const handleCTAClick = () => {
    const el = document.getElementById('signup')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-[#F5F8FF] text-slate-900">
      {/* soft gradient halo */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] -translate-x-1/2 h-72 w-[40rem] rounded-full bg-[#1A73E8]/10 blur-3xl" />
      </div>

      <Navbar />
      <Hero onCTAClick={handleCTAClick} />
      <Features />
    </div>
  )
}

export default App
