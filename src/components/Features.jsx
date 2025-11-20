import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Layers, Trophy, Flame, BarChart3, ChevronDown, Crown, Medal, User } from 'lucide-react'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
}

function Features() {
  return (
    <section className="relative py-14 sm:py-16 lg:py-20">
      {/* soft background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-10%] top-[-10%] h-64 w-64 rounded-full bg-[#1A73E8]/10 blur-3xl" />
        <div className="absolute left-[-10%] bottom-[-10%] h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-slate-500">Welcome to the Outcome Powerhouse</p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            Why Choose JEE Study Buddy?
          </h2>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {/* Card 1 */}
          <motion.div variants={item} className="group relative overflow-hidden rounded-3xl bg-white p-6 sm:p-7 ring-1 ring-black/5 shadow-[16px_16px_48px_rgba(0,0,0,0.06),-12px_-12px_44px_rgba(255,255,255,0.9)]">
            <div className="flex items-start gap-5">
              <div className="shrink-0 rounded-2xl bg-[#1A73E8]/10 text-[#1A73E8] p-3 shadow-inner">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900">All Major Engineering Entrance Exams</h3>
                <p className="mt-1 text-sm text-slate-600">Solve PYQs from 10+ Engineering Entrance Exams…</p>
                {/* Logos row */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {['JEE Mains','JEE Advanced','MHT CET','KCET','VIT','VITJEE','BITSAT','MET'].map((l, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium text-slate-700 rounded-xl bg-slate-50 px-3 py-1 ring-1 ring-slate-200 shadow-[inset_0_1px_0_#fff]"
                    >
                      {l}
                    </span>
                  ))}
                </div>
              </div>
              {/* Illustration placeholder on right */}
              <div className="hidden sm:block">
                <div className="rounded-2xl bg-gradient-to-br from-white to-slate-50 p-3 ring-1 ring-slate-200 shadow-[8px_8px_24px_rgba(0,0,0,0.05)]">
                  <Layers className="h-10 w-10 text-slate-400" />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition opacity duration-300 bg-gradient-to-br from-[#1A73E8]/0 via-[#1A73E8]/5 to-[#1A73E8]/10" />
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={item} className="group relative overflow-hidden rounded-3xl bg-white p-6 sm:p-7 ring-1 ring-black/5 shadow-[16px_16px_48px_rgba(0,0,0,0.06),-12px_-12px_44px_rgba(255,255,255,0.9)]">
            <div className="flex items-start gap-5">
              <div className="shrink-0 rounded-2xl bg-[#1A73E8]/10 text-[#1A73E8] p-3 shadow-inner">
                <Layers className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900">Structured Practice</h3>
                <p className="mt-1 text-sm text-slate-600">Solve the last 20 years’ PYQs…</p>

                {/* Mini dropdown UI */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="rounded-xl bg-slate-50 ring-1 ring-slate-200 px-3 py-2 flex items-center justify-between text-sm text-slate-700 shadow-inner">
                    <span>Year</span>
                    <span className="flex items-center gap-1 text-slate-500">2010–2024 <ChevronDown className="h-4 w-4" /></span>
                  </div>
                  <div className="rounded-xl bg-slate-50 ring-1 ring-slate-200 px-3 py-2 flex items-center justify-between text-sm text-slate-700 shadow-inner">
                    <span>Subject</span>
                    <span className="flex items-center gap-1 text-slate-500">Physics <ChevronDown className="h-4 w-4" /></span>
                  </div>
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="rounded-2xl bg-gradient-to-br from-white to-slate-50 p-3 ring-1 ring-slate-200 shadow-[8px_8px_24px_rgba(0,0,0,0.05)]">
                  <BarChart3 className="h-10 w-10 text-slate-400" />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-[#1A73E8]/0 via-[#1A73E8]/5 to-[#1A73E8]/10" />
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={item} className="group relative overflow-hidden rounded-3xl bg-white p-6 sm:p-7 ring-1 ring-black/5 shadow-[16px_16px_48px_rgba(0,0,0,0.06),-12px_-12px_44px_rgba(255,255,255,0.9)]">
            <div className="flex items-start gap-5">
              <div className="shrink-0 rounded-2xl bg-[#1A73E8]/10 text-[#1A73E8] p-3 shadow-inner">
                <Trophy className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900">Earn & Achieve</h3>
                <p className="mt-1 text-sm text-slate-600">Earn badges by solving PYQs…</p>

                {/* Badges */}
                <div className="mt-4 flex flex-wrap gap-3">
                  {[
                    { label: '25 Days', color: 'from-violet-500 to-fuchsia-500' },
                    { label: '10 On a Row', color: 'from-emerald-500 to-teal-500' },
                    { label: 'Speedster', color: 'from-sky-500 to-blue-600' },
                  ].map((b, i) => (
                    <span
                      key={i}
                      className={`inline-flex items-center gap-1 rounded-full bg-gradient-to-r ${b.color} px-3 py-1 text-xs font-semibold text-white shadow-[0_8px_20px_rgba(0,0,0,0.12)]`}
                    >
                      <Medal className="h-3.5 w-3.5" /> {b.label}
                    </span>
                  ))}
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="rounded-2xl bg-gradient-to-br from-white to-slate-50 p-3 ring-1 ring-slate-200 shadow-[8px_8px_24px_rgba(0,0,0,0.05)]">
                  <Crown className="h-10 w-10 text-slate-400" />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-[#1A73E8]/0 via-[#1A73E8]/5 to-[#1A73E8]/10" />
          </motion.div>

          {/* Card 4 */}
          <motion.div variants={item} className="group relative overflow-hidden rounded-3xl bg-white p-6 sm:p-7 ring-1 ring-black/5 shadow-[16px_16px_48px_rgba(0,0,0,0.06),-12px_-12px_44px_rgba(255,255,255,0.9)]">
            <div className="flex items-start gap-5">
              <div className="shrink-0 rounded-2xl bg-[#1A73E8]/10 text-[#1A73E8] p-3 shadow-inner">
                <Flame className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900">Stay Consistent</h3>
                <p className="mt-1 text-sm text-slate-600">Daily challenges, leaderboards, and badges motivate you.</p>

                {/* Large purple badge */}
                <div className="mt-4">
                  <div className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-2 text-white shadow-[0_14px_34px_rgba(124,58,237,0.35)]">
                    <Flame className="h-5 w-5" />
                    <span className="font-semibold">25 Days Streak Legend</span>
                  </div>
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="rounded-2xl bg-gradient-to-br from-white to-slate-50 p-3 ring-1 ring-slate-200 shadow-[8px_8px_24px_rgba(0,0,0,0.05)]">
                  <Flame className="h-10 w-10 text-violet-400" />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-[#1A73E8]/0 via-[#1A73E8]/5 to-[#1A73E8]/10" />
          </motion.div>

          {/* Card 5 */}
          <motion.div variants={item} className="group relative overflow-hidden rounded-3xl bg-white p-6 sm:p-7 ring-1 ring-black/5 shadow-[16px_16px_48px_rgba(0,0,0,0.06),-12px_-12px_44px_rgba(255,255,255,0.9)]">
            <div className="flex items-start gap-5">
              <div className="shrink-0 rounded-2xl bg-[#1A73E8]/10 text-[#1A73E8] p-3 shadow-inner">
                <BarChart3 className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900">Know Your Standing</h3>
                <p className="mt-1 text-sm text-slate-600">Know your All India Rank among 5000+ aspirants</p>

                {/* Leaderboard */}
                <div className="mt-4 rounded-2xl bg-slate-50 ring-1 ring-slate-200 p-3">
                  {[
                    { name: 'Aarav', score: 987, color: 'bg-yellow-400', icon: Crown },
                    { name: 'Diya', score: 963, color: 'bg-slate-300', icon: Medal },
                    { name: 'Kabir', score: 951, color: 'bg-amber-600', icon: Medal },
                  ].map((p, idx) => (
                    <div key={idx} className="flex items-center justify-between py-2 first:pt-0 last:pb-0">
                      <div className="flex items-center gap-3">
                        <div className={`h-8 w-8 rounded-full grid place-items-center ${p.color} text-white shadow`}>{idx + 1}</div>
                        <div>
                          <div className="text-sm font-semibold text-slate-800">{p.name}</div>
                          <div className="text-xs text-slate-500">Score {p.score}</div>
                        </div>
                      </div>
                      <div className="text-slate-400">
                        <User className="h-5 w-5" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="rounded-2xl bg-gradient-to-br from-white to-slate-50 p-3 ring-1 ring-slate-200 shadow-[8px_8px_24px_rgba(0,0,0,0.05)]">
                  <BarChart3 className="h-10 w-10 text-slate-400" />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-[#1A73E8]/0 via-[#1A73E8]/5 to-[#1A73E8]/10" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
