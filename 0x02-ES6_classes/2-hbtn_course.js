export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this._validString(name);
    this._length = this._validNumber(length);
    this._students = this._validArray(students);
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = this._validString(name);
  }

  get length() {
    return this._length;
  }

  set length(length) {
    this._length = this._validNumber(length);
  }

  get students() {
    return this._students;
  }

  set students(students) {
    this._students = this._validArray(students);
  }

  // eslint-disable-next-line class-methods-use-this
  _validString(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      return (value);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  _validNumber(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    } else {
      return (value);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  _validArray(arr) {
    if (!Array.isArray(arr) || arr.some((item) => typeof item !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    return arr;
  }
}
