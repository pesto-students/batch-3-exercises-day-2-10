
function chunkArrayInGroups(arr,num) {
  var arr2 = [];
  
  for(var i=0;;i++){
    if(i+num <= arr.length)
      arr2[i] = arr.splice(0,num);
    else{
      arr2[i] = arr.splice(0);
      break;
    }
      
  }

  return arr2;  
}

export {
  chunkArrayInGroups,
};
