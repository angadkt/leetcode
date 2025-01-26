/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if(n==1) return true
    const set = new Set()
    while(n!=1){
        if(set.has(n)) return false
        set.add(n)
        let arr = n.toString().split("").map(Number)
        n=arr.reduce((acc, cur)=> acc + cur*cur, 0)
    }
    return n == 1
};