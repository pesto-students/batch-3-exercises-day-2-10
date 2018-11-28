
function isPalindrome(arrr) {
  arrr = arrr.toLowerCase();
  var arr = new Array();
  for(var i=0;i<arrr.length;i++)
    arr.push(arrr[i])

  for(i =0;;i++){
    if(i>= arr.length)
    break;

    if(arr[i]=== '-' || arr[i]=== '_' || arr[i]=== ' ' || arr[i]=== ',' || arr[i]=== '/'){
      arr.splice(i,1);
    }
  }


  for(i=0;i<=arr.length;i++){
    if(arr[i] != arr[arr.length-i-1])
    return false;
  }

  return true;
  
}

export {
  isPalindrome,
};
