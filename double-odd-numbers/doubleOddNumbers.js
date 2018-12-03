
function doubleOddNumbers(arr) {
  const oddtemp = [];
  for (const [index, elem] of arr.entries()) {
    if (index % 2 === 0) {
      oddtemp.push(elem * 2);
    }
  }
  return oddtemp;
}

export {
  doubleOddNumbers,
};
