import { Play } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'

/**
 * Stand-in for a future product walkthrough video. Swap for a real
 * <video>/embed later — keep the same rounded, bordered frame so the layout
 * doesn't shift.
 */
export function VideoPlaceholder({ caption }: { caption: string }) {
  return (
    <Reveal>
      <div
        className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-[var(--radius-lg)] border border-slate-200"
        style={{
          background:
            'linear-gradient(135deg, var(--color-indigo-50) 0%, var(--color-slate-50) 55%, var(--color-indigo-50) 100%)',
        }}
      >
        <div className="flex flex-col items-center gap-[14px]">
          <div className="grid h-[64px] w-[64px] place-items-center rounded-full bg-indigo text-white shadow-[0_10px_24px_-8px_rgba(79,70,229,0.55)]">
            <Play className="h-[24px] w-[24px] translate-x-[2px]" fill="currentColor" strokeWidth={0} />
          </div>
          <span className="text-[14px] font-medium text-slate-500">{caption}</span>
        </div>
      </div>
    </Reveal>
  )
}
