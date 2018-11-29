
function dropElements(arr,condition) {
  var arr2 =[];
  arr.forEach(element => {
    if(condition(element))
      arr2.push(element);
    
  });
  return arr2;
}

export {
  dropElements,
};
