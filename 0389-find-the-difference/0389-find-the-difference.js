/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let res = "";
    let arrt = t.split("").sort( )
    let arrs = s.split("").sort( )
    console.log(arrt)
    console.log(arrs)
    // const res = arrt.filter((item) => !arrt.includes(item))
    for(let i=0; i<arrt.length; i++){
        if(arrt[i] != arrs[i]){
            res = arrt[i]
            break
        }
    }
return res
};