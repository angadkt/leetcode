/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
    if(!s) return 0
    return s===s.split("").reverse().join("") ? 1: 2
};