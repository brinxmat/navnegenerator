class Name {
  get double () {
    return this._double
  }

  set double (value) {
    this._double = value
  }

  get gender () {
    return this._gender
  }

  set gender (value) {
    this._gender = value
  }

  get type () {
    return this._type
  }

  set type (value) {
    this._type = value
  }

  constructor (type, gender, double) {
    this._type = type
    this._gender = gender
    this._double = double
  }
}

export default Name
