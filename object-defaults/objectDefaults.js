
function objectDefaults(obj , defaultobj) {
  
  for(let i in defaultobj){
    if(!obj.hasOwnProperty(i)){
      obj[i] = defaultobj[i];
    }
  }

  return obj;
}


export {
  objectDefaults,
};
