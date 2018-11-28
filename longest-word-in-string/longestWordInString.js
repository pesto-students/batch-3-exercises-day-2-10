
function longestWordInString(a) {
  var b = a.split(" ");
  var c = b.sort();
  return b[0].length
}

export {
  longestWordInString,
};
