import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Button } from '../Button'

describe('Button', () => {
  it('renders as an anchor when href is given', () => {
    render(<Button href="#contact">Start</Button>)
    const el = screen.getByRole('link', { name: 'Start' })
    expect(el.tagName).toBe('A')
    expect(el).toHaveAttribute('href', '#contact')
  })
  it('applies the primary variant class', () => {
    render(<Button variant="primary">Go</Button>)
    expect(screen.getByText('Go').closest('a, button')).toHaveClass('bg-indigo')
  })
  it('renders a button element without href', () => {
    render(<Button type="submit">Send</Button>)
    expect(screen.getByRole('button', { name: 'Send' }).tagName).toBe('BUTTON')
  })
})
