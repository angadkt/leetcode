/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    const set = new Set(dictionary)
    let arr = sentence.split(" ")
    let res = ""
    for(let x of arr){
        let subString = ""
        let found = false
        for(let i=0 ; i<x.length; i++){
            subString = x.slice(0,i)
            if(set.has(subString)){
                res+= subString + " "
                found = true
                break
            }
        }
        if(!found){
            res+= x + " "
        }
    }
    return res.trim()
};