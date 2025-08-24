/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = new Map()
    for(let x of nums){
        map.has(x)? map.set(x, map.get(x)+1) : map.set(x, 1)
    }
    for(let [key, value] of map){
        if(value > nums.length/2){
            return key
        }
    }
};