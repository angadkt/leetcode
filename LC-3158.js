var duplicateNumbersXOR = function(nums) {
    let res = [];
    let newSet = new Set();
    for(let i=0; i<nums.length; i++){
        if(newSet.has(nums[i])){
            res.push(nums[i])
        }else{
            newSet.add(nums[i])
        }
    }
    if(res.length === 1){
        return res[0]
    }else{
        return res.reduce((acc, cur)=>(acc^cur), 0)
    }
};

console.log(duplicateNumbersXOR([1,2,1,3]));
console.log(duplicateNumbersXOR([1,2,3]));
console.log(duplicateNumbersXOR([1,2,2,1]));
