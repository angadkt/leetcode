var rotate = function (nums, k) {
    let n = nums.length;
    let rotatedArr = new Array(n);
    for (let i = 0; i < n; i++) {
        rotatedArr[(i + k) % n] = nums[i];
    }
    for (let i = 0; i < n; i++) {
        nums[i] = rotatedArr[i];
}

}