module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw Error;
    } else if (arr.length == 0) {
        return [];
    }
};
