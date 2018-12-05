
function searchSortedMatrix(obj) {
  let bool = false;
  const { search, matrix } = obj;
  for (const i of matrix) {
    for (const j of i) {
      if (j === search) {
        bool = true;
      }
    }
  }
  return bool;
}

export {
  searchSortedMatrix,
};
