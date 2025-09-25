/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let orgSum = 0
    let numsSum = 0
    for(let i=0; i<nums.length; i++){
        numsSum += nums[i]
        orgSum += i + 1
    }
    return orgSum - numsSum
};