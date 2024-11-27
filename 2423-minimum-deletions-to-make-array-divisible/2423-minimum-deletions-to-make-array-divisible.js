/**
 * @param {number[]} nums
 * @param {number[]} numsDivide
 * @return {number}
 */
var minOperations = function(nums, numsDivide) {
    let count = 0;
    let flag = 0
    let arr = nums.sort((a,b)=>a-b)
    let setnum = [...new Set(arr)]
    let setnumDiv = [...new Set(numsDivide)]



    
    for(let i=0; i<setnum.length; i++){
        let fltarr = setnumDiv.filter((item)=> item % setnum[i] == 0 )
        if(fltarr.length == setnumDiv.length){
            flag = setnum[i]
            break;
        }else if(fltarr.length !== setnumDiv.length){
            count++
        }
    }



    for(let i=0; i<arr.length; i++){
        if(arr[i] == flag){
            console.log(i)
            return i
        }
    }



    return -1
};