
function bouncer(arr) {
  var arr2 = new Array();
  for(var i=0;i<arr.length;i++){
    if(arr[i] != '' && arr[i] != undefined && arr[i] != false && arr[i] != null && arr[i] != 0 ){
      if(isNaN(arr[i]) && typeof(arr[i])==='number'){
        continue;
      }
      arr2.push(arr[i]);
    }
  }
  return arr2;
}

export {
  bouncer,
};
