import Car from './10-car';

export default class EVCar extends Car {
  constructor(motor, brand, color, range) {
    super(motor, brand, color);
    this._range = range;
  }

  static get [Symbol.species]() {
    return Car;
  }
}
