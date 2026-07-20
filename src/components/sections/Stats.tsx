'use client'
import { Reveal } from '@/components/ui/Reveal'
import { Wrap } from '@/components/ui/Section'

function StaticStat({
  children,
  label,
  delay = 0,
}: {
  children: React.ReactNode
  label: string
  delay?: number
}) {
  return (
    <Reveal className="stat text-center relative" delay={delay}>
      <div className="font-display text-[48px] max-[760px]:text-[40px] font-bold tracking-[-0.03em] text-indigo leading-none">
        {children}
      </div>
      <div className="mt-3 text-[13px] font-semibold uppercase tracking-[0.07em] text-slate-600">
        {label}
      </div>
    </Reveal>
  )
}

export function Stats() {
  return (
    /*
      .stats:
        padding: 56px 0; border-bottom: 1px solid var(--slate-200); background: #fff
    */
    <section
      aria-label="What we deliver"
      className="border-b border-slate-200 bg-white py-[56px]"
    >
      <Wrap>
        {/*
          .stats__inner:
            display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px
          @media (max-width: 760px):
            grid-template-columns: 1fr 1fr; gap: 40px 24px
          Dividers between cells via CSS sibling rule:
            .stat + .stat::before — a 1px × 56px vertical line at left:-12px
          We reproduce these as a Tailwind equivalent with pseudo-before on each non-first stat.
        */}
        <div
          className="
            grid gap-[24px]
            [grid-template-columns:repeat(4,1fr)]
            max-[760px]:[grid-template-columns:1fr_1fr] max-[760px]:gap-x-[24px] max-[760px]:gap-y-[40px]
            [&_.stat+.stat]:before:content-[''] [&_.stat+.stat]:before:absolute
            [&_.stat+.stat]:before:left-[-12px] [&_.stat+.stat]:before:top-1/2
            [&_.stat+.stat]:before:-translate-y-1/2 [&_.stat+.stat]:before:w-px
            [&_.stat+.stat]:before:h-[56px] [&_.stat+.stat]:before:bg-slate-200
            max-[760px]:[&_.stat:nth-child(odd)]:before:hidden
            max-[760px]:[&_.stat:nth-child(3)]:before:hidden
            max-[760px]:[&_.stat:nth-child(4)]:before:hidden
          "
        >
          {/* Cell 1: lead with the affordable starting price */}
          <StaticStat label="Starting price" delay={0}>
            ₱19,999
          </StaticStat>

          {/* Cell 2: static "Free" — affordable + free to start, one-two punch */}
          <StaticStat label="Consultation & quote" delay={80}>
            Free
          </StaticStat>

          {/* Cell 3: static "1–2 wks" with smaller "wks" span */}
          <StaticStat label="From idea to launch" delay={160}>
            1–2<span style={{ fontSize: '0.5em', fontWeight: 600 }}> wks</span>
          </StaticStat>

          {/* Cell 4: static "∞" — pairs with the new unlimited-revisions pricing policy */}
          <StaticStat label="Unlimited iterations" delay={240}>
            ∞
          </StaticStat>
        </div>
      </Wrap>
    </section>
  )
}
