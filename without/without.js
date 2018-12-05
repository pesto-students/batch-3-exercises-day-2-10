
function without(a, b) {
  const c = a.toString();
  const d = b.toString();
  const arr = b.filter(e => c.indexOf(e) === -1);
  if (arr.length === 0) {
    return 0;
  }
  return arr;
}

export {
  without,
};
