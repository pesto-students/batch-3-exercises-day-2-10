
function primalityTest(a) {
  let bool = false;
  if (a === 0 || a === 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(a); i += 1) {
    if (a % i === 0) {
      bool = true;
      break;
    }
  }
  return bool;
}

export {
  primalityTest,
};
