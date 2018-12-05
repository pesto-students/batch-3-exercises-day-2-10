
function knownProp(target) {
  const handler = {
    get(tar, name) {
      if (name in tar) {
        return tar[name];
      }
      throw new TypeError('Unknown Property');
    },
  };
  const p = new Proxy(target, handler);
  return p;
}
export {
  knownProp,
};
