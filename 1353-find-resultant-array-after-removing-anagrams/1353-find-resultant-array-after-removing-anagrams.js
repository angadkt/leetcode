/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    for(let i=1; i<words.length; i++){
        let val1 = words[i-1].split("").sort().join("")
        let val2 = words[i].split("").sort().join("")
        if(val1 === val2){
            words.splice(i,1)
            i--
        }
    }
    return words
};