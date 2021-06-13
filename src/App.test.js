import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders title', () => {
  render(<App />)
  const name = screen.getByText(/Navnegenerator/i)
  expect(name).toBeInTheDocument()
})

test('has selector for first-name only', () => {
  render(<App />)
  const nameOnly = screen.getByText(/Kun fornavn/)
  expect(nameOnly).toBeInTheDocument()
})

test('generates single F name', () => {
  render(<App />)
  const f = screen.getByLabelText('Kvinne')
  expect(f).toBeInTheDocument()
})
