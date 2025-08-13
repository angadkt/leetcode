/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let vowels = "aeiouAEIOU"
    let left = 0
    let rigth = s.length - 1
    let arr = s.split("")
    // IceCreAm
    while (left < rigth) {
        if(!vowels.includes(arr[left])){
            left++
        }else if(!vowels.includes(arr[rigth])){
            rigth--
        }else{
            [arr[left], arr[rigth]] = [arr[rigth], arr[left]]
            left++
            rigth--
        }
    }
        return arr.join("")
}