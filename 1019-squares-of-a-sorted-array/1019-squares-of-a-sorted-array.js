/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let res = nums.map((item)=> item*item)
    return res.sort((a,b) => a-b)
};