
function getIndexToIns(arr, num) {
  var counter;
  arr.sort((a, b) => a - b);
  for(var i = 0;i<arr.length;i++){
    if(num - arr[i] <= 0)
    return i;
  }
  return arr.length;
}

export {
  getIndexToIns,
};
