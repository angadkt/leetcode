/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let temp = false
    let ransMap = new Map()
    for (let x of ransomNote) {
        ransMap.has(x) ? ransMap.set(x, ransMap.get(x) + 1) : ransMap.set(x, 1)
    }

    let magazMap = new Map()
    for (let x of magazine) {
        magazMap.has(x) ? magazMap.set(x, magazMap.get(x) + 1) : magazMap.set(x, 1)
    }


    for (let [key, value] of ransMap) {
        if (!magazMap.has(key) || magazMap.get(key) < value) {
            return false
        }
    }
    return true
};