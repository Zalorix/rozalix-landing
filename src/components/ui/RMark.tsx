type RMarkProps = { className?: string; mono?: boolean }

export function RMark({ className, mono = false }: RMarkProps) {
  return (
    <svg className={className} viewBox="21 18 63 63" fill="none" aria-hidden="true">
      {/* solid corner blocks: merge stem with the bowl's top bar and waist bar */}
      <rect x="30.5" y="19.5" width="11" height="11" fill="currentColor" />
      <rect x="30.5" y="45.5" width="11" height="11" fill="currentColor" />
      <g
        stroke="currentColor"
        strokeWidth={11}
        strokeLinecap="butt"
        strokeLinejoin="round"
        strokeDasharray="18 7"
      >
        <path d="M36 25 V75" />
        <path d="M36 25 H50 a13 13 0 0 1 0 26 H36" />
      </g>
      <path
        d="M50 51 L70 75"
        stroke={mono ? 'currentColor' : 'var(--color-indigo-400)'}
        strokeWidth={11}
        strokeLinecap="butt"
        strokeDasharray="18 7"
      />
    </svg>
  )
}
