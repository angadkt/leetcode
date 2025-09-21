/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let x = []
    let y = []
    let res = []
    for(let i=0; i<=n; i++){
        x.push(nums[i])
    }
     for(let j=n; j<nums.length; j++){
        y.push(nums[j])
    }

    for(let k=0; k<n; k++){
        res.push(x[k], y[k])
    }

    return res
};