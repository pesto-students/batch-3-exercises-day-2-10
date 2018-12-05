function negativeIndex(obj) {
  if (!Array.isArray(obj)) throw new TypeError('Only arrays are supported');
  let nindex;
  const myProxy = new Proxy(obj, {
    get(tobj, index) {
      if (index < 0) nindex = obj.length + index;
      return obj[nindex];
    },
  });
  return myProxy;
}

export { negativeIndex };
