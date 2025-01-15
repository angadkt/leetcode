/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let lft = 0
    let rth = numbers.length - 1
    while (lft < rth) {
        let sum = numbers[lft] + numbers[rth]
        if (sum === target) {
            return [lft + 1, rth + 1]
        } else if (sum < target) {
            lft++
        } else {
            rth--
        }
    }
    return []
};