// var longestPalindrome = function (s) {
//     let res = "";
//     let rev = s.split("").reverse().join("");
//     if (s.length === 0) return res;
//     if (s.length === 1) return s;

//     if(s.length == 2){
//         return s[0];
//     }else if(s.length == 2 && s[1] == s[0]){
//         return s;

//     }
//         for (let i = 0; i < s.length; i++) {
//             for (let j = i+1; j < rev.length; j++) {
//                 let substring = s.slice(i,j);
//                 let revSubstring = rev.slice(s.length-j, s.length-i);
//                 if(substring === revSubstring && substring.length > revSubstring.length){
//                     res = substring;
//                     break;
//                 }
//             }

//         }
//         return res;
//     };

// console.log(longestPalindrome("babad"));

// var longestPalindrome = function(s) {
//     let res = "";
//     let rev = s.split("").reverse().join("");

//     if (s.length <= 2 && s[0] !== s[1]) {
//         res += s[0];
//     } else if (s[0] == s[1] && s.length <= 2) {
//         res = s[0] + s[1];
//     } else {
//         for (let i = 0; i < s.length; i++) {
//             for (let j = i + 1; j <= s.length; j++) {
//                 let substring = s.slice(i, j);
//                 let revSubstring = rev.slice(s.length - j, s.length - i);

//                 if (substring === revSubstring && substring.length > res.length) {
//                     res = substring;
//                 }
//             }
//         }
//     }
//     return res;
// };

// console.log(longestPalindrome("abb")); // Expected output: "bb"
// console.log(longestPalindrome("babad"));
// console.log(longestPalindrome("ccc"));

// //code sample
// /**
//  * @param {string} s
//  * @return {string}
//  */
// var longestPalindrome = function(s) {
//     if(!s) return '';

//     function expand_arround_center(s, left, right){
//         while(left >= 0 && right < s.length && s[left] === s[right]){
//             left--;
//             right++;
//         }
//         return right - left - 1;
//     }

//     var start = 0;
//     var end = 0;
//     for(var i = 0; i < s.length; i++){
//         const odd = expand_arround_center(s, i, i);
//         const even = expand_arround_center(s, i, i + 1);
//         const maxLen = Math.max(odd, even);

//         if(maxLen > end - start){
//             start = i - Math.floor((maxLen - 1)/2);
//             end = i + Math.floor(maxLen / 2);
//         }
//     }
//     return s.substring(start, end + 1);
// };/

// let word = "abcdefd";
// let wordArr = word.split("");
// let duplicateArr = [...wordArr];

// console.log(duplicateArr);
// console.log(wordArr);
// let ch = "d";

// let index = wordArr.indexOf(ch);
// console.log(index);
// let substr = wordArr.splice(0,index+1).reverse().join("");
// let remainStr = duplicateArr.slice(index);
// console.log(substr);
// console.log(remainArr);

// let c = "";
// let a = "3";
// let b = "30";
// console.log(c+a+b);

// let str = "abc"
// let res = []
// for(let i=0; i<=str.length; i++){
//     for(let j=i+1; j<=str.length; j++){
//         res.push(str.slice(i,j));
//     }
// }
// console.log(res);

// const uniqueSum = (arr) =>{
//     let uniqArr = [ ...new Set(arr)]
//     let sum = uniqArr.reduce((acc, cur)=> (
//         acc + cur
//     ),0)
//     return sum
// }

// console.log(uniqueSum([5, 5, 6, 6, 7, 7]));

// const anagram = (s , t) => {
//     // if(s.includes(t)){
//     //     return true
//     // }else{
//     //     return false
//     // }
//     let sArr = s.split("")
// }
// console.log(anagram("anagram", "nagrama"))

// 



// function anagram(s,t){
//     if(s.length !== t.length) return false

//     return s.split("").sort().join("") === t.split("").sort().join("")
// }

// console.log(anagram("anagram", "nagaram"));
// console.log(anagram("cat", "rat"));


// function operation(str){
//  let value = 0;
//  for(let i=0; i<str.length; i++){
//     if(str[i]=== "i"){
//         value += 1
//     }else if(str[i] === "d"){
//         value -= 1 
//     }else if(str[i] === "s"){
//         value = (value*value)
//     }
//  }
//  return value
// }

// console.log(operation("iiss"));


// function singleNumber(arr){
//     let newArr = [...  new Set(arr)]
//     for(let i=0; i<newArr.length; i++){
//         let count = 0;
//         for (let j=0; j<arr.length; j++){
//             if(newArr[i] == arr[j]){
//                 count++;
//             }
//         }
//         if(count === 1){
//             return newArr[i]
//         }
//     }
// }

// console.log(singleNumber([2, 2, 1]));

// let nums = [3,0,1]
// let res;
// for(let i=0; i<=nums.length; i++){
//     if(!nums.includes(i)){
//         res =  i;
//     }
// }


// console.log(res);



let nums = [0,1,0,1,0,1,99]


// let newSet = new Set()
//     let res = []
//     for(let i=0; i<nums.length; i++){
//         if(newSet.has(nums[i])){
//             res.push(nums[i])
//         }else{
//             newSet.add(nums[i])
//         }

//         for(j=0; j<newSet.size; j++){
//             if(!newSet.has(res[j])){
//                 console.log(newSet[j])
//             }
//         }
//     }

    // console.log(res);
    // console.log();
    
    // console.log(newSet);

    // let count
    // for(let i=0; i<nums.length; i++ ){
    //     count = 0;
    //     if(nums[i]!= -1){
    //         for(let j=1; j<nums.length-1; j++){
    //             if(nums[i] === nums[j]){
    //                 count++
    //                 nums[j] = -1
    //             }
    //         }
    //         if(count === 0){
    //             console.log(nums[i]);
                 
    //         }
    //     }
    // }
