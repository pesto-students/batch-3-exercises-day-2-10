
function addBigIntegers(a) {
  a = a.toString();
  let b = a.split("\n").map(Number);
  b[0] =0;
  let sum = b.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
  
  return sum.toString();
}

export {
  addBigIntegers,
};
