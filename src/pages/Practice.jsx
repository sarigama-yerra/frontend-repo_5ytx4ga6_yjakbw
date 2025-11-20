import React, { useState } from 'react'
import { InlineMath, BlockMath } from 'react-katex'
import 'katex/dist/katex.min.css'
import { ChevronLeft, ChevronRight, BadgeCheck } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Practice() {
  const navigate = useNavigate()
  const location = useLocation()
  const params = location.state || {}
  const examLabel = params.examLabel || 'JEE Main 2024 April'
  const subjectLabel = params.subjectLabel || 'Maths'
  const yearLabel = params.yearLabel || '2024'

  // Simple demo question
  const questionLatex = String.raw`\text{If } f(x)=x^3-3x^2+2x,\ \text{ then } f'(x) \text{ at } x=2 \text{ equals } ?`
  const options = [
    { key: 'A', text: String.raw`2` },
    { key: 'B', text: String.raw`3` },
    { key: 'C', text: String.raw`4` },
    { key: 'D', text: String.raw`5` },
  ]

  const [selected, setSelected] = useState(null)

  return (
    <div className="min-h-screen bg-[#F5F8FF] text-slate-900">
      {/* background halo */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] -translate-x-1/2 h-72 w-[40rem] rounded-full bg-[#1A73E8]/10 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {/* Centered exam card */}
        <div className="mx-auto max-w-3xl rounded-2xl bg-white ring-1 ring-slate-200 shadow-[16px_16px_48px_rgba(0,0,0,0.08),-12px_-12px_44px_rgba(255,255,255,0.9)]">
          {/* Header */}
          <div className="flex items-center justify-between gap-3 px-5 sm:px-6 py-4 border-b border-slate-200/80 bg-gradient-to-b from-white to-slate-50/60">
            <div className="min-w-0">
              <div className="text-sm font-semibold text-slate-900">{examLabel}</div>
              <div className="text-xs text-slate-500">Practice Mode</div>
            </div>
            <div className="shrink-0 inline-flex items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-sky-50 text-sky-700 ring-1 ring-sky-200 px-3 py-1 text-xs font-semibold">{subjectLabel}</span>
            </div>
          </div>

          {/* Body: Question */}
          <div className="px-5 sm:px-6 py-5 sm:py-6">
            <div className="text-sm text-slate-500 mb-2">Question 1</div>
            <div className="rounded-xl bg-white p-4 ring-1 ring-slate-200 shadow-sm">
              <BlockMath math={questionLatex} />
            </div>

            {/* Options */}
            <div className="mt-5 flex flex-col gap-3">
              {options.map((opt) => {
                const active = selected === opt.key
                return (
                  <button
                    key={opt.key}
                    onClick={() => setSelected(opt.key)}
                    className={`group relative text-left rounded-xl px-4 py-3 ring-1 transition-all ${active ? 'bg-sky-50 ring-sky-300' : 'bg-white ring-slate-200 hover:bg-slate-50'}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`mt-0.5 h-6 w-6 shrink-0 grid place-items-center rounded-full border text-xs font-bold ${active ? 'bg-[#1A73E8] text-white border-[#1A73E8]' : 'bg-white text-slate-700 border-slate-300'}`}>{opt.key}</div>
                      <div className="text-slate-800">
                        <InlineMath math={opt.text} />
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Footer */}
          <div className="px-5 sm:px-6 py-4 bg-slate-50/60 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 ring-1 ring-slate-200">Subject is {subjectLabel} PYQs</span>
              <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 ring-1 ring-slate-200">Year is {yearLabel}</span>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button onClick={() => navigate(-1)} className="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-white ring-1 ring-slate-200 text-slate-700 hover:bg-slate-50">
                <ChevronLeft className="h-4 w-4" /> Previous
              </button>
              <button className="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-[#1A73E8] text-white hover:bg-[#1667d3]">
                Next <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* tiny helper footer */}
        <div className="mt-6 text-center text-xs text-slate-500">Clean, professional, exam-focused design</div>
      </div>
    </div>
  )
}
