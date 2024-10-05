// 10-car.js
export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand; // Store brand as _brand
    this._motor = motor; // Store motor as _motor
    this._color = color; // Store color as _color
  }

  // Method to clone the current car instance
  cloneCar() {
    const NewCar = this.constructor[Symbol.species] || this.constructor;
    return new NewCar();
  }
}
