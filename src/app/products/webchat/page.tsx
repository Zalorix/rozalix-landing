import type { Metadata } from 'next'
import { MessageSquareText, CalendarCheck, UserCheck, ShieldCheck } from 'lucide-react'
import { ProductLayout, ProductFeatGrid, ProductFeatItem } from '@/components/product/ProductLayout'
import { VideoPlaceholder } from '@/components/product/VideoPlaceholder'
import { Wrap } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Rozalix AI Webchat — Answers, qualifies, and books calls for you',
  description:
    'An AI receptionist built into your website — replies instantly, qualifies visitors, books calls straight onto your calendar, and hands off to you the moment it should.',
}

export default function WebchatProductPage() {
  return (
    <ProductLayout
      eyebrow="Rozalix AI Webchat"
      title="Someone answering your site, even when you can't."
      summary="An AI receptionist that lives on your website — it replies instantly, asks the right questions, books a call onto your calendar, and knows exactly when to step aside for you."
      ctaHeadline="Want this answering for you?"
      ctaBody="Tell us about your business and we'll walk you through what's included — no pricing pressure, just a conversation."
    >
      {/* Video / demo placeholder */}
      <section className="py-[100px]">
        <Wrap>
          <VideoPlaceholder caption="Live conversation demo — video coming soon" />
        </Wrap>
      </section>

      {/* Feature grid */}
      <ProductFeatGrid id="features">
        <Reveal className="mb-[52px] max-w-[680px]">
          <span className="inline-block font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-indigo">
            What it does
          </span>
          <h2 className="my-[14px] text-[clamp(24px,3vw,36px)] font-display font-semibold">
            Built to qualify, not just chat.
          </h2>
          <p className="text-[19px] text-slate-600">
            Every conversation is working toward one outcome: a booked call or a clear next step.
          </p>
        </Reveal>
        <div className="grid grid-cols-4 gap-[22px] max-[980px]:grid-cols-2 max-[540px]:grid-cols-1">
          <ProductFeatItem icon={<MessageSquareText />} title="Instant, human-like replies">
            Visitors get an answer immediately, day or night — no more losing enquiries to slow response times.
          </ProductFeatItem>
          <ProductFeatItem icon={<CalendarCheck />} title="Books calls automatically">
            It offers real slots from your calendar and confirms the booking — no back-and-forth emails.
          </ProductFeatItem>
          <ProductFeatItem icon={<UserCheck />} title="Knows when to hand off">
            Hard guardrails and escalation triggers mean it steps aside for you the moment a conversation needs a human touch.
          </ProductFeatItem>
          <ProductFeatItem icon={<ShieldCheck />} title="Trained only on your facts">
            It answers only from what you give it to work with — nothing outside that is ever invented.
          </ProductFeatItem>
        </div>
      </ProductFeatGrid>

      {/* Narrative tie-in */}
      <section className="py-[100px]">
        <Wrap>
          <Reveal className="mx-auto max-w-[720px] text-center">
            <span className="inline-block font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-indigo">
              How it fits together
            </span>
            <h2 className="my-[14px] text-[clamp(24px,3vw,34px)] font-display font-semibold tracking-[-0.02em]">
              Every conversation becomes a lead.
            </h2>
            <p className="text-[18px] leading-[1.6] text-slate-600">
              Nothing gets lost between a chat and a follow-up — every conversation and booking lands straight in
              the same{' '}
              <a href="/products/crm" className="font-medium text-indigo hover:underline">
                Rozalix CRM
              </a>{' '}
              your site already runs on. Pair it with{' '}
              <a href="/products/ai-sms" className="font-medium text-indigo hover:underline">
                Rozalix AI SMS
              </a>{' '}
              to catch people after they've left the page too — both are part of the same{' '}
              <a href="/#pricing" className="font-medium text-indigo hover:underline">
                AI + CRM plan
              </a>.
            </p>
          </Reveal>
        </Wrap>
      </section>
    </ProductLayout>
  )
}
