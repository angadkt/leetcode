/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    let count =0
    let nmbr = Math.min(a,b)
    for(let i=0; i<=nmbr; i++ ){
        if(a%i === 0 && b%i === 0){
            count ++
        }
    }
    return count
};