/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let arr = grid.flat().sort((a,b)=> a-b)
    let unique = new Set()
    let a = []
    for(let num of arr){
        if(unique.has(num)){
            a.push(num)
        }else{
            unique.add(num)
        }
    }
    let b = [...unique]
    console.log(b)
    if(b[0] != 1) {
        a.push(1)
    }else{
        for(let i = 0 ; i <b.length ; i ++){
        if(b[i]+1 !== b[i+1]){
            a.push(b[i]+1)
            break
        }
    }

    }
    
    
    return a
};