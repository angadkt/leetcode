var reduce = function(nums, fn, init) {
    let res;
    if(nums.length === 0){
        return init
    }else{
        let value = init;
        for (i=0; i<nums.length; i++){
           value = fn(value,nums[i]); //fn is a predifined function in the given qstn.
        }
        return value;
    }
};

console.log(reduce([1,2,3]));
