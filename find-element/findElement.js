
function findElement(arr ,cb) {
  let result =  cb(...arr);
  console.log("This is Result"+result);
}

export {
  findElement,
};
