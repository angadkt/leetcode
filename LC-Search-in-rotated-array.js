var search = function(nums, target) {
    let res = nums.indexOf(target);
    return res;
};

console.log(search([4,5,6,7,0,1,2], 0));
console.log(search([4,5,6,7,0,1,2], 3));
console.log(search([1], 0));
