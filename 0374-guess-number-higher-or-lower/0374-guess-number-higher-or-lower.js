/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    // let num 
    // for(i=1; i<=n; i++){
    //     num = guess(i)
    //     if(num == 0){
    //         return i
    //     }
    // }
    let a = 1
    let b = n

    while (a <= b) {
        // const randomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
        // let assumePick = randomInRange(a, n)
        // let checkNum = guess(assumePick)
        // if (checkNum == 0) {
        //     return assumePick
        // }
        let mid = Math.floor((a+b)/2)
        let nmbr = guess(mid)
        if(nmbr == 0){
            return mid
        }else if(nmbr == 1){
            a = mid+1
        }else if(nmbr == -1){
            b = mid -1
        }
    }
};