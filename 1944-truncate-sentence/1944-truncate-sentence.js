/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let arr = s.split(' ')
    let res = []
    for (let i=0; i<k; i++){
        res.push( arr[i])
    }
    return res.join(" ")
};