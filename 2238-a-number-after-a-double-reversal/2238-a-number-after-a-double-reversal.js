/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    if(num == 0)return true
    let checkZero = num.toString().split("")
    let lastDigit = checkZero[checkZero.length- 1]
    console.log(typeof lastDigit)
    if(lastDigit != "0"){
        
        return true
    }
    return false
    // let res = parseInt(num.toString().split("").reverse().join(""))
    // console.log(res)
};