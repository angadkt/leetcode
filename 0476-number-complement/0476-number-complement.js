/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let res = ""
    let binary = num.toString(2)
    for (let i of binary){
        if(i ==1){
            res += 0
        }else{
            res += 1
        }
    }
    return parseInt(res, 2)
};