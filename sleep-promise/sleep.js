function sleep(arg) {
  return new Promise(((resolve) => {
    setTimeout(() => {
      resolve('test');
    }, arg);
  }));
}

export { sleep };
