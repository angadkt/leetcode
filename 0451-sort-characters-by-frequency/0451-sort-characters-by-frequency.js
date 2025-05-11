/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let count = {}
    let flag  = ""
    let temp = 0
    let maxVal = 0
    for(let char of s){
        count[char] = (count[char] || 0) + 1
    }
   const sortedEntries = Object.entries(count).sort((a, b) => b[1] - a[1]);

let result = "";
for (const [char, freq] of sortedEntries) {
    result += char.repeat(freq);
}

return result
};