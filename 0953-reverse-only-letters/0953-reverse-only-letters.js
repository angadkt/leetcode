/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let alpha = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
    let left = 0
    let right = s.length-1
    let arr = s.split("")
    while(left < right){
        if(!alpha.includes(arr[left])){
            left++
        }else if(!alpha.includes(arr[right])){
            right--
        }else{
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++
            right--
        }
    }
    return arr.join("")
};