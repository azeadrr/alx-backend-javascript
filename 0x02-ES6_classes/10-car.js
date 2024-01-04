export default class Car {
  constructor(brand, motor, color) {
    this._motor = motor;
    this._brand = brand;
    this._color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    return new this.constructor[Symbol.species]();
  }
}
