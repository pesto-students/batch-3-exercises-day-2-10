
function findElement(arr,condition) {
  var flag = true;
  var num;
  arr.forEach(element => {
    if(flag){
    if(condition(element)){
      num = element;
      flag = false;
    }
  }
  });
  return num;
}


export {
  findElement,
};



