function isIterable(a) {
  if (typeof a[Symbol.iterator] === 'function') {
    return true;
  }
  return false;
}
export {
  isIterable,
};
