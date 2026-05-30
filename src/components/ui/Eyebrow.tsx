import type { ReactNode } from 'react'
export function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span className={`inline-block font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-indigo ${className}`}>
      {children}
    </span>
  )
}
