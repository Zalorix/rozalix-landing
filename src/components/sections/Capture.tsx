import { Zap, Inbox, FileText, Clock, ArrowRight } from 'lucide-react'
import { Section, Wrap } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Reveal } from '@/components/ui/Reveal'
import { productLinks } from '@/lib/nav'

const pillars = [
  {
    icon: <Zap />,
    title: 'Instant response, day or night',
    body: 'Your AI receptionist replies the moment someone reaches out, on webchat or SMS — not whenever you next check your phone.',
  },
  {
    icon: <Inbox />,
    title: 'Nothing gets lost',
    body: 'Every enquiry, from every channel, lands in one CRM — no lead buried in an inbox or a missed notification.',
  },
  {
    icon: <FileText />,
    title: 'The short version, not the scroll',
    body: "Instead of reading a whole conversation back, get the one-line summary: who they are, what they want, what they need from you next.",
  },
  {
    icon: <Clock />,
    title: 'Speed closes deals',
    body: 'The longer someone waits for a reply, the more likely they lose interest or find someone else. Yours replies before that window closes.',
  },
]

export function Capture() {
  return (
    <Section id="capture">
      <Wrap>
        <Reveal className="mb-[52px] max-w-[680px]">
          <Eyebrow>Beyond the website</Eyebrow>
          <h2 className="my-[14px] text-[40px]">The part everyone else forgets.</h2>
          <p className="text-[19px] text-slate-600">
            A gorgeous site gets someone to look. This is what makes them stay — and buy.
          </p>
        </Reveal>

        <div className="grid grid-cols-4 gap-[22px] max-[980px]:grid-cols-2 max-[540px]:grid-cols-1">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 80} className="h-full">
              <div className="group h-full rounded-[12px] border border-slate-200 bg-white p-[26px] shadow-[var(--shadow-card)] transition-[transform,box-shadow,border-color] duration-[180ms] hover:-translate-y-1 hover:border-slate-300 hover:shadow-[var(--shadow-hover)]">
                <div className="mb-[18px] grid h-[46px] w-[46px] place-items-center rounded-[8px] bg-indigo-50 [&_svg]:h-[22px] [&_svg]:w-[22px] [&_svg]:text-indigo">
                  {p.icon}
                </div>
                <h3 className="mb-[8px] font-sans text-[17px] font-semibold tracking-[0]">{p.title}</h3>
                <p className="text-[14.5px] text-slate-600">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={320} className="mt-[44px] flex flex-wrap items-center gap-x-[28px] gap-y-[14px]">
          <span className="text-[14px] font-semibold uppercase tracking-[0.08em] text-slate-400">
            See it in action
          </span>
          {productLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group inline-flex items-center gap-[6px] text-[15px] font-medium text-indigo hover:underline"
            >
              {link.label}
              <ArrowRight className="h-[14px] w-[14px] transition-transform duration-150 group-hover:translate-x-[3px]" strokeWidth={1.75} />
            </a>
          ))}
        </Reveal>
      </Wrap>
    </Section>
  )
}
