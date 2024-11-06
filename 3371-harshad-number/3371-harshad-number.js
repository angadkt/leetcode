/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let arr = x.toString().split("")
    let sum = arr.map(Number).reduce((acc,cur) => acc  + cur , 0)
    if(x%sum != 0){
        return -1
    }else{
        return sum
    }
};