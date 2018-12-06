function hammingDistance(val1, val2) {
  if (val1.length !== val2.length) throw new Error();
  const args = val1.split('').reduce((acc, value, ind) => {
    if (value !== val2[ind]) return acc + 1;
    return acc;
  }, 0);
  return args;
}

export { hammingDistance };
