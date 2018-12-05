function knownProp(obj) {
  const handler = {
    get(target, key) {
      if (key in target) return target[key];
      throw new TypeError('Unknown Property');
    },
  };

  const proxy = new Proxy(obj, handler);
  return proxy;
}

export { knownProp };
