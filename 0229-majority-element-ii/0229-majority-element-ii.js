/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let map = new Map()
    let res = []
    for(let x of nums){
        map.has(x)? map.set(x, map.get(x)+1) : map.set(x,1)
    }

    for(let [key , value] of map){
        if(value > nums.length/3){
            res.push(key)
        }
    }
    return res
};