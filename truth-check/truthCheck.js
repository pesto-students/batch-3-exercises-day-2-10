
function truthCheck(arr,value) {
  var  bool = true;

  for(var i of arr){
     if(!i.value)
      {bool = false};
      break;

  }
  return bool;
}

export {
  truthCheck,
};
