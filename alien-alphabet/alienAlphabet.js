
function alienAlphabet(arr) {
  let temp =[];
  // const result = arr.filter(function(elem){
  //   return elem.length=1;
  // });
  arr.forEach(element => {
    
       let b = element.slice(0,1);
       if(temp.indexOf(b)===-1)
       temp.push(b)
   
  });
  return temp;
  
}

export {
  alienAlphabet,
};
