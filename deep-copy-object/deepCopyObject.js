function deepCopyObject(args) {
  return JSON.parse(JSON.stringify(args));
}

export { deepCopyObject };
