function promiseAllProps(args) {
  return new Promise((resolve) => {
    resolve(Promise.all(args));
  });
}

export { promiseAllProps };
