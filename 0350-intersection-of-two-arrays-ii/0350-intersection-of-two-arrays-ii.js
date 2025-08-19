/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let map = new Map()
    let arr = []
    for(let i=0; i<nums1.length;i++){
        if(map.has(nums1[i])){
            map.set(nums1[i], map.get(nums1[i]) + 1)
        }else{
            map.set(nums1[i], 1)
        }
    }
    
    for(let x of nums2){
        if(map.get(x) > 0){
            arr.push(x)
            map.set(x, map.get(x) -1)
        }
    }
    return arr
};