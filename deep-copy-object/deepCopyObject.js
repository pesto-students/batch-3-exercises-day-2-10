
function deepCopyObject(args) {
  const newObj = Object.assign({}, args);
  return newObj;
}

export {
  deepCopyObject,
};
