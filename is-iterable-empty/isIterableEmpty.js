function isIterableEmpty(args) {
  const arr = [];
  for (const val of args) {
    arr.push(val);
  }
  if (arr[0]) return false;
  return true;
}

export { isIterableEmpty };
