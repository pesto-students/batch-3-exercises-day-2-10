
function numberOfChangesRequired(arr) {
  var hasAlteration = false;
  var num = 0;
  for(var i=0;i<arr.length-1;i++){
    if(arr[i] != arr[i+1]){
      hasAlteration =true;
      i++;
    }
    else if(arr[i] === arr[i+1]){
      num ++;
    }
    if(i === arr.length-2 && hasAlteration){
      if(arr[i]!= arr[i+1])
      num++  ;
    }
  }
  return num;
}

function alternatingCharacters(arr) {
  var arr2 = [];
  arr.forEach(element => {
    arr2.push(numberOfChangesRequired(arr));
  });

  return arr2;
}



export {
  alternatingCharacters,
};
