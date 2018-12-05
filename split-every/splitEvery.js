function splitEvery(num, arr) {
  if (num <= 0) throw new Error();

  const result = [];
  for (let i = 0; i < arr.length; i += num) {
    result.push(arr.slice(i, i + num));
  }

  return result;
}

export { splitEvery };
