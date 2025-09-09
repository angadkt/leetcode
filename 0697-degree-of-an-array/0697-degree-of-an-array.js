/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
    let map = new Map()
    let maxFreeq = - Infinity
    let firstIndexMap = new Map()
    let lastIndexMap = new Map()
    for (let i = 0; i < nums.length; i++) {
        let x = nums[i]
        map.has(x) ? map.set(x, map.get(x) + 1) : map.set(x, 1)

        if (!firstIndexMap.has(x)) {
            firstIndexMap.set(x, i)
        }
        lastIndexMap.set(x, i)
    }
    for (let [key, value] of map) {
        value > maxFreeq ? maxFreeq = value : null
    }
    let minLength = Infinity
    for(let [key, value] of map){
        if(value == maxFreeq){
            let length = lastIndexMap.get(key) - firstIndexMap.get(key) + 1
            if(length < minLength){
                minLength = length
            }
        }
    }
    return minLength
};