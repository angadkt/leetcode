/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    // if (dividend === divisor) return 1;

    // let sign = (dividend < 0) === (divisor < 0); // Determine sign in a more concise way
    
    // let n = Math.abs(dividend);
    // let d = Math.abs(divisor);
    // let quotient = 0;

    // while (n >= d) {
    //     let count = 0;
    //     while (n >= (d << (count + 1))) {
    //         count++;
    //     }
    //     quotient += 1 << count;
    //     n -= d << count;
    // }

    // if (quotient === (1 << 31) && sign) {
    //     return 2147483647; // INT_MAX
    // }

    // if (quotient === (1 << 31) && !sign) {
    //     return -2147483648; // INT_MIN
    // }

    // return sign ? quotient : -quotient;
    if(dividend === -2147483648 && divisor === -1 ){
        return 2147483647
    }
    const val = Math.trunc(dividend / divisor)
    return val
};