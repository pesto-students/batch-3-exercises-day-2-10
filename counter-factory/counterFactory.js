var increment =0;
var decrement =0;

function counterFactory() {
  return {
    increment : ()=>increment = increment+1,
    decrement : ()=>decrement = decrement-1
  };
}

export {
  counterFactory,
};
