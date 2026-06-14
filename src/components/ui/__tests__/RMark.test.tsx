import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { RMark } from '../RMark'

describe('RMark', () => {
  it('renders an svg with the monogram shapes', () => {
    const { container } = render(<RMark />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg?.getAttribute('viewBox')).toBe('21 18 63 63')
    expect(container.querySelectorAll('path').length).toBe(3)
  })
})
