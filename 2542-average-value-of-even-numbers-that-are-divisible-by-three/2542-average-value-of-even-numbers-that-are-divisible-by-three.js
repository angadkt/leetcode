/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let newArr = nums.filter((item) => item%2 === 0 && item%3 === 0)
    let n = newArr.length
    if(n === 0 ) return 0
    let sum = newArr.reduce((acc , cur) => acc + cur, 0)
    let avg =  Math.floor(sum/n)
    return avg
};