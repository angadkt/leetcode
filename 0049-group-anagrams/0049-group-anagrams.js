/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let obj = {}
    for(const str of strs){
        let sortedstr = str.split("").sort().join("")
        if(!obj[sortedstr]){
            obj[sortedstr] = []
        }
        obj[sortedstr].push(str)
    }
    return Object.values(obj)
}