
function objectInvert(obj) {
  let temp = {};
  for(var i in obj){
    temp[obj[i]] = i;
  }
  return temp;
 
}

export {
  objectInvert,
};
