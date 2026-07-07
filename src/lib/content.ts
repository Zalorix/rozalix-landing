// ─── Types ────────────────────────────────────────────────────────────────────

export interface Service {
  icon: string
  title: string
  description: string
}

export interface ProcessStep {
  num: string
  title: string
  description: string
}

export interface PricingFeature {
  icon: string
  text: string
}

export interface PricingTier {
  name: string
  price: string
  from?: boolean
  best: string
  features: PricingFeature[]
  cta: string
  featured?: boolean
}

export interface CarePlan {
  name: string
  price: string
  blurb: string
}

// ─── Services ─────────────────────────────────────────────────────────────────

export const services: Service[] = [
  {
    icon: 'compass',
    title: 'Strategy & UX',
    description: 'Goals, structure, and user flows mapped before a single pixel is drawn.',
  },
  {
    icon: 'pen-tool',
    title: 'Design',
    description: 'Clean, modern, on-brand interfaces that look like they belong at the top of your market.',
  },
  {
    icon: 'code',
    title: 'Development',
    description: 'Fast, responsive builds on a modern stack — marketing sites and full web apps alike.',
  },
  {
    icon: 'gauge',
    title: 'Performance & SEO',
    description: 'Quick load times and a search-ready foundation, engineered in from the start.',
  },
  {
    icon: 'rocket',
    title: 'Launch',
    description: 'Testing, deployment, and a smooth go-live — with no surprises on launch day.',
  },
  {
    icon: 'life-buoy',
    title: 'Ongoing support',
    description: 'Updates, monitoring, and improvements that keep the site sharp after launch.',
  },
]

// ─── Process Steps ────────────────────────────────────────────────────────────

export const processSteps: ProcessStep[] = [
  {
    num: '01',
    title: 'Discovery & Strategy',
    description: 'We align on goals, audience, and scope — then map the structure.',
  },
  {
    num: '02',
    title: 'Content & Copy',
    description: 'We write your real words and messaging first, so design has something true to work with.',
  },
  {
    num: '03',
    title: 'Design',
    description: 'On-brand interface design, reviewed and refined with you.',
  },
  {
    num: '04',
    title: 'Development',
    description: 'We build it fast and responsive on a modern, reliable stack.',
  },
  {
    num: '05',
    title: 'Launch',
    description: 'Thorough testing, deployment, and a smooth go-live.',
  },
  {
    num: '06',
    title: 'Support',
    description: "Monitoring, updates, and improvements after you're live.",
  },
]

// ─── Pricing Tiers ────────────────────────────────────────────────────────────

export const pricingTiers: PricingTier[] = [
  {
    name: 'Launch',
    price: '₱19,999',
    from: true,
    best: 'A clean, professional presence, fast.',
    features: [
      { icon: 'check', text: 'Up to 5 pages, custom mobile-first design' },
      { icon: 'repeat-2', text: 'Up to 2 rounds of revisions' },
      { icon: 'check', text: 'Editable CMS + blog, lead/contact form' },
      { icon: 'check', text: 'Professional copywriting + full SEO' },
      { icon: 'check', text: '2 months of Care Plan (Premium) free' },
      { icon: 'check', text: '~1–2 weeks' },
    ],
    cta: 'Start a project',
  },
  {
    name: 'Business',
    price: '₱29,999',
    from: true,
    best: 'More room to grow, with content control.',
    featured: true,
    features: [
      { icon: 'check', text: 'Up to 10 pages, custom mobile-first design' },
      { icon: 'repeat-2', text: 'Up to 3 rounds of revisions' },
      { icon: 'check', text: 'Editable CMS + blog, lead/contact form' },
      { icon: 'check', text: 'Professional copywriting + full SEO' },
      { icon: 'check', text: '1 integration (Meta, Notion, and more)' },
      { icon: 'check', text: '2.5 months of Care Plan (Premium) free' },
      { icon: 'check', text: '~2–4 weeks' },
    ],
    cta: 'Start a project',
  },
  {
    name: 'Growth',
    price: '₱39,999',
    from: true,
    best: 'Depth, content control, and polish.',
    features: [
      { icon: 'check', text: 'Up to 15 pages, custom mobile-first design' },
      { icon: 'repeat-2', text: 'Up to 4 rounds of revisions' },
      { icon: 'check', text: 'Editable CMS + blog, lead/contact form' },
      { icon: 'check', text: 'Professional copywriting + full SEO' },
      { icon: 'check', text: '2 integrations (Meta, Notion, and more)' },
      { icon: 'check', text: 'Admin training · 3 months of Care Plan (Premium) free' },
      { icon: 'check', text: '~4–6 weeks' },
    ],
    cta: 'Start a project',
  },
  {
    name: 'E-commerce',
    price: '₱119,999',
    from: true,
    best: 'Everything you need to sell online.',
    features: [
      { icon: 'check', text: 'Product catalog + core pages' },
      { icon: 'repeat-2', text: 'Up to 5 rounds of revisions' },
      { icon: 'check', text: 'Editable CMS + product/order management' },
      { icon: 'check', text: 'GCash / Maya / PayPal + card gateway' },
      { icon: 'check', text: 'Inventory, customer accounts + 1 integration' },
      { icon: 'check', text: 'Admin training · 4 months of Care Plan (Premium) free' },
      { icon: 'check', text: '~5–8 weeks' },
    ],
    cta: 'Get a quote',
  },
  {
    name: 'Custom',
    price: "Let's talk",
    best: 'Web apps, dashboards & complex builds. From ₱299,999',
    features: [
      { icon: 'check', text: 'Discovery & UX strategy' },
      { icon: 'repeat-2', text: 'Unlimited revisions (within agreed scope)' },
      { icon: 'check', text: 'Bespoke admin + custom backend' },
      { icon: 'check', text: 'Role-based access, dedicated contact' },
      { icon: 'check', text: 'Unlimited / custom API integrations' },
      { icon: 'check', text: 'Scalable modern stack · Care Plan scoped per contract' },
      { icon: 'check', text: '~8–12+ weeks' },
    ],
    cta: 'Book a consultation',
  },
]

// ─── Care Plans ───────────────────────────────────────────────────────────────

export const carePlans: CarePlan[] = [
  {
    name: 'Essential',
    price: '₱999/mo',
    blurb: 'Managed hosting, SSL, security scans, backups, uptime monitoring, and ongoing CMS access to keep editing your site.',
  },
  {
    name: 'Growth',
    price: '₱2,499/mo',
    blurb: 'Everything in Essential, plus your CRM (leads inbox & project tracker), ~2 hrs of edits/month, and up to 3 team members.',
  },
  {
    name: 'Premium',
    price: '₱5,499/mo',
    blurb: 'Everything in Growth, plus your AI receptionist (webchat, bookings & assistant), ~4 hrs of dev time/month, and up to 10 team members.',
  },
]

// ─── Current promotion ────────────────────────────────────────────────────────
//
// One real, time-boxed offer at a time — update by hand each cycle, don't
// auto-rotate. `endsAt` must be a genuine end date; the header/banner hide
// themselves once it passes (see PromoHeaderBar.tsx), so never leave a
// stale/expired promo live. When `kind` is 'percent-off', the pricing cards
// show the real discounted price (see `discountedPrice` below) — the
// struck-through price is always the genuine current list price, never an
// invented "was" figure. Suggested rotation, each a real bounded window
// (~4 weeks):
//   1. Launch discount (this one)       — 10% off, real cut of the real price.
//   2. Bonus revision round             — "+1 free revision round, any tier"
//   3. Bonus Care Plan month            — "+1 free month" (2mo -> 3mo)
export const currentPromo = {
  active: true,
  kind: 'percent-off' as const,
  percent: 10,
  headline: '10% off your first project',
  description: 'For a limited time, take 10% off any project tier — book your consultation now to lock in the rate.',
  endsAt: '2026-08-04T23:59:59+08:00',
}

/** Parse a "₱20,000" price string into a number. Returns null for non-numeric prices ("Let's talk"). */
function parsePeso(price: string): number | null {
  const digits = price.replace(/[^\d]/g, '')
  return digits ? Number(digits) : null
}

/** Apply the current promo's percent-off to a "₱20,000"-style price. Returns null if not applicable. */
export function discountedPrice(price: string): string | null {
  if (!currentPromo.active || currentPromo.kind !== 'percent-off') return null
  const amount = parsePeso(price)
  if (amount === null) return null
  // Round to the nearest peso (not the nearest 100) so the charm-priced
  // "...999" ending carries through into the discounted price too.
  const cut = Math.round(amount * (1 - currentPromo.percent / 100))
  return `₱${cut.toLocaleString('en-PH')}`
}
