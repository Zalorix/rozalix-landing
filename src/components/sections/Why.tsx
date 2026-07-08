'use client'

import { useState } from 'react'
import { Check, ChevronDown } from 'lucide-react'
import { Section, Wrap } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Reveal } from '@/components/ui/Reveal'
import { Icon } from '@/components/ui/Icon'

const props = [
  {
    icon: 'code',
    title: 'Hand-coded, not drag-and-drop',
    body: 'Template sites start to look — and load — the same. When a visitor can tell yours was built in twenty minutes, they start wondering what else was rushed.',
    panelHeadline: 'Real code. Not a template anyone else can buy.',
    panelCaption: 'No Wix. No Squarespace. Nothing a competitor can buy off the same shelf — just a site built to be yours.',
  },
  {
    icon: 'shield-check',
    title: 'Big-agency quality, honest prices',
    body: "You shouldn't have to choose between an agency you can't afford and a freelancer who goes quiet halfway through. One quote, no hidden line items, no vanishing act.",
    panelHeadline: 'One clear quote. No surprise fees.',
    panelCaption: "The polish of a big agency, without the bloated process, the retainer, or an invoice that grows after you've said yes.",
  },
  {
    icon: 'gauge',
    title: 'Built to perform',
    body: "A beautiful site nobody can find, or one that takes six seconds to load on a phone, doesn't grow anything. Yours is mobile-first and search-ready before it goes live.",
    panelHeadline: 'Built to be found, not just admired.',
    panelCaption: "Mobile-first, SEO-ready, and fast by default — because most of your customers are meeting you on a phone, mid-scroll.",
  },
  {
    icon: 'bot',
    title: 'Custom-trained AI, not a bolt-on chatbot',
    body: "Off-the-shelf chatbot plugins give canned, generic answers that frustrate people. Yours is trained only on your business — answering from what's real, never guessing.",
    panelHeadline: 'Trained on your business. Nothing invented.',
    panelCaption: "No generic chatbot plugin, no made-up answers — the same way your site is hand-coded for you, your AI is trained for you.",
  },
] as const

// ── Right-panel visuals — one bespoke proof per claim ───────────────────────

function CodeProof() {
  const lines: Array<[string, string][]> = [
    [['<', 'text-slate-500'], ['section', 'text-indigo-400'], [' className=', 'text-slate-500'], ['"hero"', 'text-emerald-300'], ['>', 'text-slate-500']],
    [['  <', 'text-slate-500'], ['h1', 'text-indigo-400'], ['>', 'text-slate-500'], ['Grow your business', 'text-slate-200'], ['</', 'text-slate-500'], ['h1', 'text-indigo-400'], ['>', 'text-slate-500']],
    [['  <', 'text-slate-500'], ['Button', 'text-indigo-400'], [' href=', 'text-slate-500'], ['"/quote"', 'text-emerald-300'], [' />', 'text-slate-500']],
    [['</', 'text-slate-500'], ['section', 'text-indigo-400'], ['>', 'text-slate-500']],
  ]
  return (
    <div className="overflow-hidden rounded-[10px] border border-white/10 bg-black/25">
      <div className="flex items-center gap-[6px] border-b border-white/10 px-[14px] py-[9px]">
        <span className="h-[8px] w-[8px] rounded-full bg-white/20" />
        <span className="h-[8px] w-[8px] rounded-full bg-white/20" />
        <span className="h-[8px] w-[8px] rounded-full bg-white/20" />
      </div>
      <div className="px-[16px] py-[14px] font-mono text-[12.5px] leading-[1.9]">
        {lines.map((line, i) => (
          <div key={i} className="whitespace-pre">
            {line.map(([text, cls], j) => (
              <span key={j} className={cls}>
                {text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function QuoteProof() {
  const rows = ['Design', 'Development', 'Launch & support']
  return (
    <div className="rounded-[10px] border border-white/10 bg-black/25 px-[18px] py-[16px]">
      {rows.map((r) => (
        <div key={r} className="flex items-center justify-between border-b border-white/10 py-[10px] text-[14px] text-slate-300 last:border-b-0">
          <span>{r}</span>
          <span className="font-medium text-white">Included</span>
        </div>
      ))}
      <div className="mt-[12px] flex items-center justify-between text-[14px] font-semibold text-white">
        <span>One quote</span>
        <span>No surprises</span>
      </div>
    </div>
  )
}

function PerformanceProof() {
  const points = ['Mobile-first, every screen size', 'SEO-ready on day one', 'Fast by default, no bloat']
  return (
    <div className="rounded-[10px] border border-white/10 bg-black/25 px-[18px] py-[16px]">
      {points.map((p) => (
        <div key={p} className="flex items-center gap-[12px] border-b border-white/10 py-[11px] text-[14px] text-slate-200 last:border-b-0">
          <span className="grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full bg-emerald-400/15 text-emerald-300">
            <Check className="h-[13px] w-[13px]" strokeWidth={2.5} />
          </span>
          {p}
        </div>
      ))}
    </div>
  )
}

function TrainedProof() {
  const points = ['Trained only on your business facts', 'No generic, copy-paste scripts', "Hands off to you when it's unsure"]
  return (
    <div className="rounded-[10px] border border-white/10 bg-black/25 px-[18px] py-[16px]">
      {points.map((p) => (
        <div key={p} className="flex items-center gap-[12px] border-b border-white/10 py-[11px] text-[14px] text-slate-200 last:border-b-0">
          <span className="grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full bg-emerald-400/15 text-emerald-300">
            <Check className="h-[13px] w-[13px]" strokeWidth={2.5} />
          </span>
          {p}
        </div>
      ))}
    </div>
  )
}

const proofVisuals = [CodeProof, QuoteProof, PerformanceProof, TrainedProof]

export function Why() {
  const [active, setActive] = useState(0)
  const ActiveVisual = proofVisuals[active]
  const activeProp = props[active]

  return (
    <Section tint id="why">
      <Wrap>
        <div
          className="
            grid
            [grid-template-columns:1fr_1fr]
            gap-[56px]
            items-center
            max-[920px]:[grid-template-columns:1fr]
            max-[920px]:gap-[40px]
          "
        >
          {/* LEFT COLUMN — selectable claims */}
          <Reveal>
            <div className="mb-[24px]">
              <Eyebrow>Why Rozalix</Eyebrow>
              <h2 className="mt-[14px] mb-[18px] text-[40px]">
                Everything we build is made to grow your business — not just look good doing it.
              </h2>
            </div>

            <div className="grid gap-[8px]" role="tablist" aria-label="Why Rozalix">
              {props.map((p, i) => {
                const isActive = i === active
                const Visual = proofVisuals[i]
                return (
                  <div
                    key={p.icon}
                    className={[
                      'overflow-hidden rounded-[12px] transition-[background,box-shadow] duration-150 ease-out',
                      isActive ? 'bg-white shadow-[var(--shadow-card)]' : '',
                    ].join(' ')}
                  >
                    <button
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActive(i)}
                      className={[
                        'flex w-full items-start gap-[18px] rounded-[12px] p-[22px] text-left',
                        'transition-[background] duration-150 ease-out',
                        !isActive && 'hover:bg-white/60',
                      ].join(' ')}
                    >
                      <div
                        className={[
                          'grid h-[46px] w-[46px] shrink-0 place-items-center rounded-[8px] transition-colors duration-150',
                          isActive ? 'bg-indigo' : 'bg-slate-300',
                        ].join(' ')}
                      >
                        <Icon name={p.icon} className="h-[22px] w-[22px] text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-[6px] font-sans text-[18px] font-semibold tracking-[0]">
                          {p.title}
                        </h3>
                        <p className="text-[15.5px] text-slate-600">{p.body}</p>
                      </div>
                      {/* Mobile-only "this expands" affordance — rotates open/closed */}
                      <ChevronDown
                        className={[
                          'mt-[2px] h-[18px] w-[18px] shrink-0 text-slate-400 transition-transform duration-200 min-[921px]:hidden',
                          isActive ? 'rotate-180' : '',
                        ].join(' ')}
                        strokeWidth={2}
                      />
                    </button>

                    {/* Mobile-only accordion panel — expands right where the tap happened, so
                        there's no need to scroll down to a shared panel. Always rendered (not
                        conditionally mounted) so height animates smoothly open/closed via a CSS
                        grid-rows trick, rather than popping in/out instantly. Desktop uses the
                        shared panel in the right column instead (hidden below 920px). */}
                    <div
                      className={[
                        'grid min-[921px]:hidden transition-[grid-template-rows] duration-300 ease-out',
                        isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                      ].join(' ')}
                    >
                      <div className="overflow-hidden">
                        <div
                          className={[
                            'px-[16px] pb-[16px] transition-opacity duration-300',
                            isActive ? 'opacity-100 delay-100' : 'opacity-0',
                          ].join(' ')}
                        >
                          <div
                            className="relative overflow-hidden rounded-[12px] p-[22px] text-white"
                            style={{ background: 'linear-gradient(165deg, #0F172A 0%, #3730A3 130%)' }}
                          >
                            <h4 className="mb-[14px] text-[18px] font-semibold text-white" style={{ maxWidth: '24ch' }}>
                              {p.panelHeadline}
                            </h4>
                            <Visual />
                            <p className="mt-[14px] text-[13px] leading-[1.6] text-slate-400">
                              {p.panelCaption}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </Reveal>

          {/* RIGHT COLUMN — desktop-only proof panel, swaps with the selected claim.
              Hidden below 920px in favor of the inline accordion panels above. */}
          <Reveal className="max-[920px]:hidden">
            <div
              className="relative overflow-hidden rounded-[16px] p-[44px] text-white max-[560px]:p-[26px]"
              style={{ background: 'linear-gradient(165deg, #0F172A 0%, #3730A3 130%)' }}
            >
              <div
                className="rz-drift pointer-events-none absolute"
                style={{
                  right: '-60px',
                  top: '-60px',
                  width: '240px',
                  height: '240px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(129,140,248,.35), transparent 70%)',
                }}
                aria-hidden="true"
              />

              <Eyebrow className="text-indigo-400">The Rozalix difference</Eyebrow>

              <div key={active} className="rz-fade-in relative">
                <h3
                  className="text-[28px] max-[560px]:text-[23px] text-white"
                  style={{ margin: '14px 0 24px', maxWidth: '20ch' }}
                >
                  {activeProp.panelHeadline}
                </h3>

                <ActiveVisual />

                <p className="mt-[20px] text-[14.5px] leading-[1.6] text-slate-400">
                  {activeProp.panelCaption}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Wrap>
    </Section>
  )
}
