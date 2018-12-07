
function deepCopyObject(obj) {
  const newobj = JSON.parse(JSON.stringify(obj));
  return newobj;
}

export {
  deepCopyObject,
};
