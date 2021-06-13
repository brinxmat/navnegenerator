import NameGenerator from '../NameGenerator.mjs'

const chai = require('chai')
const expect = chai.expect

describe('Names are generated when input specifies name type', () => {
  it('should return a single first name', () => {
    const firstName = { type: 'first', gender: 'F', double: false }
    const name = new NameGenerator(firstName, null)
    expect(name.name).to.be.a('string')
    expect(name.name).to.match(/^.*\s$/)
  })
  it('should return a double first name', () => {
    const firstName = { type: 'first', gender: 'F', double: true }
    const name = new NameGenerator(firstName, null)
    expect(name.name).to.be.a('string')
    expect(name.name).to.match(/^.*\s.*\s$/)
    expect(name.name).not.to.match(/(\b\S+\b)\s+\b\1\b/)
  })
  it('should return a short name first when the first name is double', () => {
    const firstName = { type: 'first', gender: 'F', double: true }
    const name = new NameGenerator(firstName, null)
    expect(name.name).to.be.a('string')
    const splitName = name.name.split(' ')
    expect(splitName[0].length).to.be.lessThanOrEqual(splitName[1].length)
  })
  it('should return a short name first when the last name is double', () => {
    const lastName = { type: 'last', gender: null, double: true }
    const name = new NameGenerator(null, lastName)
    expect(name.name).to.be.a('string')
    const splitName = name.name.split(' ')
    expect(splitName[0].length).to.be.lessThanOrEqual(splitName[1].length)
  })
  it('should return a single last name', () => {
    const lastName = { type: 'last', gender: null, double: false }
    const name = new NameGenerator(null, lastName)
    expect(name.name).to.be.a('string')
    expect(name.name).to.match(/^.*\s$/)
  })
  it('should return a double last name', () => {
    const lastName = { type: 'last', gender: null, double: true }
    const name = new NameGenerator(null, lastName)
    expect(name.name).to.be.a('string')
    expect(name.name).to.match(/^.*\s.*\s$/)
    expect(name.name).not.to.match(/(\b\S+\b)\s+\b\1\b/)
  })
  it('should return a single last and first name', () => {
    const firstName = { type: 'first', gender: 'F', double: false }
    const lastName = { type: 'last', gender: null, double: false }
    const name = new NameGenerator(firstName, lastName)
    expect(name.name).to.be.a('string')
    expect(name.name).to.match(/^.*\s.*\s$/)
  })
  it('should return a double first and single last name', () => {
    const firstName = { type: 'first', gender: 'F', double: true }
    const lastName = { type: 'last', gender: null, double: false }
    const name = new NameGenerator(firstName, lastName)
    expect(name.name).to.be.a('string')
    expect(name.name).to.match(/^.*\s.*\s.*\s$/)
  })
  it('should return a single first name and double last name', () => {
    const firstName = { type: 'first', gender: 'F', double: false }
    const lastName = { type: 'last', gender: null, double: true }
    const name = new NameGenerator(firstName, lastName)
    expect(name.name).to.be.a('string')
    expect(name.name).to.match(/^.*\s.*\s.*\s$/)
    expect(name.name).not.to.match(/(\b\S+\b)\s+\b\1\b/)
  })
  it('should return a double first name and double last name', () => {
    const firstName = { type: 'first', gender: 'F', double: true }
    const lastName = { type: 'last', gender: null, double: true }
    const name = new NameGenerator(firstName, lastName)
    expect(name.name).to.be.a('string')
    expect(name.name).to.match(/^.*\s.*\s.*\s.*\s$/)
    expect(name.name).not.to.match(/(\b\S+\b)\s+\b\1\b/)
  })
})
