import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, Trophy, Bookmark, GraduationCap, ChevronRight, ChevronLeft, ChevronDown, Grid3X3, Menu, X } from 'lucide-react'

function Sidebar() {
  const menu = [
    { label: 'Home', icon: Home },
    { label: 'Leaderboard', icon: Trophy },
    { label: 'Newton School of Technology', icon: GraduationCap },
    { label: 'Saved Questions', icon: Bookmark },
  ]

  return (
    <aside className="hidden lg:flex lg:w-72 xl:w-80 shrink-0 flex-col gap-6 bg-gradient-to-b from-white to-slate-50/60 border-r border-slate-200/80">
      <div className="px-6 pt-6">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-white grid place-items-center ring-1 ring-black/5 shadow-[8px_8px_16px_rgba(0,0,0,0.06),-8px_-8px_16px_rgba(255,255,255,0.9)]">
            <div className="h-4 w-4 rounded-sm bg-[#1A73E8]"></div>
          </div>
          <span className="text-lg font-semibold text-slate-900">JEE Study Buddy</span>
        </div>
      </div>

      <div className="px-3">
        <div className="mx-3 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <nav className="px-3 pb-6">
        <ul className="space-y-1.5">
          {menu.map((m, i) => (
            <li key={i}>
              <a href="#" className="group flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 ring-1 ring-transparent hover:ring-slate-200 transition">
                <m.icon className="h-5 w-5 text-slate-400 group-hover:text-[#1A73E8]" />
                <span>{m.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

function MobileSidebar({ open, onClose }) {
  const menu = [
    { label: 'Home', icon: Home },
    { label: 'Leaderboard', icon: Trophy },
    { label: 'Newton School of Technology', icon: GraduationCap },
    { label: 'Saved Questions', icon: Bookmark },
  ]

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          {/* Panel */}
          <motion.aside
            className="fixed inset-y-0 left-0 z-50 w-72 max-w-[80%] bg-gradient-to-b from-white to-slate-50/60 border-r border-slate-200/80 shadow-xl flex flex-col"
            initial={{ x: -320 }}
            animate={{ x: 0 }}
            exit={{ x: -320 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="px-5 pt-5 pb-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-white grid place-items-center ring-1 ring-black/5 shadow-[8px_8px_16px_rgba(0,0,0,0.06),-8px_-8px_16px_rgba(255,255,255,0.9)]">
                  <div className="h-4 w-4 rounded-sm bg-[#1A73E8]"></div>
                </div>
                <span className="text-base font-semibold text-slate-900">JEE Study Buddy</span>
              </div>
              <button aria-label="Close menu" onClick={onClose} className="h-9 w-9 grid place-items-center rounded-lg bg-white ring-1 ring-slate-200 hover:bg-slate-50 active:scale-[0.98] transition">
                <X className="h-5 w-5 text-slate-600" />
              </button>
            </div>
            <div className="px-4"><div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" /></div>
            <nav className="px-2 py-4 overflow-y-auto">
              <ul className="space-y-1.5">
                {menu.map((m, i) => (
                  <li key={i}>
                    <a href="#" onClick={onClose} className="group flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 ring-1 ring-transparent hover:ring-slate-200 transition">
                      <m.icon className="h-5 w-5 text-slate-400 group-hover:text-[#1A73E8]" />
                      <span>{m.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}

function ExamSelector() {
  return (
    <div className="rounded-2xl bg-white p-4 sm:p-5 ring-1 ring-slate-200 shadow-[16px_16px_48px_rgba(0,0,0,0.06),-12px_-12px_44px_rgba(255,255,255,0.9)]">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <div className="text-sm text-slate-500">Exam</div>
          <div className="mt-1 inline-flex items-center gap-2 rounded-full bg-[#1A73E8]/10 text-[#1A73E8] px-3 py-1.5 font-semibold">
            <Grid3X3 className="h-4 w-4" />
            <span>JEE Main</span>
          </div>
        </div>
        <button className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-2 text-sm text-slate-700 ring-1 ring-slate-200 hover:bg-slate-100 transition">
          Change <ChevronDown className="h-4 w-4 text-slate-500" />
        </button>
      </div>
    </div>
  )
}

function SubjectCards() {
  const items = [
    { title: 'All Subjects (PCM)', desc: 'Practice combined', accent: 'from-sky-500 to-blue-600' },
    { title: 'Maths PYQs', desc: 'Algebra, Calculus, more', accent: 'from-emerald-500 to-teal-600' },
    { title: 'Chemistry PYQs', desc: 'Physical, Organic, Inorganic', accent: 'from-amber-500 to-orange-600' },
    { title: 'Physics PYQs', desc: 'Mechanics to Modern', accent: 'from-violet-500 to-fuchsia-600' },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((it, i) => (
        <a key={i} href="#" className="group rounded-2xl bg-white p-4 ring-1 ring-slate-200 shadow-[12px_12px_36px_rgba(0,0,0,0.06),-10px_-10px_36px_rgba(255,255,255,0.9)] hover:shadow-[16px_16px_48px_rgba(0,0,0,0.08),-12px_-12px_44px_rgba(255,255,255,1)] transition">
          <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${it.accent} text-white grid place-items-center shadow`}>↗</div>
          <div className="mt-3 font-semibold text-slate-900">{it.title}</div>
          <div className="text-sm text-slate-500">{it.desc}</div>
          <div className="mt-3 inline-flex items-center gap-1 text-[#1A73E8] font-medium">
            Start <ChevronRight className="h-4 w-4" />
          </div>
        </a>
      ))}
    </div>
  )
}

function ExamsGrid() {
  const exams = ['JEE Main', 'JEE Advanced', 'BITSAT', 'KCET']
  return (
    <div className="relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {exams.map((e, i) => (
          <a key={i} href="#" className="group rounded-2xl bg-white p-5 ring-1 ring-slate-200 shadow-[12px_12px_36px_rgba(0,0,0,0.06),-10px_-10px_36px_rgba(255,255,255,0.9)] hover:shadow-[16px_16px_48px_rgba(0,0,0,0.08),-12px_-12px_44px_rgba(255,255,255,1)] transition">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-slate-900">{e}</div>
                <div className="text-sm text-slate-500">Previous Year Questions</div>
              </div>
              <div className="h-10 w-10 rounded-xl bg-slate-50 grid place-items-center ring-1 ring-slate-200"> <ChevronRight className="h-5 w-5 text-slate-500"/> </div>
            </div>
          </a>
        ))}
      </div>

      {/* Carousel arrows on right */}
      <div className="pointer-events-none absolute -right-2 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-3">
        <button className="pointer-events-auto h-10 w-10 rounded-full bg-white ring-1 ring-slate-200 shadow-md grid place-items-center hover:bg-slate-50"><ChevronLeft className="h-5 w-5 text-slate-600"/></button>
        <button className="pointer-events-auto h-10 w-10 rounded-full bg-white ring-1 ring-slate-200 shadow-md grid place-items-center hover:bg-slate-50"><ChevronRight className="h-5 w-5 text-slate-600"/></button>
      </div>
    </div>
  )
}

export default function SolvePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#F5F8FF] text-slate-900">
      {/* soft halo */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] -translate-x-1/2 h-72 w-[40rem] rounded-full bg-[#1A73E8]/10 blur-3xl" />
      </div>

      <div className="flex">
        {/* Left Sidebar (desktop) */}
        <Sidebar />

        {/* Mobile Sidebar (overlay) */}
        <MobileSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Mobile top bar */}
        <div className="lg:hidden fixed top-0 left-0 right-0 z-30 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
            <button
              aria-label="Open menu"
              onClick={() => setSidebarOpen(true)}
              className="h-9 w-9 grid place-items-center rounded-lg bg-white ring-1 ring-slate-200 hover:bg-slate-50 active:scale-[0.98] transition"
            >
              <Menu className="h-5 w-5 text-slate-700" />
            </button>
            <div className="h-8 w-8 rounded-lg bg-white grid place-items-center ring-1 ring-black/5 shadow">
              <div className="h-3.5 w-3.5 rounded-sm bg-[#1A73E8]"></div>
            </div>
            <span className="font-semibold">JEE Study Buddy</span>
          </div>
        </div>

        {/* Main */}
        <main className="flex-1 min-w-0">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 w-full">
            <div className="lg:pl-8 xl:pl-10 py-6 sm:py-8 lg:py-10">
              {/* Divider line to echo sidebar divider */}
              <div className="hidden lg:block fixed top-0 bottom-0 left-[18rem] xl:left-[20rem] w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent" />

              {/* Page heading */}
              <div className="mb-6 sm:mb-8">
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Start Solving PYQs</h1>
                <p className="mt-1 text-slate-600">Pick your exam and subject to jump right in.</p>
              </div>

              {/* Exam Selector */}
              <ExamSelector />

              {/* Select Subject */}
              <section className="mt-6 sm:mt-8">
                <div className="mb-3 flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-slate-900">Select Subject</h2>
                </div>
                <SubjectCards />
              </section>

              {/* Top Engineering Exams */}
              <section className="mt-8 sm:mt-10">
                <div className="mb-3 flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-slate-900">Top Engineering Exams PYQs</h2>
                </div>
                <ExamsGrid />
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
