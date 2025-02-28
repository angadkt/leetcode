/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    for(let i=0; i<nums.length; i++){
        if(nums[i] === nums[i+1]){
            nums[i] = nums[i]*2
            nums[i+1] = 0
        }
    }
    return nums.sort((a,b)=> a==0?1:b==0?-1:0)
};