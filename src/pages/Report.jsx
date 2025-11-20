import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { BlockMath, InlineMath } from 'react-katex'
import 'katex/dist/katex.min.css'
import { ChevronLeft, CheckCircle2, XCircle, Percent } from 'lucide-react'

export default function Report() {
  const navigate = useNavigate()
  const location = useLocation()
  const state = location.state

  if (!state || !state.questions || !state.attempts) {
    // If no report data, return to home/solve
    navigate('/solve')
    return null
  }

  const { examLabel, subjectLabel, yearLabel, questions, attempts } = state

  const total = questions.length
  const attempted = attempts.filter(a => a && a.selected !== null).length
  const correct = attempts.filter(a => a && a.correct === true).length
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0

  return (
    <div className="min-h-screen bg-[#F5F8FF] text-slate-900">
      {/* background halo */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] -translate-x-1/2 h-72 w-[40rem] rounded-full bg-[#1A73E8]/10 blur-3xl" />
      </div>

      {/* Fixed Top Navbar */}
      <div className="fixed top-0 inset-x-0 z-20 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center gap-3">
          <button
            onClick={() => navigate('/solve')}
            className="inline-flex items-center gap-2 h-9 px-3 rounded-lg bg-white ring-1 ring-slate-200 text-slate-700 hover:bg-slate-50"
            aria-label="Back"
          >
            <ChevronLeft className="h-4 w-4" /> Back
          </button>
          <div className="min-w-0 flex-1 flex items-center justify-between">
            <div className="truncate">
              <div className="text-sm font-semibold text-slate-900 truncate">Quiz Report — {examLabel}</div>
              <div className="text-xs text-slate-500 truncate">{subjectLabel} · {yearLabel}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-16 pb-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          {/* Summary */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
            <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200 shadow-sm">
              <div className="text-xs text-slate-500">Total Questions</div>
              <div className="text-2xl font-semibold">{total}</div>
            </div>
            <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200 shadow-sm">
              <div className="text-xs text-slate-500">Attempted</div>
              <div className="text-2xl font-semibold">{attempted}</div>
            </div>
            <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200 shadow-sm">
              <div className="text-xs text-slate-500">Correct</div>
              <div className="text-2xl font-semibold text-green-600 flex items-center gap-2"><CheckCircle2 className="h-5 w-5" />{correct}</div>
            </div>
            <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200 shadow-sm">
              <div className="text-xs text-slate-500">Accuracy</div>
              <div className="text-2xl font-semibold text-sky-600 flex items-center gap-2"><Percent className="h-5 w-5" />{accuracy}%</div>
            </div>
          </div>

          {/* Detailed breakdown */}
          <div className="space-y-4">
            {questions.map((q, i) => {
              const attempt = attempts[i] || { selected: null, correct: null }
              const isCorrect = attempt.correct === true
              return (
                <div key={q.id ?? i} className="rounded-2xl bg-white ring-1 ring-slate-200 shadow-[16px_16px_48px_rgba(0,0,0,0.06),-12px_-12px_44px_rgba(255,255,255,0.9)]">
                  <div className="flex items-center justify-between gap-3 px-5 sm:px-6 py-3 border-b border-slate-200/80 bg-gradient-to-b from-white to-slate-50/60 sm:rounded-t-2xl">
                    <div className="text-sm font-medium text-slate-700">Question {i + 1}</div>
                    <div className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ring-1 ${isCorrect ? 'bg-green-50 text-green-700 ring-green-200' : 'bg-red-50 text-red-700 ring-red-200'}`}>
                      {isCorrect ? (<><CheckCircle2 className="h-4 w-4" /> Correct</>) : (<><XCircle className="h-4 w-4" /> Incorrect</>)}
                    </div>
                  </div>
                  <div className="px-5 sm:px-6 py-5 sm:py-6">
                    <div className="rounded-xl bg-white p-4 ring-1 ring-slate-200 shadow-sm">
                      <BlockMath math={q.promptLatex} />
                    </div>

                    <div className="mt-4 flex flex-col gap-2">
                      {q.options.map((opt) => {
                        const isOptionCorrect = opt.key === q.answerKey
                        const isSelected = attempt.selected === opt.key
                        let ring = 'ring-slate-200'
                        let bg = 'bg-white'
                        if (isOptionCorrect) {
                          ring = 'ring-green-300'
                          bg = 'bg-green-50'
                        }
                        if (isSelected && !isOptionCorrect) {
                          ring = 'ring-red-300'
                          bg = 'bg-red-50'
                        }
                        return (
                          <div key={opt.key} className={`rounded-xl px-4 py-3 ring-1 ${bg} ${ring}`}>
                            <div className="flex items-start gap-3">
                              <div className={`mt-0.5 h-6 w-6 shrink-0 grid place-items-center rounded-full border text-xs font-bold ${isOptionCorrect ? 'bg-green-600 text-white border-green-600' : (isSelected ? 'bg-red-600 text-white border-red-600' : 'bg-white text-slate-700 border-slate-300')}`}>{opt.key}</div>
                              <div className="text-slate-800">
                                <InlineMath math={opt.text} />
                              </div>
                              {isSelected && (
                                <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 ring-1 ring-slate-200">Selected</span>
                              )}
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    <div className="mt-4 text-xs text-slate-600">
                      Your answer: <span className="font-semibold">{attempt.selected ?? 'Not attempted'}</span> · Correct answer: <span className="font-semibold">{q.answerKey}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button onClick={() => navigate('/solve')} className="inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-white ring-1 ring-slate-200 text-slate-700 hover:bg-slate-50">
              <ChevronLeft className="h-4 w-4" /> Back to Filters
            </button>
            <div className="flex items-center gap-2">
              <button onClick={() => navigate('/practice', { state: { examLabel, subjectLabel, yearLabel } })} className="inline-flex items-center justify-center h-10 px-4 rounded-lg bg-[#1A73E8] text-white hover:bg-[#1667d3]">Retry Quiz</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
