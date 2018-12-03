function sequentialPromise(args) {
  if (args.length === 3) {
    return Promise.resolve(
      args[0]()
        .then(res => args[1](res))
        .then(res => args[2](res))
        .then(res => res),
    );
  }
  return Promise.resolve(
    args[0]()
      .then(res => args[1](res))
      .then(res => res),
  );
}

export { sequentialPromise };
