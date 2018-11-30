

// function accountDataset(...args) {
//   return args;
// }

function hundredThousandairs(...arg){
  const dataset = require('./dataset.json');
  var data = dataset['bankBalances'];
  var arr = [];
 
  data.forEach(element => {
    
    if(element['amount']>100000){
      var state = element['state']; 
      arr[state] = element['amount'];
    }
  });
  return(arr);
}

hundredThousandairs();

// export {
//   accountDataset,
//   hundredThousandairs,
// };


// {
//   "bankBalances" : [
//     {
//       "amount": "822370.71",
//       "state": "ME"
//     },
