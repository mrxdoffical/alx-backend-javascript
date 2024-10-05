import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color); // Call parent constructor with brand, motor, and color
    this._range = range; // Store range as _range
  }

  // Getter for the range attribute
  get range() {
    return this._range;
  }

  // Override the cloneCar method to return a Car object
  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}
