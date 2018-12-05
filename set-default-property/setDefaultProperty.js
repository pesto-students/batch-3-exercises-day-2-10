

function setDefaultProperty(target, a) {
  const handler = {
    get(tar, name) {
      if (name in tar) {
        return tar[name];
      }
      return a;
    },
  };
  const p = new Proxy(target, handler);
  return p;
}


export {
  setDefaultProperty,
};
