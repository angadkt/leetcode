// // let x = -123;
// // let res = x.toString().split("");
// // if(res[0] === "-"){
// //     res.shift();
// //     res = res.reverse();
// //     // res.unshift("-");
// //     res = res.join("");
// //     res = "-" + res;
// // }
// // console.log(parseInt(res));


// var reverse = function(x) {
//     let res = x.toString().split("");
//     if(res[0] === "-"){
//         res = res.shift();
//         res =res.reverse().join("");
//         // res = res.unshift("-");
//         // res = res.split("").join("");
//         res = "-" + res;
//     }else{
//         res = res.reverse().join("");
//     }

//      res = parseInt(res);

//     if(res < Math.pow(-2,31) || res > Math.pow(2,31)){
//         return 0;
//     }
//     return res;
// };

// console.log(reverse(-123));



// let str = "   fly me   to   the moon  ";
// let arr = str.trim().split(" ");
// // console.log(arr[length - 1]);
// console.log(arr);


// let nums = [0,0,1,1,1,1,2,3,3]
// for(let i=0;i<nums.length;i++){
//     if(nums[i] === nums[i+1]){
//         i++;
//     }else{
//         nums.splice(i+1,1);
//         i--;
//     }
//     console.log(nums);
// }

// var divide = function(dividend, divisor) {
//     let quotient = 0;
//     let reminder = 0;
//     while (dividend>divisor){
//         reminder = dividend-divisor;
//         quotient++;
//     }
//     return quotient;
// };
// console.log(divide(15,3));



