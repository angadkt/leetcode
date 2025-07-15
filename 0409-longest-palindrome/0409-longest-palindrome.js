/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let freaquencyMap = {}
    let res = 0
    for(ch of s){
        if(ch === " ") continue
        freaquencyMap[ch] =  (freaquencyMap[ch] || 0) +1
    }
    for(count of Object.values(freaquencyMap)){
        res += count%2 == 0 ? count : count -1
    }
    return res < s.length ? res + 1 : res
};