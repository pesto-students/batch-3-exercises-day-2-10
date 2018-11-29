
function objectDefaults(...arg) {
  if(arg.length === 1)
  return arg[0];

  var key;
  arg.forEach(element => {
    for(key in element){
      if(!arg[0][key])
        arg[0][key] = element[key];
    }
  });
  return arg[0];
}

export {
  objectDefaults,
};
