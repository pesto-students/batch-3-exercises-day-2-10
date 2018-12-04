function simpleIterable() {
  return {
    [Symbol.iterator]() {
      let value = 0;
      const iterator = {
        next() {
          value += 1;
          if (value > 5) return { value: undefined, done: true };
          return { value, done: false };
        },
      };
      return iterator;
    },
  };
}

export { simpleIterable };
