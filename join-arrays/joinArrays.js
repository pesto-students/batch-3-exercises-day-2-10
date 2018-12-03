const joinedArray = [];
function joinArrays(...args) {
  for (const element of args) {
    if (!Array.isArray(element)) joinedArray.push(element);
    else joinArrays(element);
  }
  return joinedArray;
}

export { joinArrays };
