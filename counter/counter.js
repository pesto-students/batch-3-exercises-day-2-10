var a =0;

function counter() {
  if(arguments.length===0)
  return ()=> a=a+1;

}

export {
  counter,
};
