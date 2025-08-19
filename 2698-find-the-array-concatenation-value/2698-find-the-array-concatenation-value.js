/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {
    let sum = 0
    let left = 0
    let right = nums.length-1
    while(left < right){
        let concate  = Number(String(nums[left]) + String(nums[right]))
        sum += concate
        left++
        right--
    }

    if(left == right){
        sum += nums[left]
    }
    return sum
};