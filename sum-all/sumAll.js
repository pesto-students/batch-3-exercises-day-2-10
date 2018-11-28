function sumAll(arr) {
    if (arr[0] == arr[1]) return arr[0];

    var start, end;

    if (arr[0] > arr[1]) {
        start = arr[0];
        end = arr[1];
    } else {
        start = arr[1];
        end = arr[0];
    }

    var sum = start + end;

    for (var i = start + 1; i < end; i++) {
        sum = sum + i;
    }

    return sum;
}

export { sumAll };
