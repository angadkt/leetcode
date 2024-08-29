var filter = function (arr, fn) {
    let resArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)){
             resArr.push(arr[i]);
        }
    }
    return resArr;
};