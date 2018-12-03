function isPromise(args) {
  return new Promise((resolve) => {
    resolve(args instanceof Promise);
  });
}

export { isPromise };
