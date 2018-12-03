function doubleOddNumbers(args) {
  // const oddDoubled = args
  //   .map((element) => {
  //     if (element % 2 === 1) return element * 2;
  //     return undefined;
  //   })
  //   .filter((element) => {
  //     return element;
  //   });

  const oddDoubled = [];
  for (const key of args) {
    const currentElement = args[key];
    if (currentElement % 2 === 1) oddDoubled.push(currentElement * 2);
  }

  return oddDoubled;
}

export { doubleOddNumbers };
