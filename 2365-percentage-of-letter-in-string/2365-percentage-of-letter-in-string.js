/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    const len = s.length
    let count = 0
    for(char of s){
        if(char == letter){
            count++
        }
    }
    const percentage = count / len * 100
    return Math.floor(percentage)
};