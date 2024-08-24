var plusOne = function(digits) {
    let res = digits.join("");
    let num = BigInt(res);
    let final = (num + 1n);
    return final.toString().split("").map(Number);
};

console.log(plusOne([1,2,3]));
