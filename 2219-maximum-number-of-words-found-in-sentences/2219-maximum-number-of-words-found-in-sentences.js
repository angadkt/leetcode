/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let newArr = ""
    let resArr = []
    for(let i=0; i<sentences.length; i++){
        newArr = sentences[i]
        newArr = newArr.split(' ')
        resArr.push(newArr.length)
    }
    return Math.max(...resArr)
};