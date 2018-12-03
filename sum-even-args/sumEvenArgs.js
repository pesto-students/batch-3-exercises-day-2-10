function sumEvenArgs(...args) {
  let index = 0;
  const sumOfEven = args.reduce((acc, val) => {
    index += 1;
    if (index % 2 === 0) return acc + val;
    return acc + 0;
  }, 0);
  return sumOfEven;
}

export { sumEvenArgs };
