/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let count = 0
    let res = 0
    let set = new Set(nums)
    console.log(set)
    for (let item of set){
        let numCount = 0
        for(j=0; j<nums.length; j++){
            if(item === nums[j]){
                numCount++
            }
        }
        if(numCount > count){
            res = numCount
            count = numCount
        }else if(numCount == count){
            res = res + numCount
        }
    }
    return res
};