
function abbreviateString(txt) {
  if(typeof txt != "string")
    throw new Error("Invalid Parameter");
    
  const indexLast = txt.lastIndexOf(" ");
  if(indexLast === -1){
    return txt;
  }

  const indexFirst = txt.indexOf(" ");
  

  var subtxt1 = txt.substring(0,indexFirst+1);
  var subtxt2 = txt[indexLast + 1].toUpperCase()+ '.';

  return subtxt1+subtxt2;


}

export {
  abbreviateString,
};
