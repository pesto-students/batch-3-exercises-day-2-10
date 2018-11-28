
function longestWordInString(a) {
  var b = a.split(" ");
  var c = b.sort();
  return c[0].length
}

export {
  longestWordInString,
};
