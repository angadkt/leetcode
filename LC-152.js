var maxProduct = function(nums) {
    let res = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        let product = 1;
        for (let j = i; j < nums.length; j++) {
            product *= nums[j];
            res = Math.max(res, product);
        }
        
    }
    return res
};

console.log(maxProduct([2,3,-2,4]));
console.log(maxProduct([2,3,-2,6]));
