var multiply = function(num1, num2) {
    let result = BigInt(num1) * BigInt(num2);
    return result.toString();
};

console.log(multiply("123456789", "987654321"));
console.log(multiply("2", "2"));