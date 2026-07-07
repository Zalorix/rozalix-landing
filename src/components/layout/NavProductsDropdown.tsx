'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal,
} from '@floating-ui/react'
import { productLinks } from '@/lib/nav'

/** Desktop-only "Products" menu — same Floating UI pattern as Select.tsx. */
export function NavProductsDropdown() {
  const [open, setOpen] = useState(false)

  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: 'bottom-start',
    whileElementsMounted: autoUpdate,
    middleware: [offset(8), flip({ padding: 8 }), shift({ padding: 8 })],
  })

  const click = useClick(context)
  const dismiss = useDismiss(context)
  const role = useRole(context, { role: 'menu' })
  const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss, role])

  return (
    <div className="max-[920px]:hidden">
      <button
        type="button"
        ref={refs.setReference}
        {...getReferenceProps()}
        className={[
          'flex items-center gap-[4px] rounded-sm px-[14px] py-2 text-[15px] font-medium transition-[color,background] duration-150 hover:bg-slate-100',
          open ? 'text-indigo' : 'text-slate-600 hover:text-ink-900',
        ].join(' ')}
      >
        Products
        <ChevronDown
          className={`h-[15px] w-[15px] transition-transform ${open ? 'rotate-180' : ''}`}
          strokeWidth={2}
        />
      </button>

      {open && (
        <FloatingPortal>
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
            className="z-[80] w-[220px] rounded-[12px] border border-slate-200 bg-white p-[8px] shadow-[var(--shadow-lift)]"
          >
            {productLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-[8px] px-[12px] py-[10px] text-[14.5px] font-medium text-ink-900 transition-colors duration-150 hover:bg-slate-50"
              >
                {link.label}
              </a>
            ))}
          </div>
        </FloatingPortal>
      )}
    </div>
  )
}
