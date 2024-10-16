var findDuplicate = function(nums) {
    let newSet = new Set()
    for (let i=0; i<nums.length; i++){
        if(newSet.has(nums[i])){
            return nums[i]
        }else{
            newSet.add(nums[i])
        }
    }
};

console.log(findDuplicate([1,3,4,2,2]));
console.log(findDuplicate([3,1,3,4,2]));
console.log(findDuplicate([3,3,3,3,3]));
// console.log(findDuplicate([1,3,4,2,2,4,5,8]));
