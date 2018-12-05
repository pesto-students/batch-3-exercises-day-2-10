
function without(a, b) {
  if (a !== b) {
    const arr = b.filter(e => a.indexOf(e) === -1);
    return arr;
  }
  return 0;
}

export {
  without,
};
