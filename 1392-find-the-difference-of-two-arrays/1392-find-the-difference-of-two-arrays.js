/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)
    let res1 = [...set1].filter((i)=> !set2.has(i))
    let res2 = [...set2].filter((i) => !set1.has(i))
    return [res1, res2]
};