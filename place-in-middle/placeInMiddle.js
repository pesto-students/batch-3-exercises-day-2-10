function placeInMiddle(args, inMiddle) {
  const arrFirstHalf = args.splice(0, args.length / 2);
  const combined = [...arrFirstHalf, ...inMiddle, ...args];
  return combined;
}

export { placeInMiddle };
