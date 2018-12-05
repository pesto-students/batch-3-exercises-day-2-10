function xprod(array1, array2) {
  if (array1.lenght === 0 || array2.length === 0) return [];
  const result = array1.reduce((acc, v) => {
    array2.filter((val) => {
      acc.push([v, val]);
      return true;
    });

    return acc;
  }, []);
  return result;
}

export { xprod };
