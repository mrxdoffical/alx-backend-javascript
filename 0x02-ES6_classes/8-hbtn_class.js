// 8-hbtn_class.js
export default class HolbertonClass {
  constructor(size, location) {
    this._size = size; // Initialize the _size attribute
    this._location = location; // Initialize the _location attribute
  }

  // When the class is cast to a Number, return the size
  valueOf() {
    return this._size;
  }

  // When the class is cast to a String, return the location
  toString() {
    return this._location;
  }
}
