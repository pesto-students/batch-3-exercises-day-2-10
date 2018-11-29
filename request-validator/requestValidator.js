
function requestValidator(request) {
  
  if(request.method!=="GET"){
    throw new Error('Invalid request header: Invalid Method');
  }
  else if(!request.message){
    throw new Error('Invalid request header: Invalid Message');
  }
  console.log("request is "+request);
  return request;
}


export {
  requestValidator,
};
