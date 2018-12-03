
function joinArrays(...args) {
  const MAX = Math.max(args.length);
  const temp = [];
  for (const i of args) { 
    temp.push(i);
  }
  return temp.flat(MAX);
}

export {
  joinArrays,
};
