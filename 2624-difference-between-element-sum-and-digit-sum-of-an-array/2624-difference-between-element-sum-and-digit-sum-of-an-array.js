/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let elementSum = nums.reduce((acc,cur)=> acc + cur)
    let digitSum = nums.join('').split('').map(Number).reduce((acc , cur)=> acc+ cur)
    return Math.abs(elementSum - digitSum)
};