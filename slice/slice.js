function slice(frstIndex, lstIndex, arr) {
  return arr.slice(frstIndex, lstIndex);
  // let firstIndex = frstIndex;
  // let lastIndex = lstIndex;
  // const arrLength = arr.length;
  // if (frstIndex < 0) firstIndex = frstIndex + arrLength;
  // if (lstIndex < 0) lastIndex = lstIndex + arrLength;
  // // return [firstIndex, lastIndex];
  // return arr.slice(firstIndex, lastIndex);
}

export { slice };
