import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F8FF] text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
    </div>
  )
}
