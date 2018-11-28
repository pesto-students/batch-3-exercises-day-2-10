function applyOperator(...args) {
    if (args.length === 2) return 0;

    var operator = args[0].toString();
    var temp = 0;
    for (var i = 1; i < args.length; i++) {
        temp = temp + operator + args[i].toString();
    }

    return int.parse(eval(temp));
}

export { applyOperator };
