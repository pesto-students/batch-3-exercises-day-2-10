
function arrayAddition(a, b) {
  const obj = a.length > b.length ? a : b;
  const length = a.length > b.length ? b.length : a.length;
  const c = obj.splice(length);
  const arr = [];
  if (a.length === 0 || b.length === 0) {
    throw new Error('');
  }
  for (let [i, e] of Object.entries(obj)) {
    if (isNaN(a[i])||isNaN(b[i])) {
      throw new Error('');
    }
    
    arr.push(a[i] + b[i]);
  }
  return arr.concat(c);
}

export {
  arrayAddition,
};
