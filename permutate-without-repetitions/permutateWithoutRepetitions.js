function permutateWithoutRepetitions(arr) {
  if (arr.length < 2) return [arr];
  const res = [];
  arr.forEach((x, i) => {
    permutateWithoutRepetitions(arr.slice(0, i).concat(arr.slice(i + 1))).forEach((a) => {
      res.push([x].concat(a));
    });
  });
  return res;
}

export { permutateWithoutRepetitions };
