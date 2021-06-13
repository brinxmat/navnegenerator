import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import NameForm from './name-generator/NameForm'

test('renders title', () => {
  render(<App />)
  const name = screen.getByText(/Navnegenerator/i)
  expect(name).toBeInTheDocument()
})

test('render name with initial setup', () => {
  render(<App />)
  const name = screen.getByTestId('generated-name').textContent
  expect(name).toMatch(/^.*\s/)
})

test('Renders form and initial setup is default', () => {
  render(<App />)
  expect(screen.getByTestId('radio-f')).toBeChecked()
  expect(screen.getByTestId('radio-m')).not.toBeChecked()
  expect(screen.getByTestId('first-double')).not.toBeChecked()
  expect(screen.getByTestId('include-last')).toBeInTheDocument()
  expect(screen.getByTestId('submit-button')).toBeInTheDocument()
})

test('Toggling gender toggles gender radios', () => {
  render(<App />)
  const f = screen.getByTestId('radio-f')
  expect(f).toBeChecked()
  const m = screen.getByTestId('radio-m')
  expect(m).not.toBeChecked()
  m.click()
  expect(m).toBeChecked()
  expect(f).not.toBeChecked()
  const originalName = screen.getByTestId('generated-name').textContent
  const submit = screen.getByTestId('submit-button')
  submit.click()
  const newName = screen.getByTestId('generated-name').textContent
  expect(newName).not.toEqual(originalName)
  f.click()
  submit.click()
  const newerName = screen.getByTestId('generated-name').textContent
  expect(newerName).not.toEqual(newName)
})

test('Changes to name gender changes name', () => {
  render(<App />)
  const initialName = screen.getByTestId('generated-name').textContent
  const m = screen.getByTestId('radio-m')
  m.click()
  expect(m).toBeChecked()
  screen.getByTestId('submit-button').click()
  const newName = screen.getByTestId('generated-name').textContent
  expect(initialName).not.toEqual(newName)
})

test('Changes to first double name changes name', () => {
  render(<App />)
  const initialName = screen.getByTestId('generated-name').textContent
  screen.getByTestId('first-double').click()
  screen.getByTestId('submit-button').click()
  const newName = screen.getByTestId('generated-name').textContent
  expect(initialName).not.toEqual(newName)
  expect(newName).toMatch(/^.*\s.*\s$/)
})

test('Adding last name changes name', () => {
  render(<App />)
  const initialName = screen.getByTestId('generated-name').textContent
  screen.getByTestId('include-last').click()
  screen.getByTestId('submit-button').click()
  const newName = screen.getByTestId('generated-name').textContent
  expect(initialName).not.toEqual(newName)
  expect(newName).toMatch(/^.*\s.*\s$/)
})

test('Adding double last name changes name', () => {
  render(<App />)
  const initialName = screen.getByTestId('generated-name').textContent
  screen.getByTestId('include-last').click()
  screen.getByTestId('last-double').click()
  screen.getByTestId('submit-button').click()
  const newName = screen.getByTestId('generated-name').textContent
  expect(initialName).not.toEqual(newName)
  expect(newName).toMatch(/^.*\s.*-.*\s$/)
})

test('Adding double first and last names changes name', () => {
  render(<App />)
  const initialName = screen.getByTestId('generated-name').textContent
  screen.getByTestId('first-double').click()
  screen.getByTestId('include-last').click()
  screen.getByTestId('last-double').click()
  screen.getByTestId('submit-button').click()
  const newName = screen.getByTestId('generated-name').textContent
  expect(initialName).not.toEqual(newName)
  expect(newName).toMatch(/^.*\s.*\s.*-.*\s$/)
})

test('Clicking submit calls function', () => {
  const initialValues = { firstGender: 'F', firstDouble: false, includeLast: false, lastDouble: false }
  const mockFunction = jest.fn()
  render(<NameForm name={initialValues} addName={mockFunction} />)
  screen.getByTestId('submit-button').click()
  expect(mockFunction).toBeCalled()
})
