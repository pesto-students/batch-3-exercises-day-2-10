function doubleOddNumbers(arr) {
  return arr.filter(num => num % 2 !== 0).map(num => num * 2);
}

export { doubleOddNumbers };
