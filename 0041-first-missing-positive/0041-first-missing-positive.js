/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let res = nums.sort((a,b)=>a-b)
    res = [ ...new Set(res)]
    res = res.filter((item) => item > 0)
    let min = Math.min(...res)
    console.log(min)
    if(min != 1){
        return 1
    }
    for(let i=0; i<res.length; i++){
        if(res[i+1] - res[i] != 1){
            return res[i] + 1
            break;
        }
    }
    
};