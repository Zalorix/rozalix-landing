export type CaseStudyTheme = 'np' | 'bb' | 'sf' | 'sap'

export interface CaseStudy {
  slug: string
  href: string
  name: string
  tags: [string, string]
  blurb: string
  theme: CaseStudyTheme
  /** Primary category label used in "More work" related cards */
  category: string
}

const slugs = {
  np: 'northpoint-advisory',
  bb: 'brew-and-bloom',
  sf: 'stockflow',
  sap: 'sapling',
} as const

function make(
  theme: CaseStudyTheme,
  name: string,
  tags: [string, string],
  blurb: string,
  category: string,
): CaseStudy {
  const slug = slugs[theme]
  return { slug, href: `/work/${slug}`, name, tags, blurb, theme, category }
}

export const caseStudies: CaseStudy[] = [
  make(
    'np',
    'Northpoint Advisory',
    ['Corporate site', 'Consulting'],
    'A trust-first marketing site for a modern management-consulting firm — service architecture, senior team, and a clear path to a conversation.',
    'Consulting',
  ),
  make(
    'bb',
    'Brew & Bloom',
    ['E-commerce', 'Retail'],
    'A fast, mobile-first store for a lifestyle coffee & homeware brand — with one-page checkout and GCash, Maya & card.',
    'E-commerce',
  ),
  make(
    'sf',
    'StockFlow',
    ['Web app', 'Dashboard'],
    'A custom inventory & order dashboard that replaces spreadsheet chaos — the hand-coded work a page builder can\'t do.',
    'Web app',
  ),
  make(
    'sap',
    'Sapling',
    ['Landing page', 'Fintech'],
    'A conversion-focused launch page for a fintech app — a focused single-page flow built mobile-first to drive sign-ups.',
    'Landing page',
  ),
]

// ── Related-card helper ────────────────────────────────────────────────────

export type RelatedCard = {
  name: string
  href: string
  category: string
  shotClassName: string
}

/**
 * Returns the 3 case studies that are NOT the given slug, shaped as
 * CaseRelated-compatible objects ready to pass to CaseLayout's `related` prop.
 */
export function relatedTo(slug: string): RelatedCard[] {
  return caseStudies
    .filter((c) => c.slug !== slug)
    .map((c) => ({
      name: c.name,
      href: c.href,
      category: `Concept · ${c.category}`,
      shotClassName: `work-card__shot--${c.theme}`,
    }))
}
