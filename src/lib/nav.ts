export const navLinks = [
  { href: '#process', label: 'Process' },
  { href: '#why', label: 'Why Rozalix' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#contact', label: 'Contact' },
] as const

/** Standalone product pages — not homepage anchors, so rendered via a dropdown, not scroll-spy. */
export const productLinks = [
  { href: '/products/crm', label: 'Rozalix CRM' },
  { href: '/products/webchat', label: 'Rozalix AI Webchat' },
  { href: '/products/ai-sms', label: 'Rozalix AI SMS' },
] as const
