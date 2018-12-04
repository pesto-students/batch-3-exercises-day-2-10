

function fibonacci() {
  return {
    [Symbol.iterator]() {
      let a = 0;
      let b = 1;
      let f = 1;
      const iterator = {
        next() {
          for (let i = 2; i <= 100; i += 1) {
            f = a + b;
            a = b;
            b = f;
          }
          return { value: f, done: false };
        },
      };
      return iterator;
    },
  };
}
const fibonacciIter = fibonacci();

export {
  fibonacciIter,
};
