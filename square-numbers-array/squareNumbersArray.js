function squareNumbersArray(arr) {
    arr.forEach(element => {
        if (typeof element !== "number") {
            throw new Error("My custom error");
        }
    });
    return arr;
}

export { squareNumbersArray };
