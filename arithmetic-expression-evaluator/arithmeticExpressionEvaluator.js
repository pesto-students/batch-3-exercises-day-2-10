function arithmeticExpressionEvaluator(args) {
  const regex = /[().^]/g;
  if (args.match(regex)) throw new Error();
  if (typeof args !== 'string') throw new Error();
  // eslint-disable-next-line no-eval
  return eval(args);
}

export { arithmeticExpressionEvaluator };
