var addDigits = function(num) {
    if(num < 10){
        return num;
    }else{
        num = [...num.toString()].reduce((a,b)=> a + Number(b),0);
        return addDigits(num);
    }
};

console.log(addDigits(38));
console.log(addDigits(599999999999));
// console.log(addDigits(38));
// console.log(addDigits(38));
// console.log(addDigits(38));
// console.log(addDigits(38));
