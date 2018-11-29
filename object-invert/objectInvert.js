function objectInvert(obj) {
    return Object.assign(
        {},
        ...Object.entries(obj).map(([a, b]) => ({ [b]: a }))
    );
}

export { objectInvert };
