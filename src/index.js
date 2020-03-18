exports.min = function min(array) {
    if (!array || !array.length) return 0;
    return Math.min(...array);
};

exports.max = function max(array) {
    if (!array || !array.length) return 0;
    return Math.max(...array);
};

exports.avg = function avg(array) {
    if (!array || !array.length) return 0;
    let result = 0;
    for (let i of array) {
        result += i;
    }

    result /= array.length;

    return result;
};
