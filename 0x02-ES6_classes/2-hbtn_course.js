export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this._validStr(name);
    this._length = this._validNum(length);
    this._students = this._validArray(students);
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = this._validStr(name);
  }

  get length() {
    return this._length;
  }

  set length(length) {
    this._length = this._validNum(length);
  }

  get students() {
    return this._students;
  }

  set students(students) {
    this._students = this._validArray(students);
  }

  _validStr(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      return (value);
    }
  }

  _validNum(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    } else {
      return (value);
    }
  }

  _validArray(arr) {
    if (!Array.isArray(arr) || arr.some((item) => typeof item !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    return arr;
  }
}
