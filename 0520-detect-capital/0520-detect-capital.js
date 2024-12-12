/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    if(word === word.toUpperCase()){
        return true
    }else if(word === word.toLowerCase()){
        return true
    }
    
    return false
};