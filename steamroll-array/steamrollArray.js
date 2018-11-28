function steamrollArray(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            newArr = newArr.concat(steamrollArray(arr[i]));
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

export { steamrollArray };
