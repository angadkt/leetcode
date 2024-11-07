/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    let str = ""
    let res = ""
    
    for(let i=0; i<words.length; i++){
        str = words[i]
        let revStr = str.split("").reverse().join("")
        if(str === revStr){
            res =  str
            break
        }else{
            res =  ""
        }
    }
    return res
};