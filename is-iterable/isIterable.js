function isIterable(args) {
  if (typeof args[Symbol.iterator] === 'function') return true;
  return false;
}

export { isIterable };
