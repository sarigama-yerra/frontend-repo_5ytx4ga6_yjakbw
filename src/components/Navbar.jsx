import { motion } from 'framer-motion'

function Navbar() {
  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full py-4"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-white shadow-[8px_8px_16px_rgba(0,0,0,0.06),-8px_-8px_16px_rgba(255,255,255,0.9)] grid place-items-center ring-1 ring-black/5">
              <div className="h-4 w-4 rounded-sm bg-[#1A73E8]"></div>
            </div>
            <span className="text-xl font-semibold tracking-tight text-slate-800">JEE Study Buddy</span>
          </div>

          <a
            href="#signup"
            className="inline-flex items-center justify-center rounded-full bg-[#1A73E8] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(26,115,232,0.25)] hover:shadow-[0_12px_28px_rgba(26,115,232,0.35)] transition-shadow"
          >
            Sign Up
          </a>
        </div>
      </div>
    </motion.header>
  )
}

export default Navbar
