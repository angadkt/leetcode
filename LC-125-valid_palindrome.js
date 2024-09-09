var isPalindrome = function(s) {
    let res = true;
    let newArr = [];
    let newStr = '';
    let revStr = '';
    if(s.trim() == ""){
        res = true;
    }else{
         let lowerStr =  s.toLowerCase().split("");
         for( i=0; i<lowerStr.length; i++){
            if ((lowerStr[i] >= 'a' && lowerStr[i] <= 'z') || (lowerStr[i] >= '0' && lowerStr[i] <= '9')) {
        newArr.push(lowerStr[i]);
    }
         }
         newStr = newArr.join("");
         revStr = newArr.reverse().join("");
         res = newStr === revStr;
    }
    return  res;
    };