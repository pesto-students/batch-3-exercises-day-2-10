function searchFirstVertical(obj) {
  const { search, matrix } = obj;
  for (let counter = 0; ; counter += 1) {
    if (matrix[counter][0] === search) return { index: counter, found: true };
    if (matrix[counter][0] > search) return { index: counter - 1, found: false };
  }
}
function searchSortedMatrix(obj) {
  const { search, matrix } = obj;
  const { index, found } = searchFirstVertical(obj);
  if (found) return true;
  if (Number.isNaN(index)) return false;
  // search horizontal
  for (let counter = 0; ; counter += 1) {
    if (matrix[index][counter] === search) return true;
    if (Number.isNaN(matrix[index][counter])) break;
  }
  return false;
}

export { searchSortedMatrix };
