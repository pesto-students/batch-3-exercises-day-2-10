
function rejectPromise(...args) {
  return new Promise((reject) => {
    reject('REJECTED!');
  });
}

export {
  rejectPromise,
};
