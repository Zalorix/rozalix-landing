import type { ReactNode } from 'react'
export function Badge({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-pill bg-indigo-50 px-3 py-[5px] text-[13px] font-medium text-indigo-deeper [&_svg]:w-3.5 [&_svg]:h-3.5 ${className}`}>
      {children}
    </span>
  )
}
