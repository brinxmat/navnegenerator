import { firstNamesF, firstNamesM, lastNames } from './Constants.js'

function getSource (type, gender) {
  if (type === 'last') {
    return lastNames
  } else if (gender === 'F') {
    return firstNamesF
  } else {
    return firstNamesM
  }
}

function getRandom (length) {
  const min = Math.ceil(0)
  const max = Math.floor(length)
  return Math.floor(Math.random() * (max - min) + min)
}

function getName (source, double) {
  const firstName = source[getRandom(source.length)] + ' '
  let secondName = ''

  if (double) {
    while (secondName === '' || secondName === firstName) {
      secondName = source[getRandom(source.length)] + ' '
    }
  }
  return firstName.length <= secondName.length ? firstName + secondName : secondName + firstName
}

function generateName (name) {
  const source = getSource(name.type, name.gender)
  return getName(source, name.double)
}

class NameGenerator {
  constructor (first, last) {
    this._first = first != null ? generateName(first) : ''
    this._last = last != null ? generateName(last) : ''
  }

  get first () {
    return this._first
  }

  get last () {
    return this._last
  }

  get name () {
    return this._first + this._last
  }
}

export default NameGenerator