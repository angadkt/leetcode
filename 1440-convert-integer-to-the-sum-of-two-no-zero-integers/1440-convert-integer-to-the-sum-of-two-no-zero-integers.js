/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    // if(n.toString().includes(0)){
        for(i=1; i<=n/2; i++){
            let res = n-i
            if(!res.toString().includes(0) && !i.toString().includes(0)){
                return [res,i]
            }
        }
    // }
    // let flag = Math.floor(n/2)
    // let value1 = n-flag
    // return [flag, value1]
};