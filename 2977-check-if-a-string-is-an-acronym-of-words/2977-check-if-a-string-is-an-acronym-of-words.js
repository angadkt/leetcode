/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function (words, s) {
    if (s.length !== words.length) {
        return false
    }
    let acronym = words.map((item) => item[0]).join("")
    return acronym === s
};