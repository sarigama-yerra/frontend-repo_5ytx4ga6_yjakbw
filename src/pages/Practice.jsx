import React, { useMemo, useState, useEffect, useRef } from 'react'
import { InlineMath, BlockMath } from 'react-katex'
import 'katex/dist/katex.min.css'
import { ChevronLeft, ChevronRight, TimerReset } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Practice() {
  const navigate = useNavigate()
  const location = useLocation()
  const params = location.state || {}
  const mode = params.mode || 'Practice'
  const examLabel = params.examLabel || 'JEE Main 2024 April'
  const subjectLabel = params.subjectLabel || 'Maths'
  const yearLabel = params.yearLabel || '2024'
  const durationMinutes = params.durationMinutes

  // Demo question set
  const questions = useMemo(() => [
    {
      id: 1,
      promptLatex: String.raw`\\text{If } f(x)=x^3-3x^2+2x,\\ \\text{ then } f'(x) \\text{ at } x=2 \\text{ equals } ?`,
      options: [
        { key: 'A', text: String.raw`2` },
        { key: 'B', text: String.raw`3` },
        { key: 'C', text: String.raw`4` },
        { key: 'D', text: String.raw`5` },
      ],
      answerKey: 'C',
    },
    {
      id: 2,
      promptLatex: String.raw`\\text{The value of } \\int_0^1 (2x+1) \\; dx \\text{ is } ?`,
      options: [
        { key: 'A', text: String.raw`1` },
        { key: 'B', text: String.raw`2` },
        { key: 'C', text: String.raw`3/2` },
        { key: 'D', text: String.raw`5/2` },
      ],
      answerKey: 'B',
    },
    {
      id: 3,
      promptLatex: String.raw`\\text{If } \\sin^2\\theta + \\cos^2\\theta = 1, \\text{ then } \\sin^2\\theta + \\cos^2\\theta \\text{ equals } ?`,
      options: [
        { key: 'A', text: String.raw`0` },
        { key: 'B', text: String.raw`1` },
        { key: 'C', text: String.raw`2` },
        { key: 'D', text: String.raw`-1` },
      ],
      answerKey: 'B',
    },
  ], [])

  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [attempts, setAttempts] = useState(() => questions.map(() => ({ selected: null, correct: null })))

  const q = questions[index]

  // Timer logic for Mock mode
  const initialSeconds = useMemo(() => {
    if (mode !== 'Mock') return null
    const mins = typeof durationMinutes === 'number' ? durationMinutes : 180
    return Math.max(1, Math.floor(mins * 60))
  }, [mode, durationMinutes])

  const [timeLeft, setTimeLeft] = useState(initialSeconds)
  const timerRef = useRef(null)

  useEffect(() => {
    if (mode !== 'Mock') return
    setTimeLeft(initialSeconds)
  }, [mode, initialSeconds])

  useEffect(() => {
    if (mode !== 'Mock') return
    if (timeLeft == null) return

    timerRef.current && clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t == null) return t
        if (t <= 1) {
          clearInterval(timerRef.current)
          // Auto-finish when timer hits zero
          navigate('/report', {
            state: {
              examLabel,
              subjectLabel,
              yearLabel,
              questions,
              attempts,
              mode,
              timedOut: true,
              durationMinutes: durationMinutes || 180,
            }
          })
          return 0
        }
        return t - 1
      })
    }, 1000)

    return () => timerRef.current && clearInterval(timerRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, examLabel, subjectLabel, yearLabel, questions, attempts])

  const formatTime = (secs) => {
    const mm = Math.floor(secs / 60)
    const ss = secs % 60
    return `${mm.toString().padStart(2, '0')}:${ss.toString().padStart(2, '0')}`
  }

  // When index changes, load previous attempt state for that question
  useEffect(() => {
    const a = attempts[index]
    if (a) {
      setSelected(a.selected)
      setSubmitted(a.correct !== null)
      setIsCorrect(a.correct === true)
    }
  }, [index])

  const handleSubmit = () => {
    if (selected == null) return
    const correct = selected === q.answerKey
    setIsCorrect(correct)
    setSubmitted(true)
    setAttempts((prev) => {
      const next = [...prev]
      next[index] = { selected, correct }
      return next
    })
  }

  const goNext = () => {
    if (index < questions.length - 1) {
      setIndex((i) => i + 1)
    } else {
      // Finished -> navigate to report
      navigate('/report', {
        state: {
          examLabel,
          subjectLabel,
          yearLabel,
          questions,
          attempts,
          mode,
          durationMinutes: durationMinutes || (mode === 'Mock' ? 180 : undefined),
        }
      })
    }
  }

  const goPrev = () => {
    if (index > 0) {
      setIndex((i) => i - 1)
    } else {
      navigate('/solve')
    }
  }

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
              <div className="text-sm font-semibold text-slate-900 truncate">{examLabel}</div>
              <div className="text-xs text-slate-500 truncate">{mode === 'Mock' ? 'Mock Test' : 'Practice Mode'}</div>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-flex items-center rounded-full bg-sky-50 text-sky-700 ring-1 ring-sky-200 px-3 py-1 text-xs font-semibold ml-3">
                {subjectLabel}
              </span>
              {mode === 'Mock' && timeLeft != null && (
                <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ring-1 ${timeLeft < 60 ? 'bg-red-50 text-red-700 ring-red-200' : 'bg-emerald-50 text-emerald-700 ring-emerald-200'}`}>
                  <TimerReset className="h-3.5 w-3.5" /> {formatTime(timeLeft)}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Content Area (accounting for fixed navbar/footer) */}
      <div className="pt-16 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          {/* Centered exam card */}
          <div className="mx-auto max-w-3xl rounded-2xl bg-white ring-1 ring-slate-200 shadow-[16px_16px_48px_rgba(0,0,0,0.08),-12px_-12px_44px_rgba(255,255,255,0.9)]">
            {/* Header inside card for redundancy on mobile */}
            <div className="flex items-center justify-between gap-3 px-5 sm:px-6 py-4 border-b border-slate-200/80 bg-gradient-to-b from-white to-slate-50/60 sm:rounded-t-2xl">
              <div className="min-w-0">
                <div className="text-sm font-semibold text-slate-900 sm:hidden">{examLabel}</div>
                <div className="text-xs text-slate-500 sm:hidden">{mode === 'Mock' ? 'Mock Test' : 'Practice Mode'}</div>
              </div>
              <div className="shrink-0 inline-flex items-center gap-2 sm:hidden">
                <span className="inline-flex items-center rounded-full bg-sky-50 text-sky-700 ring-1 ring-sky-200 px-3 py-1 text-xs font-semibold">{subjectLabel}</span>
                {mode === 'Mock' && timeLeft != null && (
                  <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${timeLeft < 60 ? 'bg-red-50 text-red-700 ring-red-200' : 'bg-emerald-50 text-emerald-700 ring-emerald-200'}`}>
                    <TimerReset className="h-3.5 w-3.5" /> {formatTime(timeLeft)}
                  </span>
                )}
              </div>
              <div className="hidden sm:block text-sm text-slate-500">Question {index + 1} of {questions.length}</div>
            </div>

            {/* Body: Question */}
            <div className="px-5 sm:px-6 py-5 sm:py-6">
              <div className="sm:hidden text-sm text-slate-500 mb-2">Question {index + 1} of {questions.length}</div>
              <div className="rounded-xl bg-white p-4 ring-1 ring-slate-200 shadow-sm">
                <BlockMath math={q.promptLatex} />
              </div>

              {/* Options - single column */}
              <div className="mt-5 flex flex-col gap-3">
                {q.options.map((opt) => {
                  const isOptionCorrect = opt.key === q.answerKey
                  const isOptionSelected = selected === opt.key
                  let ring = 'ring-slate-200'
                  let bg = 'bg-white'
                  if (!submitted) {
                    if (isOptionSelected) {
                      ring = 'ring-sky-300'
                      bg = 'bg-sky-50'
                    }
                  } else {
                    if (isOptionCorrect) {
                      ring = 'ring-green-300'
                      bg = 'bg-green-50'
                    } else if (isOptionSelected && !isOptionCorrect) {
                      ring = 'ring-red-300'
                      bg = 'bg-red-50'
                    } else {
                      ring = 'ring-slate-200'
                      bg = 'bg-white'
                    }
                  }

                  return (
                    <button
                      key={opt.key}
                      onClick={() => !submitted && setSelected(opt.key)}
                      disabled={submitted}
                      className={`group relative text-left rounded-xl px-4 py-3 ring-1 transition-all ${bg} ${ring} ${submitted ? 'cursor-not-allowed opacity-95' : 'hover:bg-slate-50'}`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`mt-0.5 h-6 w-6 shrink-0 grid place-items-center rounded-full border text-xs font-bold ${submitted ? (isOptionCorrect ? 'bg-green-600 text-white border-green-600' : (isOptionSelected ? 'bg-red-600 text-white border-red-600' : 'bg-white text-slate-700 border-slate-300')) : (isOptionSelected ? 'bg-[#1A73E8] text-white border-[#1A73E8]' : 'bg-white text-slate-700 border-slate-300')}`}>{opt.key}</div>
                        <div className="text-slate-800">
                          <InlineMath math={opt.text} />
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>

              {/* Feedback */}
              {submitted && (
                <div className={`mt-4 text-sm font-medium ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                  {isCorrect ? 'Correct!' : `Incorrect. Correct answer is ${q.answerKey}.`}
                </div>
              )}
            </div>
          </div>

          {/* tiny helper footer spacing for content end */}
          <div className="mt-6 text-center text-xs text-slate-500">Clean, professional, exam-focused design</div>
        </div>
      </div>

      {/* Fixed Footer */}
      <div className="fixed bottom-0 inset-x-0 z-20 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-t border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-600 order-2 sm:order-1">
            <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 ring-1 ring-slate-200">Subject is {subjectLabel} {mode === 'Mock' ? 'Mock' : 'PYQs'}</span>
            <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 ring-1 ring-slate-200">{mode === 'Mock' ? 'Date' : 'Year'} is {yearLabel}</span>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto order-1 sm:order-2">
            <button onClick={goPrev} className={`inline-flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-white ring-1 ring-slate-200 text-slate-700 ${index === 0 ? 'opacity-60' : 'hover:bg-slate-50'}`}>
              <ChevronLeft className="h-4 w-4" /> Previous
            </button>
            {!submitted ? (
              <button onClick={handleSubmit} disabled={selected == null} className={`inline-flex items-center justify-center gap-2 h-10 px-4 rounded-lg ${selected == null ? 'bg-slate-300 text-white cursor-not-allowed' : 'bg-[#1A73E8] text-white hover:bg-[#1667d3]'}`}>
                Submit
              </button>
            ) : (
              <button onClick={goNext} className="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-[#1A73E8] text-white hover:bg-[#1667d3]">
                {index < questions.length - 1 ? (
                  <>Next <ChevronRight className="h-4 w-4" /></>
                ) : (
                  'Finish'
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
