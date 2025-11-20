import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

function Hero({ onCTAClick }) {
  return (
    <section className="relative overflow-hidden">
      {/* Faint background of blurred question paper */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -inset-40 bg-[url('https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2400&auto=format&fit=crop')] bg-center bg-cover opacity-[0.08]"/>
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>
        {/* soft vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/80 to-white"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left */}
          <div>
            <motion.h1
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight"
            >
              Solve 50000+ PYQs on JEE Study Buddy
            </motion.h1>

            <motion.p
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
              className="mt-4 text-slate-600 text-base sm:text-lg"
            >
              Ace your preparation with neatly organized Previous Year Questions, curated across exams and subjects.
            </motion.p>

            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
              className="mt-6 space-y-3"
            >
              {[
                'PYQs from all major Engineering Entrance Exams in India',
                'Solve PYQs subject-wise and year-wise',
              ].map((item, i) => (
                <motion.li
                  key={i}
                  variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1 text-emerald-600">
                    <CheckCircle2 className="h-5 w-5" />
                  </span>
                  <span className="text-slate-700">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Exam logos row */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-6 flex flex-wrap items-center gap-4"
            >
              {[
                { name: 'NTA', color: '#1A73E8' },
                { name: 'VIT', color: '#EA4335' },
                { name: 'BITS', color: '#34A853' },
                { name: 'SRM', color: '#FBBC05' },
              ].map((logo) => (
                <div
                  key={logo.name}
                  className="h-10 rounded-xl bg-white px-4 grid place-items-center text-sm font-semibold text-slate-700 shadow-[6px_6px_16px_rgba(0,0,0,0.06),-6px_-6px_16px_rgba(255,255,255,0.9)] ring-1 ring-black/5"
                >
                  <span style={{ color: logo.color }}>{logo.name}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8"
            >
              <button
                onClick={onCTAClick}
                className="inline-flex items-center justify-center rounded-full bg-[#1A73E8] px-6 py-3 text-white font-semibold shadow-[0_14px_28px_rgba(26,115,232,0.35)] hover:shadow-[0_16px_34px_rgba(26,115,232,0.45)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A73E8]"
              >
                Start Solving PYQs
              </button>
            </motion.div>

            {/* Testimonial slider (simple auto-rotate quotes) */}
            <TestimonialSlider />
          </div>

          {/* Right: Signup card */}
          <motion.div
            id="signup"
            initial={{ x: 12, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:sticky lg:top-8"
          >
            <SignupCard />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function TestimonialSlider() {
  const quotes = [
    'Ranked #32 out of 16,200 students in mock tests after 3 weeks',
    'Cleared my basics and saved hours of searching — amazing!',
    'Best place to practice real exam questions year-wise',
  ]
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % quotes.length), 3000)
    return () => clearInterval(t)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="mt-8"
    >
      <div className="rounded-2xl bg-white/70 backdrop-blur-md p-4 shadow-[8px_8px_20px_rgba(0,0,0,0.06),-8px_-8px_20px_rgba(255,255,255,0.9)] ring-1 ring-black/5 max-w-xl">
        <p className="text-slate-700 text-sm">
          <span className="font-semibold text-slate-800">Student Result:</span> {quotes[index]}
        </p>
      </div>
    </motion.div>
  )
}

import React from 'react'

function SignupCard() {
  return (
    <div className="rounded-3xl bg-white p-6 sm:p-7 shadow-[20px_20px_60px_rgba(0,0,0,0.08),-12px_-12px_40px_rgba(255,255,255,0.9)] ring-1 ring-black/5">
      <h3 className="text-lg font-semibold text-slate-900">Create your free account</h3>
      <p className="mt-1 text-sm text-slate-600">Start practicing PYQs in minutes</p>

      <form className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700">Full Name</label>
          <input type="text" placeholder="Your name" className="mt-2 w-full rounded-xl border-0 bg-slate-50/60 px-4 py-3 text-slate-900 shadow-inner shadow-black/5 ring-1 ring-slate-200 focus:ring-2 focus:ring-[#1A73E8] outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Email</label>
          <input type="email" placeholder="you@example.com" className="mt-2 w-full rounded-xl border-0 bg-slate-50/60 px-4 py-3 text-slate-900 shadow-inner shadow-black/5 ring-1 ring-slate-200 focus:ring-2 focus:ring-[#1A73E8] outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Phone</label>
          <div className="mt-2 flex gap-2">
            <select className="w-28 rounded-xl border-0 bg-slate-50/60 px-3 py-3 text-slate-900 shadow-inner shadow-black/5 ring-1 ring-slate-200 focus:ring-2 focus:ring-[#1A73E8] outline-none">
              <option value="IN">+91</option>
              <option value="US">+1</option>
              <option value="GB">+44</option>
            </select>
            <input type="tel" placeholder="98765 43210" className="flex-1 rounded-xl border-0 bg-slate-50/60 px-4 py-3 text-slate-900 shadow-inner shadow-black/5 ring-1 ring-slate-200 focus:ring-2 focus:ring-[#1A73E8] outline-none" />
          </div>
        </div>

        <button type="button" className="mt-2 w-full rounded-full bg-[#1A73E8] py-3 font-semibold text-white shadow-[0_14px_28px_rgba(26,115,232,0.35)] hover:shadow-[0_18px_36px_rgba(26,115,232,0.45)]">Send OTP</button>

        <p className="text-xs text-slate-500 text-center">
          By continuing, you agree to our Terms & Conditions and Privacy Policy.
        </p>
      </form>
    </div>
  )
}

export default Hero
