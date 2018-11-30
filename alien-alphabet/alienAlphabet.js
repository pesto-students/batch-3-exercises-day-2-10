
function alienAlphabet(arr) {
  var arr3 = [];

  arr.forEach(element => {
  
    element.toLowerCase();
    
    if(element.length === 1){
      arr3.push(element[0]);
    }
    else{

      for(var i =1;i<element.length;i++){
        if(element[i]<=element[i-1]){
          arr3.push(element[i-1]);
          break;
        }
      }
  }
    


  });

  return arr3;

}

export {
  alienAlphabet,
};
