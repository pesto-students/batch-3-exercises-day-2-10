function printFullName(args) {
  const { first: firstName, last: lastName } = args;

  return `My name is ${firstName} ${lastName}`;
}

export { printFullName };
