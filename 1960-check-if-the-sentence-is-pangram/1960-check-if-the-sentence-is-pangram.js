/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let str = sentence.toLowerCase()
    let set = new Set()
    if (str.length < 26) return false
    for(let i=0; i<str.length; i++){
        if(!set.has(str[i])){
            set.add(str[i])
        }
    }
    if(set.size != 26){
        return false
    }else{
        return true
    }
};