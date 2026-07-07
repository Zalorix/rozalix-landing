import { Compass, PenTool, Code, Gauge, Rocket, LifeBuoy, ShieldCheck, Zap, Check, Repeat2, Info, Bot, type LucideIcon } from 'lucide-react'

const map: Record<string, LucideIcon> = {
  compass: Compass,
  'pen-tool': PenTool,
  code: Code,
  gauge: Gauge,
  rocket: Rocket,
  'life-buoy': LifeBuoy,
  'shield-check': ShieldCheck,
  zap: Zap,
  check: Check,
  'repeat-2': Repeat2,
  info: Info,
  bot: Bot,
}

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = map[name]
  return Cmp ? <Cmp className={className} strokeWidth={1.75} /> : null
}
