/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function (s, spaces) {
    let spaceIndex = 0
    let res = ""
    for(let i=0; i<s.length; i++){
        if(i == spaces[spaceIndex]){
            res += " " + s[i]
            spaceIndex++
        }else{
            res += s[i]
        }
    }
    return res
};