
class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  addDobDigits() {
    const numbers = this.dateOfBirth.split('').map(Number).filter(e => isNaN(e) === false);
    return numbers.reduce((a, b) => a + b, 0);
  }
}

export {
  Person,
};
