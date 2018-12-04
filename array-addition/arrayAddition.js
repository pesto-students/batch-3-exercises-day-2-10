function arrayAddition(array1, array2) {
  if (array1.length === 0 || array2.length === 0) throw new Error();

  let arr1 = array1;
  let arr2 = array2;

  if (arr2.length > arr1.length) {
    arr2 = array1;
    arr1 = array2;
  }
  const sum = arr1.map((value, index) => {
    if (typeof value === 'string' || typeof arr2[index] === 'string') throw new Error();
    return (value || 0) + (arr2[index] || 0);
  });

  return sum;
}

export { arrayAddition };
