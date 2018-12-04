function simpleIterable() {
  let val = 0;
  const iterable = {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (val > 4) return { value: undefined, done: true };
      val += 1;
      return { value: val, done: false };
    },
  };
  return iterable;
}

export { simpleIterable };
