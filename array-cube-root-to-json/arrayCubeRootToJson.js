
function arrayCubeRootToJson(a) {
  let obj = {};
  for (let i of a) {
    let cuberoot = Math.cbrt(i);
    if (isNaN(cuberoot)||i===null) {
      throw new Error('');
    }
    obj[i] = Math.cbrt(i);
  }
  return obj;
}

export {
  arrayCubeRootToJson,
};
