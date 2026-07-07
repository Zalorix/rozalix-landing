import type { Metadata } from 'next'
import { Inbox, FolderKanban, FileText, Link2 } from 'lucide-react'
import { ProductLayout, ProductFeatGrid, ProductFeatItem } from '@/components/product/ProductLayout'
import { VideoPlaceholder } from '@/components/product/VideoPlaceholder'
import { Wrap } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Rozalix CRM — The dashboard that comes with your website',
  description:
    'Leads, project tracking, and content editing in one dashboard — built into every Rozalix website, so running your site never means touching code.',
}

export default function CrmProductPage() {
  return (
    <ProductLayout
      eyebrow="Rozalix CRM"
      title="Your website's dashboard, not just its design."
      summary="Every Rozalix site comes with a real dashboard behind it — leads land in one inbox, your build's progress is trackable start to finish, and you can edit your own pages without touching code."
      ctaHeadline="Want this behind your site?"
      ctaBody="Tell us about your business and we'll walk you through what's included — no pricing pressure, just a conversation."
    >
      {/* Video / walkthrough placeholder */}
      <section className="py-[100px]">
        <Wrap>
          <VideoPlaceholder caption="Dashboard walkthrough — video coming soon" />
        </Wrap>
      </section>

      {/* Feature grid */}
      <ProductFeatGrid id="features">
        <Reveal className="mb-[52px] max-w-[680px]">
          <span className="inline-block font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-indigo">
            What's included
          </span>
          <h2 className="my-[14px] text-[clamp(24px,3vw,36px)] font-display font-semibold">
            Everything to run your site, in one place.
          </h2>
          <p className="text-[19px] text-slate-600">
            No separate tools to stitch together — it's all part of the same dashboard your site is built on.
          </p>
        </Reveal>
        <div className="grid grid-cols-4 gap-[22px] max-[980px]:grid-cols-2 max-[540px]:grid-cols-1">
          <ProductFeatItem icon={<Inbox />} title="Leads inbox">
            Every enquiry from your contact form lands in one place, ready to follow up — nothing buried in an inbox.
          </ProductFeatItem>
          <ProductFeatItem icon={<FolderKanban />} title="Project tracker">
            Watch your build move from brief to launch, stage by stage, with a clear view of what's next.
          </ProductFeatItem>
          <ProductFeatItem icon={<FileText />} title="No-code content editor">
            Update pages, swap copy, and publish changes yourself — no developer, no waiting on a ticket.
          </ProductFeatItem>
          <ProductFeatItem icon={<Link2 />} title="Client portal">
            A private, branded link for your own clients to check progress or answer a quick intake survey — no login needed.
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
              Built into your site, not bolted on.
            </h2>
            <p className="text-[18px] leading-[1.6] text-slate-600">
              This isn't a separate app you have to sign up for — it's the same dashboard we use to build your
              site, handed over to you. It grows alongside your{' '}
              <a href="/#pricing" className="font-medium text-indigo hover:underline">
                Care Plan
              </a>
              , and pairs naturally with{' '}
              <a href="/products/webchat" className="font-medium text-indigo hover:underline">
                Rozalix AI Webchat
              </a>{' '}
              and{' '}
              <a href="/products/ai-sms" className="font-medium text-indigo hover:underline">
                Rozalix AI SMS
              </a>
              , both of which feed straight into the same leads inbox.
            </p>
          </Reveal>
        </Wrap>
      </section>
    </ProductLayout>
  )
}
