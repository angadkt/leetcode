// let x = -123;
// let res = x.toString().split("");
// if(res[0] === "-"){
//     res.shift();
//     res = res.reverse();
//     // res.unshift("-");
//     res = res.join("");
//     res = "-" + res;
// }
// console.log(parseInt(res));


var reverse = function(x) {
    let res = x.toString().split("");
    if(res[0] === "-"){
        res = res.shift();
        res =res.reverse().join("");
        // res = res.unshift("-");
        // res = res.split("").join("");
        res = "-" + res;
    }else{
        res = res.reverse().join("");
    }

     res = parseInt(res);

    if(res < Math.pow(-2,31) || res > Math.pow(2,31)){
        return 0;
    }
    return res;
};

console.log(reverse(-123));

