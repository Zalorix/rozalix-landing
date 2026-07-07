'use client'

import { useEffect, useState } from 'react'
import { Zap } from 'lucide-react'
import { currentPromo } from '@/lib/content'

function timeLeft(endsAt: string) {
  const diff = new Date(endsAt).getTime() - Date.now()
  if (diff <= 0) return null
  const days = Math.floor(diff / 86_400_000)
  const hours = Math.floor((diff % 86_400_000) / 3_600_000)
  return { days, hours }
}

/**
 * Real, time-boxed promo banner shown at the top of the homepage — disappears
 * on its own once `currentPromo.endsAt` passes, so it's never left stale.
 */
export function PromoHeaderBar() {
  const [left, setLeft] = useState<{ days: number; hours: number } | null>(null)

  useEffect(() => {
    if (!currentPromo.active) return
    const tick = () => setLeft(timeLeft(currentPromo.endsAt))
    tick()
    const id = setInterval(tick, 60_000)
    return () => clearInterval(id)
  }, [])

  if (!currentPromo.active || !left) return null

  return (
    <div
      className="w-full text-white"
      style={{ background: 'linear-gradient(135deg, var(--color-indigo), var(--color-violet))' }}
    >
      <a
        href="#pricing"
        className="mx-auto flex w-full max-w-[var(--maxw)] flex-wrap items-center justify-center gap-x-[10px] gap-y-[4px] px-[var(--gutter)] py-[11px] text-center text-[13.5px] font-medium text-white hover:opacity-90"
      >
        <Zap className="h-[15px] w-[15px] shrink-0" strokeWidth={2} aria-hidden="true" />
        <span className="font-semibold">{currentPromo.headline}.</span>
        <span className="hidden text-white/85 sm:inline">{currentPromo.description}</span>
        <span className="whitespace-nowrap font-semibold underline underline-offset-2">
          Ends in {left.days}d {left.hours}h
        </span>
      </a>
    </div>
  )
}
