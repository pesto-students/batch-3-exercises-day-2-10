function reverseString(str) {
    return str
        .toString()
        .split("")
        .reverse()
        .join("");
}

export { reverseString };
