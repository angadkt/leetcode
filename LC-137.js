var singleNumber = function(nums) {
    let count
    for(let i=0; i<nums.length; i++ ){
        count = 0;
        if(nums[i]!= -1){
            for(let j=i+1; j<nums.length; j++){
                if(nums[i] === nums[j]){
                    count++
                    nums[j] = -1
                }
            }
            if(count === 0){
                return nums[i] 
                break;
            }
        }
    }

};

//single number 2 
//medium qstn