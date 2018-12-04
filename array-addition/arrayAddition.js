function arrayAddition(arr1, arr2) {
  if (arr1.length === 0 || arr2.length === 0) throw new Error();

  if (arr1.constructor !== Array || arr2.constructor !== Array) throw new Error();

  let newArr1 = arr1;
  let newArr2 = arr2;

  if (newArr2.length > newArr1.length) {
    newArr2 = arr1;
    newArr1 = arr2;
  }

  return newArr1.map((num, i) => {
    if (typeof num === 'string' || typeof arr2[1] === 'string') throw new Error();
    return (0 || num) + (newArr2[i] || 0);
  });
}

export { arrayAddition };
