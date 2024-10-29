/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let arr1 = [];
    let arr2 = [];
    for(let i=1; i<=n; i++){
        if(i%m !== 0){
            arr1.push(i)
        }else{
            arr2.push(i)
        }
    }
    let arr1Sum = arr1.reduce((acc,cur) => acc + cur , 0)
    let arr2Sum = arr2.reduce((acc,cur) => acc + cur , 0)
    return arr1Sum - arr2Sum
};