/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let arr = nums.sort((a,b) => a-b);
    let length = arr.length
    let small = arr[0]
    let large = arr[length-1]
    if (large % small === 0) return small
    for(let i=1; i<=small/2; i++){
        if(small % i === 0 && large%i === 0){
            res = i
        }
    }
    return res
};