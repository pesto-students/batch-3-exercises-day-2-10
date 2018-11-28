
function largeOfFour(a) {
  var b = [];
 for(var i of a ){
   i.sort(function(a, b){return a - b});
   b.push(i[3])
 }
 return b;
}

export {
  largeOfFour,
};
