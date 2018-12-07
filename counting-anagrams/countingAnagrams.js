function isAnagram(line1, line2) {
  if (line1.length === 1 && line2.length === 1) return false;
  if (line1.length !== line2.length) return false;

  const arrLine1 = line1.split('').sort();
  const arrLine2 = line2.split('').sort();

  for (const [index, val] of arrLine1) {
    if (val !== arrLine2[index]) return false;
  }

  return true;
}

function countingAnagrams(line) {
  const arr = line.split(' ');
  let counter = 0;
  const number = arr.reduce((acc, value) => {
    arr.filter((val) => {
      if (isAnagram(val, value)) {
        counter += 1;
      }
      return false;
    });

    return acc + counter;
  }, 0);
  return (number / 2);
}

export {
  countingAnagrams,
};
