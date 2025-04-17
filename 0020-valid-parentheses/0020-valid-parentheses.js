/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    // let sortedStrArr = s.split("").sort()
    // console.log(sortedStrArr)
    // for (let i=0; i<sortedStrArr.length ; i++){
    //     if(sortedStrArr[i] == "(" && sortedStrArr[i+1] != ")"){
    //         return false
    //     }
    //      if(sortedStrArr[i] == "{" && sortedStrArr[i+1] != "}"){
    //         return false
    //     }
    //      if(sortedStrArr[i] == "[" && sortedStrArr[i+1] != "]"){
    //         return false
    //     }
    //     return true
    // }
    let stack = []
    for (let i = 0; i < s.length; i++) {
        let c = s[i]
        if (c === "(") {
            stack.push(")")
        } else if (c === "{") {
            stack.push("}")
        } else if (c === '[') {
            stack.push("]")
        } else {
            if (c !== stack.pop()) {
                return false
            }
        }

    }
    return stack.length == 0
};