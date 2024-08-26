module.exports = function reverse(n) {
    let reverseString = n.toString().split("").reverse().join("");
    return parseInt(reverseString, 10);
};
