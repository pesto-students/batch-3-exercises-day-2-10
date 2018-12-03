
function constImmutable() {
  const obj = Object.freeze({
    bar: 1,
  });
  try{
    obj.bar = 2;
  if (obj.bar !== 2) {
    return 'initialPassword';
  }
}
catch()
}

export {
  constImmutable,
};
