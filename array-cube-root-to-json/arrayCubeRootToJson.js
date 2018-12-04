function arrayCubeRootToJson(arr) {
  const res = {};
  for (const i of arr) {
    const cubeRoot = Math.cbrt(i);
    if (isNaN(cubeRoot) || i === null) {
      throw new Error();
    }
    res[i] = Math.cbrt(i);
  }
  return res;
}

export { arrayCubeRootToJson };
