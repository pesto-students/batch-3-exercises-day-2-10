
function steamrollArray(arr) {
  var str = arr.toString();
  var newstr  = str.replace(/[|]/,'');

  var fstr = newstr.split(",").map(Number);
  return fstr;
  
}

export {
  steamrollArray,
};
