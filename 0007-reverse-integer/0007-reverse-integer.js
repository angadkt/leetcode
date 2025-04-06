/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const minInt32 = -Math.pow(2, 31)
    const maxInt32 = Math.pow(2, 31) - 1
 
    let flag = x.toString().split("").filter((item) => item === "-")
    let nmbrs = x.toString().split("").filter((item) => item !== "-").reverse()
    let res = []
    if (flag.length != 0) {
        res = nmbrs.join("")
        res = parseInt(res) *-1
        console.log("res", res)
        if(res<= minInt32 || res>= maxInt32){
        return 0
    }
        return res
    }
    
    let result = parseInt(nmbrs.join(""))
    if(result<= minInt32 || result>= maxInt32){
        return 0
    }
    return result
};