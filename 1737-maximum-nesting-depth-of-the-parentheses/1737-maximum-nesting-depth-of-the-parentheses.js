/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let count = 0
    let arr = []
 for(let i=0; i<s.length; i++){
    if(s[i] == "("){
        arr.push(s[i])
        if(count < arr.length) count = arr.length
    }else if (s[i] == ")"){
        arr.pop()
    }

 }
 return count
};