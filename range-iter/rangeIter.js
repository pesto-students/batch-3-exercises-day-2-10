

function rangeIter(a, b) {
  return {
    [Symbol.iterator]() {
      let temp = [];
      const iterator = {
        next() {
          if (Number.isInteger(a) && Number.isInteger(b)) {
            if (b > a) {
              while(b <= a) {
                temp.push[b];
                b += 1;
              }
            }
            return temp;
          } 
        },
      };
      return iterator;
    },
  };
}

export {
  rangeIter,
};
