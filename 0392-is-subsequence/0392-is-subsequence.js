/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sp = 0
    let tp = 0
    while(sp < s.length && tp<t.length){
        console.log(s[sp], " | ", t[tp])
        if(s[sp]== t[tp]){
            sp++
        }
        tp++
    }
    return sp === s.length
};