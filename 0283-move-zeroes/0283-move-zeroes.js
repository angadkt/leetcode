/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    //this method is working
    // let j = 0;
    // for(let i=0; i<nums.length; i++){
    //     if(nums[i] !== 0){
    //         [nums[i], nums[j]] = [nums[j] , nums[i]]
    //         j++
    //     }
    // }
    // return nums


    //i have another method
    return nums.sort((a,b)=> a===0? 1:b===0? -1 : 0 )
};