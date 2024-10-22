/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let arr = n.toString().split('').map(Number)
    let productOfDigits = arr.reduce((acc,cur)=> acc*cur)
    let sumOfDigits = arr.reduce((acc,cur)=> acc+cur)
    return productOfDigits - sumOfDigits
};