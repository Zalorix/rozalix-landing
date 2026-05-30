import type { ReactNode } from 'react'

export function Wrap({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[var(--maxw)] px-[var(--gutter)] ${className}`}>{children}</div>
}

export function Section({ children, id, tint = false, className = '' }: { children: ReactNode; id?: string; tint?: boolean; className?: string }) {
  return (
    <section id={id} className={`py-[120px] ${tint ? 'bg-slate-50 border-y border-slate-200' : ''} ${className}`}>
      {children}
    </section>
  )
}

export function SectionHead({ eyebrow, title, children, center = false }: { eyebrow: string; title: ReactNode; children?: ReactNode; center?: boolean }) {
  return (
    <div className={`max-w-[680px] ${center ? 'mx-auto text-center' : ''}`}>
      <span className="inline-block font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-indigo">{eyebrow}</span>
      <h2 className="my-[14px] mb-[18px] text-[40px]">{title}</h2>
      {children ? <p className="text-[19px] text-slate-600">{children}</p> : null}
    </div>
  )
}
