var getSum = function(a, b) {
    let arr = []
    arr.push(a);
    arr.push(b);
    let sum = arr.reduce((acc, cur)=> (acc + cur) , 0)
    return sum
};