
function counterFactory() {
  return {
    increment:function(){
      let a =1;
      return a++
    },
    decrement:function(){
      let a  = -1 ;
      return --a
    }
  }
}

export {
  counterFactory,
};
