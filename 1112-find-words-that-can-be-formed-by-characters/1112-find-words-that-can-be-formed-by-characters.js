/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
    let res = 0
    let charMap = new Map()
    for (let x of chars) {
        charMap.has(x) ? charMap.set(x, charMap.get(x) + 1) : charMap.set(x, 1)
    }
    for (let a of words) {
        let wordMap = new Map()
        let flag = true
        for (let i of a) {
            wordMap.has(i) ? wordMap.set(i, wordMap.get(i) + 1) : wordMap.set(i, 1)
        }
        for(let [key , value] of wordMap){
            if(!charMap.has(key) || charMap.get(key) < value){
                flag = false
                break
            }
        }
        if(flag){
            res += a.length
        }
    }

    return res
};