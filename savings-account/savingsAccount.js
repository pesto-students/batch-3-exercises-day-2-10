
function savingsAccount(a,b,c,d) {
  var hasNumber = /\d/;

  if(a.length!==6){
    throw new Error('Account Number must be a 6-digit number')
  }
  else if(c.length<3||c.length>20){
    throw new Error('First name must be between 3 and 20 characters long')
  }
  else if(hasNumber.test(d)){
    throw new Error('Last name must contain english alphabets only') 
  }
  else if(!b.includes('@')||!b.includes('.'))
  {
    throw new Error('Invalid e-mail') 
  }
  return {
    _accountNumber: a,
    _email: b,
    _firstName: c,
    _lastName: d,
    products: [],
  }
}

export {
  savingsAccount,
};
