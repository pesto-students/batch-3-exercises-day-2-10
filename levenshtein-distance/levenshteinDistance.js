
function levenshteinDistance(line1, line2) {
  if (line1.length === 0) return line2.length;
  if (line2.length === 0) return line1.length;
  const lengthDiff = line2.length - line1.length;
  const substitutionNeeded = line1.split('').reduce((acc, val, index) => {
    if (val !== line2[index]) {
      return (acc + 1);
    }
    return acc;
  }, 0);
  return (substitutionNeeded + lengthDiff);
}

export {
  levenshteinDistance,
};
