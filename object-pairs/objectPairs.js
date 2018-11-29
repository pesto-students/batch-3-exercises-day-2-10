
function objectPairs(obj) {
  var temp1 = [];
  
  for(var i in obj){
    let temp2 = [];
    temp2.push(i);
    temp2.push(obj[i]);
    temp1.push(temp2);
    
    
  }
  return temp1;
}

export {
  objectPairs,
};
