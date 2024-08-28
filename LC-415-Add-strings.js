var addStrings = function(num1, num2) {
    let result = BigInt(num1) + BigInt(num2);
    return result.toString();
};

console.log(addStrings("132","11"));
