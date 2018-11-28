function isPalindrome(str) {
    var newString = str
        .toString()
        .toLowerCase()
        .replace(/[\W_]/g, "");

    var reverse = newString
        .split("")
        .reverse()
        .join("");

    return newString == reverse;
}

export { isPalindrome };
