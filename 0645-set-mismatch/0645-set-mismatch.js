/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    // console.log(nums.length)
    let map = new Map()
    let res = []
    let sumActual = nums.length * (nums.length + 1)/2
    let sumExpected = 0
    for(let x of nums){
        map.has(x)? map.set(x, map.get(x) + 1) : map.set(x, 1)
        sumExpected+=x
    }
    for(let [key, value] of map){
        if(value > 1){
            res.push(key)
        }
    } 

    res.push(res[0]+(sumActual - sumExpected))
    return res
};