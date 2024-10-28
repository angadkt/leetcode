/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(' ')
    let res = []
    for(let i=0; i<arr.length; i++){
        let str = arr[i].split("").reverse().join('')
        res.push(str)
            
        }
        return res.join(' ')
};