
function tripleAndFilter(a) {
  const b = a.map(elem => elem * 3).filter(elem => elem % 5 === 0);
  return b;
}

export {
  tripleAndFilter,
};
