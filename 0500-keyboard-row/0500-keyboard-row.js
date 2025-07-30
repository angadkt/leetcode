/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let rowMap = new Map()
    for(let i of "qwertyuiop"){
        rowMap.set(i,1)
    }
    for(let i of "asdfghjkl"){
        rowMap.set(i,2)
    }
    for(let i of "zxcvbnm"){
        rowMap.set(i,3)
    }
    const res = []
    for(let i of words){
        let lw = i.toLowerCase()
        let row = rowMap.get(lw[0])
        console.log(row)
        if([...lw].every((c)=> rowMap.get(c)== row)){
            res.push(i)
        }
    }
    return res
};