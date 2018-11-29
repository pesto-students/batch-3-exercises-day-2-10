
function objectValues(obj) {
  var temp = [];

  for(var i in obj){
      temp.push(obj[i])
  }
  return temp;
}

export {
  objectValues,
};
