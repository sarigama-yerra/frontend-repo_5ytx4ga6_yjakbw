import React from 'react'
import { Link } from 'react-router-dom'

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F8FF] text-slate-900 grid place-items-center">
      <div className="max-w-xl mx-auto text-center p-6">
        <div className="h-14 w-14 rounded-2xl bg-white grid place-items-center ring-1 ring-black/5 shadow-[8px_8px_24px_rgba(0,0,0,0.06),-8px_-8px_24px_rgba(255,255,255,0.9)] mx-auto">
          <div className="h-6 w-6 rounded-md bg-[#1A73E8]" />
        </div>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight">JEE Study Buddy</h1>
        <p className="mt-2 text-slate-600">Neumorphic practice app for PYQs with rich LaTeX rendering and a focused quiz flow.</p>
        <div className="mt-6">
          <Link to="/solve" className="inline-flex items-center justify-center h-10 px-5 rounded-lg bg-[#1A73E8] text-white hover:bg-[#1667d3]">Start Solving</Link>
        </div>
      </div>
    </div>
  )
}
