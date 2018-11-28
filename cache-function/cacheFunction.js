
function cacheFunction(func,a) {
  if(arguments.length === 0)
  return ()=>{};

  var b = func(a);
  return b;
}

export {
  cacheFunction,
};
