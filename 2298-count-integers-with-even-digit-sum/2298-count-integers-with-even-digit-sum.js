/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let count = 0;

    for (let i = 1; i <= num; i++) {
        if (i <= 9) {
            if (i % 2 === 0) {
                count++;
            }
        } else {
            const sumOfDigits = i.toString().split('').map(Number).reduce((acc, cur) => acc + cur, 0);
            if (sumOfDigits % 2 === 0) {
                count++;
            }
        }
    }
    
    return count;
};


