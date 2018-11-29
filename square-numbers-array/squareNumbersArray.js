
function squareNumbersArray(...args) {
  args.forEach(element => {
    if(typeof(element) != 'number')
    throw new Error('My custom error');
  });
  return args;
}

export {
  squareNumbersArray,
};
