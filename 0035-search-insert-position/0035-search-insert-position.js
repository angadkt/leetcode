/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let arr = [...nums]
    let res = arr.indexOf(target)
    if(res  === -1){
        arr.push(target)
        arr.sort((a,b)=> a-b)
        return arr.indexOf(target)
    }else{
        return res
    }
    
};