/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
    let count = 1; 
    for (let i=0; i<=n/2; i++){
       if(n%i == 0){
            count ++
       }
        
    }
    console.log(count)
    return count == 3 
};