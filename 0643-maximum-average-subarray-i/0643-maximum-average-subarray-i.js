/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    // if(nums.length == 1) return nums[0]
    // let res = []
    // for(let i=0; i<=nums.length-k; i++){
    //     let subArr = nums.slice(i, i+k)
    //     console.log()
    //     let sum = subArr.reduce((acc,cur) => acc+cur, 0)

    //     res.push(sum)

    // }
    // console.log(res)
    // return Math.max(...res)/k
    let tempSum = 0;
    let flagSum = 0;
    for(let i=0; i<k; i++){
        tempSum += nums[i]
    }
    flagSum = tempSum
    for(let j=k; j<nums.length; j++){
        tempSum = tempSum + nums[j] - nums[j-k]
        // console.log(tempSum)
        flagSum = Math.max(flagSum, tempSum)
    }
    return flagSum/k
    // let ans =  Math.max(tempSum,flagSum)
    // return ans/k

}