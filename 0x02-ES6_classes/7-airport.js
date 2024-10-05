export default class Airport {
  constructor(name, code) {
    this._name = name; // Initialize the _name attribute
    this._code = code; // Initialize the _code attribute
  }

  // Override toString method to return the airport code
  toString() {
    return `[object ${this._code}]`;
  }
}
