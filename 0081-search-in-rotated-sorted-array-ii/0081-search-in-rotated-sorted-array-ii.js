/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    for (i of nums){
        if(target == i){
            return true
            break
        }
    }
    return false
};