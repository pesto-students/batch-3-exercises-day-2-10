function simpleIterable(first, last) {
  let val = first - 1;
  const iterable = {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (val > last - 1) return { value: undefined, done: true };
      val += 1;
      return { value: val, done: false };
    },
  };
  return iterable;
}

function rangeIter(...args) {
  if (!args[0]) throw new TypeError('undefined is not a number');
  if (!args[1]) throw new TypeError('undefined is not a number');
  if (typeof args[1] !== 'number') throw new TypeError('a is not a number');

  if (args[1] < args[0]) return [];

  const arr = [];
  for (const val of simpleIterable(...args)) {
    arr.push(val);
  }
  return arr;
}

export { rangeIter };
