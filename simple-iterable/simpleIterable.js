
function simpleIterable() {
  return {
    [Symbol.iterator]() {
      let val = 0;
      const iterator = {
        next() {
          val += 1;
          if (val > 5) {
            return { value: undefined, done: true };
          }
          return { value: val, done: false };
        },
      };
      return iterator;
    },
  };
}

export {
  simpleIterable,
};
