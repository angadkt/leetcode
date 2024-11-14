/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let res = []
    let set = new Set()
    for(let i=0; i<nums.length; i++){
        if(set.has(nums[i])){
            res.push(nums[i])
        }else{
            set.add(nums[i])
        }
    }
    return res
};