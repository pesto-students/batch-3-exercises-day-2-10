
function timeout(args) {
  return new Promise((resolve) => {
    resolve('Hello Pesto');
  });
}

export {
  timeout,
};
