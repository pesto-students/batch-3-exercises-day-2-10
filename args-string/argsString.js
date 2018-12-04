function argsString(args, arr) {
  let txt = args;
  const regex = /{}/g;
  const numOfOccurence = (args.match(regex) || []).length;
  for (let counter = 0; counter < numOfOccurence; counter += 1) txt = txt.replace('{}', arr[counter]);
  return txt;
}

export { argsString };
