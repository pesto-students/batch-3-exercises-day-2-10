

function repeatStringNumTimes(a,b) {
  if(a<=0)
  {
    return '';
  }
  else{
    let str = '';
    for(let i=0;i<b;i++){
      
       str = str + a;
    }
    return str;
  }
}

export {
  repeatStringNumTimes,
};
