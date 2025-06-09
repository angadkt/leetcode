/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let res = []
    let n = nums.length
    let set = new Set(nums)
    for(let i=1; i<=n; i++){
        if(!set.has(i)){
            res.push(i)
        }
    }
    return res
};