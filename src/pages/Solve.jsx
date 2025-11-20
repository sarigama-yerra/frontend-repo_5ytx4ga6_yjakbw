import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, Trophy, Bookmark, GraduationCap, ChevronRight, ChevronLeft, ChevronDown, Grid3X3, Menu, X, Check } from 'lucide-react'

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

function ExamSelector({ selectedExam, onChange }) {
  return (
    <div className="rounded-2xl bg-white p-4 sm:p-5 ring-1 ring-slate-200 shadow-[16px_16px_48px_rgba(0,0,0,0.06),-12px_-12px_44px_rgba(255,255,255,0.9)]">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <div className="text-sm text-slate-500">Exam</div>
          <div className="mt-1 inline-flex items-center gap-2 rounded-full bg-[#1A73E8]/10 text-[#1A73E8] px-3 py-1.5 font-semibold">
            <Grid3X3 className="h-4 w-4" />
            <span>{selectedExam || 'JEE Main'}</span>
          </div>
        </div>
        <button onClick={onChange} className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-2 text-sm text-slate-700 ring-1 ring-slate-200 hover:bg-slate-100 transition">
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

function ExamsGrid({ onSelectExam }) {
  const exams = ['JEE Main', 'JEE Advanced', 'BITSAT', 'KCET']
  return (
    <div className="relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {exams.map((e, i) => (
          <button key={i} onClick={() => onSelectExam(e)} className="text-left group rounded-2xl bg-white p-5 ring-1 ring-slate-200 shadow-[12px_12px_36px_rgba(0,0,0,0.06),-10px_-10px_36px_rgba(255,255,255,0.9)] hover:shadow-[16px_16px_48px_rgba(0,0,0,0.08),-12px_-12px_44px_rgba(255,255,255,1)] transition">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-slate-900">{e}</div>
                <div className="text-sm text-slate-500">Previous Year Questions</div>
              </div>
              <div className="h-10 w-10 rounded-xl bg-slate-50 grid place-items-center ring-1 ring-slate-200"> <ChevronRight className="h-5 w-5 text-slate-500"/> </div>
            </div>
          </button>
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

function FlowModal({ open, onClose, step, onBack, onNext, onSelectSubject, onSelectYear, selectedExam, selectedSubject, selectedYearRange, chapters, selectedChapters, onToggleChapter, onBegin }) {
  const subjectOptions = ['All Subjects (PCM)', 'Maths PYQs', 'Chemistry PYQs', 'Physics PYQs']
  const yearOptions = ['Last year', 'Last 3 years', 'Last 5 years', 'Last 10 years', 'Last 15 years']

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div className="fixed inset-0 z-[90] bg-black/40" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} />
          <motion.div
            className="fixed inset-0 z-[95] grid place-items-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full max-w-lg rounded-2xl bg-white ring-1 ring-slate-200 shadow-[24px_24px_64px_rgba(0,0,0,0.12),-16px_-16px_48px_rgba(255,255,255,0.9)] overflow-hidden"
              initial={{ y: 20, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200/80 bg-gradient-to-b from-white to-slate-50/60">
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wide text-slate-500">{selectedExam || 'Exam'}</div>
                  <div className="font-semibold text-slate-900 truncate">{step === 'subject' ? 'Select Subject' : step === 'year' ? 'Select Year Range' : 'Select Chapters'}</div>
                </div>
                <div className="flex items-center gap-2">
                  {step !== 'subject' && (
                    <button onClick={onBack} className="h-9 px-3 rounded-lg bg-white ring-1 ring-slate-200 hover:bg-slate-50 flex items-center gap-1 text-sm"><ChevronLeft className="h-4 w-4"/>Back</button>
                  )}
                  <button onClick={onClose} className="h-9 w-9 grid place-items-center rounded-lg bg-white ring-1 ring-slate-200 hover:bg-slate-50"><X className="h-5 w-5"/></button>
                </div>
              </div>

              {/* Body */}
              <div className="px-5 py-4">
                {step === 'subject' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {subjectOptions.map((s) => (
                      <button key={s} onClick={() => onSelectSubject(s)} className={`text-left rounded-xl p-4 ring-1 transition shadow-sm hover:shadow-md ${selectedSubject === s ? 'ring-[#1A73E8] bg-[#1A73E8]/5' : 'ring-slate-200 bg-white'}`}>
                        <div className="font-medium text-slate-900">{s}</div>
                        <div className="text-xs text-slate-500 mt-0.5">Practice previous year questions</div>
                      </button>
                    ))}
                  </div>
                )}

                {step === 'year' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {yearOptions.map((y) => (
                      <button key={y} onClick={() => onSelectYear(y)} className={`text-left rounded-xl p-4 ring-1 transition shadow-sm hover:shadow-md ${selectedYearRange === y ? 'ring-[#1A73E8] bg-[#1A73E8]/5' : 'ring-slate-200 bg-white'}`}>
                        <div className="font-medium text-slate-900">{y}</div>
                        <div className="text-xs text-slate-500 mt-0.5">Filter by exam years</div>
                      </button>
                    ))}
                  </div>
                )}

                {step === 'chapters' && (
                  <div className="space-y-4">
                    <div className="text-sm text-slate-600">Choose chapters to include in your practice set.</div>
                    <div className="max-h-72 overflow-y-auto rounded-xl ring-1 ring-slate-200 divide-y divide-slate-100">
                      {chapters.map((c) => {
                        const checked = selectedChapters.includes(c)
                        return (
                          <label key={c} className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-slate-50">
                            <input
                              type="checkbox"
                              className="h-4 w-4 rounded border-slate-300 text-[#1A73E8] focus:ring-[#1A73E8]"
                              checked={checked}
                              onChange={() => onToggleChapter(c)}
                            />
                            <span className="flex-1 text-sm text-slate-800">{c}</span>
                            {checked && <Check className="h-4 w-4 text-[#1A73E8]"/>}
                          </label>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="px-5 py-4 bg-slate-50/60 border-t border-slate-200/80 flex items-center justify-between">
                <div className="text-xs text-slate-500">
                  {step === 'subject' && 'Step 2 of 4'}
                  {step === 'year' && 'Step 3 of 4'}
                  {step === 'chapters' && 'Step 4 of 4'}
                </div>
                <div className="flex items-center gap-2">
                  {step === 'subject' && (
                    <button disabled={!selectedSubject} onClick={onNext} className={`h-9 px-4 rounded-lg text-sm font-medium transition ${selectedSubject ? 'bg-[#1A73E8] text-white hover:bg-[#1667d3]' : 'bg-slate-200 text-slate-500 cursor-not-allowed'}`}>Continue</button>
                  )}
                  {step === 'year' && (
                    <button disabled={!selectedYearRange} onClick={onNext} className={`h-9 px-4 rounded-lg text-sm font-medium transition ${selectedYearRange ? 'bg-[#1A73E8] text-white hover:bg-[#1667d3]' : 'bg-slate-200 text-slate-500 cursor-not-allowed'}`}>Continue</button>
                  )}
                  {step === 'chapters' && (
                    <button disabled={selectedChapters.length === 0} onClick={onBegin} className={`h-9 px-4 rounded-lg text-sm font-semibold transition ${selectedChapters.length > 0 ? 'bg-[#1A73E8] text-white hover:bg-[#1667d3]' : 'bg-slate-200 text-slate-500 cursor-not-allowed'}`}>Begin Practice</button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default function SolvePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Flow state
  const [flowOpen, setFlowOpen] = useState(false)
  const [step, setStep] = useState('subject') // 'subject' | 'year' | 'chapters'
  const [selectedExam, setSelectedExam] = useState('')
  const [selectedSubject, setSelectedSubject] = useState('')
  const [selectedYearRange, setSelectedYearRange] = useState('')
  const [selectedChapters, setSelectedChapters] = useState([])

  const subjectChapters = {
    'All Subjects (PCM)': ['Kinematics', 'Laws of Motion', 'Work, Power & Energy', 'Limits & Continuity', 'Differentiation', 'Integration', 'Atomic Structure', 'Chemical Bonding', 'Equilibrium'],
    'Maths PYQs': ['Sets & Relations', 'Functions', 'Limits & Continuity', 'Differentiation', 'Integration', 'Vector Algebra', '3D Geometry', 'Probability'],
    'Physics PYQs': ['Kinematics', 'Laws of Motion', 'Work, Power & Energy', 'Thermodynamics', 'Electrostatics', 'Current Electricity', 'Magnetism', 'Optics'],
    'Chemistry PYQs': ['Atomic Structure', 'Periodic Table', 'Chemical Bonding', 'Thermodynamics', 'Equilibrium', 'Organic Reactions', 'Coordination Compounds']
  }

  const chapters = subjectChapters[selectedSubject] || []

  const openFlow = (exam) => {
    setSelectedExam(exam)
    setFlowOpen(true)
    setStep('subject')
    setSelectedSubject('')
    setSelectedYearRange('')
    setSelectedChapters([])
  }

  const onBack = () => {
    if (step === 'year') setStep('subject')
    else if (step === 'chapters') setStep('year')
  }

  const onNext = () => {
    if (step === 'subject') setStep('year')
    else if (step === 'year') setStep('chapters')
  }

  const onSelectSubject = (s) => {
    setSelectedSubject(s)
  }

  const onSelectYear = (y) => {
    setSelectedYearRange(y)
  }

  const onToggleChapter = (c) => {
    setSelectedChapters((prev) => prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c])
  }

  const onBegin = () => {
    // For now, just close the modal. Later we can route to practice with these filters.
    setFlowOpen(false)
  }

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
              <ExamSelector selectedExam={selectedExam || 'JEE Main'} onChange={() => openFlow(selectedExam || 'JEE Main')} />

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
                <ExamsGrid onSelectExam={(e) => openFlow(e)} />
              </section>
            </div>
          </div>
        </main>
      </div>

      {/* Flow Modal */}
      <FlowModal
        open={flowOpen}
        onClose={() => setFlowOpen(false)}
        step={step}
        onBack={onBack}
        onNext={onNext}
        onSelectSubject={(s) => { setSelectedSubject(s); setStep('year') }}
        onSelectYear={(y) => { setSelectedYearRange(y); setStep('chapters') }}
        selectedExam={selectedExam}
        selectedSubject={selectedSubject}
        selectedYearRange={selectedYearRange}
        chapters={chapters}
        selectedChapters={selectedChapters}
        onToggleChapter={onToggleChapter}
        onBegin={onBegin}
      />
    </div>
  )
}
