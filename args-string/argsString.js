function argsString(arg1, arg2) {
  const bracesCount = (arg1.match(/{}/g) || []).length;
  let str = arg1;
  let i = 0;
  while (i < bracesCount) {
    str = str.replace('{}', arg2[i]);
    i += 1;
  }
  return str;
}

export { argsString };
