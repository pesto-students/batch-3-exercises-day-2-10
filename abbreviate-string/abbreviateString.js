function abbreviateString(str) {
    let splittedString = str.split(" ");
    let firstWord = splittedString[0];
    let lastWord = splittedString[splittedString.length - 1][0].toUpperCase();

    return `${firstWord} ${lastWord}.`;
}

export { abbreviateString };
