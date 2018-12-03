
function printFullName(obj) {
  const { first } = obj;
  const { last } = obj;
  return `My name is ${first} ${last}`;
}

export {
  printFullName,
};
