import type { Metadata } from 'next'
import { MessageCircle, Smartphone, CalendarCheck, UserCheck } from 'lucide-react'
import { ProductLayout, ProductFeatGrid, ProductFeatItem } from '@/components/product/ProductLayout'
import { VideoPlaceholder } from '@/components/product/VideoPlaceholder'
import { Wrap } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Rozalix AI SMS — Text follow-up the moment a form is submitted',
  description:
    'An AI that texts every form submission back instantly — qualifies, answers questions, and books a call over SMS, reaching people even after they\'ve left your site.',
}

export default function AiSmsProductPage() {
  return (
    <ProductLayout
      eyebrow="Rozalix AI SMS"
      title="A text back before they've even left the page."
      summary="The moment someone submits your contact form, our AI texts them back — qualifying, answering questions, and booking a call, all over SMS. No app to open, no chat window to keep alive."
      ctaHeadline="Want every form submission followed up?"
      ctaBody="Tell us about your business and we'll walk you through what's included — no pricing pressure, just a conversation."
    >
      {/* Video / demo placeholder */}
      <section className="py-[100px]">
        <Wrap>
          <VideoPlaceholder caption="Text-message follow-up demo — video coming soon" />
        </Wrap>
      </section>

      {/* Feature grid */}
      <ProductFeatGrid id="features">
        <Reveal className="mb-[52px] max-w-[680px]">
          <span className="inline-block font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-indigo">
            What it does
          </span>
          <h2 className="my-[14px] text-[clamp(24px,3vw,36px)] font-display font-semibold">
            Reaches leads who've already moved on.
          </h2>
          <p className="text-[19px] text-slate-600">
            Webchat only helps while someone's on your site. SMS follows them after the tab is closed.
          </p>
        </Reveal>
        <div className="grid grid-cols-4 gap-[22px] max-[980px]:grid-cols-2 max-[540px]:grid-cols-1">
          <ProductFeatItem icon={<MessageCircle />} title="Instant SMS follow-up">
            The moment a form is submitted, a text goes out — while your business is still top of mind.
          </ProductFeatItem>
          <ProductFeatItem icon={<Smartphone />} title="Reaches people who've already left">
            Texts land in their pocket whether they're still browsing or long gone — no need to keep a window open.
          </ProductFeatItem>
          <ProductFeatItem icon={<CalendarCheck />} title="Books calls automatically">
            It offers real slots from your calendar and confirms the booking by text — no back-and-forth.
          </ProductFeatItem>
          <ProductFeatItem icon={<UserCheck />} title="Knows when to hand off">
            Hard guardrails and escalation triggers mean it steps aside for you the moment a conversation needs a human touch.
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
              One extra field, a lot more follow-up.
            </h2>
            <p className="text-[18px] leading-[1.6] text-slate-600">
              This works alongside your existing contact form — the only change is that a phone number becomes
              required, so there's somewhere to send that first text. Every reply lands in the same{' '}
              <a href="/products/crm" className="font-medium text-indigo hover:underline">
                Rozalix CRM
              </a>{' '}
              as everything else, right alongside anything{' '}
              <a href="/products/webchat" className="font-medium text-indigo hover:underline">
                Rozalix AI Webchat
              </a>{' '}
              captures — and it's part of the same{' '}
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
