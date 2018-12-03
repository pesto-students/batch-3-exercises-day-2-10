
function sumEvenArgs(...args) {
  const result = args.filter(elem => args.indexOf(elem) % 2 !== 0).reduce((a, b) => a + b, 0);
  return result;
}

export {
  sumEvenArgs,
};
