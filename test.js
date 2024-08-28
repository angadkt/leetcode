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

var longestPalindrome = function(s) {
    let res = "";
    let rev = s.split("").reverse().join("");

    if (s.length <= 2 && s[0] !== s[1]) {
        res += s[0];
    } else if (s[0] == s[1] && s.length <= 2) {
        res = s[0] + s[1];
    } else {
        for (let i = 0; i < s.length; i++) {
            for (let j = i + 1; j <= s.length; j++) {
                let substring = s.slice(i, j);
                let revSubstring = rev.slice(s.length - j, s.length - i);

                if (substring === revSubstring && substring.length > res.length) {
                    res = substring;
                }
            }
        }
    }
    return res;
};

console.log(longestPalindrome("abb")); // Expected output: "bb"
console.log(longestPalindrome("babad"));
console.log(longestPalindrome("ccc"));


//code sample 
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(!s) return '';

    function expand_arround_center(s, left, right){
        while(left >= 0 && right < s.length && s[left] === s[right]){
            left--;
            right++;
        } 
        return right - left - 1;
    }

    var start = 0;
    var end = 0;
    for(var i = 0; i < s.length; i++){
        const odd = expand_arround_center(s, i, i);
        const even = expand_arround_center(s, i, i + 1);
        const maxLen = Math.max(odd, even);

        if(maxLen > end - start){
            start = i - Math.floor((maxLen - 1)/2);
            end = i + Math.floor(maxLen / 2);
        }
    }
    return s.substring(start, end + 1);
};

