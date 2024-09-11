var checkPerfectNumber = function(num) {
    let sum=0;
    if(num === 0){
        return false;
    }
    let halfNum = num/2;
    for(i=1; i<= halfNum; i++){
        if(num % i == 0){
            sum += i;
        }
    }
    if(sum === num){
        return true
    }else{
        return false
    }
};