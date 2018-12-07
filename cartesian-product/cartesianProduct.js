
function cartesianProduct(a, b) {
  if (a.length === 0 || b === null) {
    return null;
  }
  const c = [];
  const res = a.map(i => b.map(j => c.concat(i, j)));
  return res.flat();
}

export {
  cartesianProduct,
};
