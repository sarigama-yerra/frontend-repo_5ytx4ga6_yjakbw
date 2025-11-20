import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function StartSolvingButton({ children = 'Start Solving PYQs', className = '' }) {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => navigate('/solve')}
      className={`inline-flex items-center justify-center rounded-full bg-[#1A73E8] px-6 py-3 text-white font-semibold shadow-[0_14px_28px_rgba(26,115,232,0.35)] hover:shadow-[0_16px_34px_rgba(26,115,232,0.45)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A73E8] ${className}`}
    >
      {children}
    </button>
  )
}
