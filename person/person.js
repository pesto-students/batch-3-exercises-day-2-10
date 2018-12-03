class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  addDobDigits() {
    return this.dateOfBirth
      .split('')
      .filter(num => parseInt(num, 10))
      .map(num => parseInt(num, 10))
      .reduce((agg, num) => agg + num);
  }
}

export { Person };
