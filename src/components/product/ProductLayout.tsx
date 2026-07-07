import type { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { Wrap } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'

/**
 * Shared chrome for standalone product pages (CRM, AI Receptionist) — these
 * are real Rozalix product features, not case studies, so there's no
 * "concept" framing, meta strip, or "more work" rail. Nav + Footer come from
 * the root layout.
 */
export function ProductLayout({
  eyebrow = 'Product',
  title,
  summary,
  children,
  ctaHeadline = "Want this on your site?",
  ctaBody = 'Every Rozalix build can include this. Tell us about your business and we\'ll walk you through it — no pricing pressure, just a conversation.',
}: {
  eyebrow?: string
  title: string
  summary: string
  children: ReactNode
  ctaHeadline?: string
  ctaBody?: string
}) {
  return (
    <>
      {/* ── COVER ────────────────────────────────────────────────────── */}
      <header id="top" className="relative overflow-hidden pt-[calc(var(--nav-h)+72px)] pb-[72px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(1000px 520px at 84% -10%, rgba(124,58,237,.10), transparent 58%),' +
              'radial-gradient(760px 440px at 0% 0%, rgba(79,70,229,.06), transparent 55%)',
          }}
        />
        <Wrap className="relative">
          <Reveal className="max-w-[720px]">
            <span className="inline-block font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-indigo">
              {eyebrow}
            </span>
            <h1 className="mt-[18px] mb-[18px] font-display font-semibold leading-[1.05] tracking-[-0.035em] text-[clamp(36px,5.5vw,60px)]">
              {title}
            </h1>
            <p className="max-w-[56ch] text-[clamp(17px,2vw,20px)] leading-[1.5] text-slate-600">
              {summary}
            </p>
            <div className="mt-[32px] flex flex-wrap gap-[14px]">
              <Button href="/#contact" variant="primary" size="lg">
                Book a consultation <ArrowRight strokeWidth={1.75} />
              </Button>
              <Button href="/" variant="secondary" size="lg">
                Back to home
              </Button>
            </div>
          </Reveal>
        </Wrap>
      </header>

      {/* ── PER-PAGE BODY ────────────────────────────────────────────── */}
      {children}

      {/* ── CTA BAND ─────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-[80px]"
        style={{
          background:
            'linear-gradient(135deg, var(--color-ink-900) 0%, var(--color-indigo-deeper) 60%, var(--color-indigo) 135%)',
        }}
      >
        <Wrap>
          <Reveal className="mx-auto max-w-[640px] text-center">
            <h2 className="text-[clamp(26px,4vw,40px)] font-display font-semibold text-white">
              {ctaHeadline}
            </h2>
            {ctaBody && (
              <p className="mx-auto mt-[18px] max-w-[52ch] text-[18px] text-indigo-200">
                {ctaBody}
              </p>
            )}
            <div className="mt-[36px] flex flex-wrap justify-center gap-[14px]">
              <Button href="/#contact" variant="light" size="lg">
                Book a consultation <ArrowRight strokeWidth={1.75} />
              </Button>
            </div>
          </Reveal>
        </Wrap>
      </section>
    </>
  )
}

/** Simple 4-col feature grid — matches the case-study CaseFeatGrid look. */
export function ProductFeatGrid({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <section id={id} className="border-y border-slate-200 bg-slate-50 py-[100px]">
      <Wrap>{children}</Wrap>
    </section>
  )
}

export function ProductFeatItem({
  icon,
  title,
  children,
}: {
  icon: ReactNode
  title: string
  children: ReactNode
}) {
  return (
    <div className="group rounded-[var(--radius-md)] border border-slate-200 bg-white p-[26px] shadow-[var(--shadow-card)] transition-[transform,box-shadow,border-color] duration-[180ms] hover:-translate-y-1 hover:border-slate-300 hover:shadow-[var(--shadow-hover)]">
      <div className="mb-[18px] grid h-[46px] w-[46px] place-items-center rounded-[var(--radius-sm)] bg-indigo-50 [&_svg]:h-[23px] [&_svg]:w-[23px] [&_svg]:text-indigo">
        {icon}
      </div>
      <h3 className="mb-[8px] font-sans text-[17px] font-semibold tracking-[0]">{title}</h3>
      <p className="text-[14.5px] text-slate-600">{children}</p>
    </div>
  )
}
