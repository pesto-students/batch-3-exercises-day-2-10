function binaryAgent(str) {
    var string = "";
    str.split(" ").map(function(binary) {
        string += String.fromCharCode(parseInt(binary, 2));
    });

    return string;
}

export { binaryAgent };
