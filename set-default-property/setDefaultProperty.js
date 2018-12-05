function setDefaultProperty(obj, dval) {
  const myProxy = new Proxy(obj, {
    get(tobj, key) {
      if ({}.hasOwnProperty.call(tobj, key)) return tobj[key];
      return dval;
    },
  });
  return myProxy;
}
export { setDefaultProperty };
