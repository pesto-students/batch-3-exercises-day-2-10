function smallestCommons(...arr) {
    var max = Math.max(...arr);
    var min = Math.min(...arr);

    var temp = 0;
    var result = max * min;

    while (temp === 0) {
        for (var i = min; i <= max; i++) {
            if (result % i !== 0) {
                result += max;
                temp = 0;
                break;
            } else {
                temp = 1;
            }
        }
    }

    return args;
}

export { smallestCommons };
