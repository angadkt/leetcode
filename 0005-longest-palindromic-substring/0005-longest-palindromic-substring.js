/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let res = "";
    let rev = s.split("").reverse().join("");
    if (s.length <= 2 && s[0]!==s[1]) {
        res += s[0];
    }else if(s[0] == s[1]  && s.length <= 2){
        res = s[0] + s[1];
    }else {
        for (let i = 0; i < s.length; i++) {
            // (rev[i] === s[i]) ? res += s[i] : res;
            for(let j=i+1; j<=s.length; j++){
                let substring = s.slice(i,j);
                let revsubstring = rev.slice(s.length-j,s.length-i);
                if(substring === revsubstring && substring.length > res.length){
                    res = substring;
                }
            }
        }
    }
    return res;
};