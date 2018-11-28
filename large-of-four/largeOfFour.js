
function largeOfFour(...args) {

  var arr = new Array();
  args.forEach(element => {
    var largest=element[0];
    var len = element.length;
    for(var i =1;i<length;i++){
      if(element[i]>largest)
      largest = element[i];
    }
    arr.push(largest);
  });
  return arr;
}

export {
  largeOfFour,
};
