
function objectKeys(obj) {
  var temp = [];

  for(var i in obj){
      temp.push(i)
  }
  return temp;
}

export {
  objectKeys,
};
