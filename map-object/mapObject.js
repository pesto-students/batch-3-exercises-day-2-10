
function mapObject(obj,operation) {
  for(var key in obj){
    obj[key] = operation(obj[key]);
  }
  return obj;
}

export {
  mapObject,
};
