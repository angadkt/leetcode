/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
    let set = new Set()
    let res = ''
    for (let i = 0; i <s.length; i++) {
        if (set.has(s[i])) {
            res = s[i]
            break
        } else {
            set.add(s[i])
        }
    }
    return res
};