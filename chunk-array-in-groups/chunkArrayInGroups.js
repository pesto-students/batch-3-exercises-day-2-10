function chunkArrayInGroups(arr, num) {
    var a = [];

    for (var i = 0; i < arr.length; i++) {
        a.push(arr.splice(0, num));
    }

    return a;
}

export { chunkArrayInGroups };
