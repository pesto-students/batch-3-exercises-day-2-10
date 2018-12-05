function knownProp(obj) {
  const myProxy = new Proxy(obj, {
    get(tobj, key) {
      if ({}.hasOwnProperty.call(tobj, key)) return tobj[key];
      throw new TypeError('Unknown Property');
    },
  });
  return myProxy;
}

export { knownProp };
