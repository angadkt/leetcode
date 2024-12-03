/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let res = [...nums1, ...nums2]
    res = res.sort((a,b)=> a-b)
    let index = 0
    let result = 0
    let l = res.length
    if(l % 2 != 0){
        index = Math.ceil(l/2)-1
        result = res[index]
        return parseFloat(result)
    }else{
        index = Math.floor(l/2)-1
        result = (res[index] + res[index+1])/2
        return parseFloat(result)
    }
};