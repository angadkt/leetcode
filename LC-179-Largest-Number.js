var largestNumber = function (nums) {
    for(i=0; i<nums.length; i++){
        for(j=i+1; j<nums.length; j++){
            if(("" + nums[i] + nums[j]) < ("" + nums[j] + nums[i])){
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }
    if(nums[0] == 0){
        return '0';
    }

    return nums.join('');

}