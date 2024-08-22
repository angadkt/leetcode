var isPalindrome = function(x) {
    let arr = x.toString();
    let rev = arr.split("").reverse().join("");
    let res ;
    if(arr === rev){
        res = true;
    }else{
        res = false;
    }
    return res;
};  