import React from 'react'
import App from './App'
import renderer from 'react-test-renderer'

test('Index renders without crashing', () => {
  expect(() => renderer.create(<App/>)).not.toThrow(Error)
})
