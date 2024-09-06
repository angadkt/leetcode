var reverseWords = function(s) {
    let resArr = [];
    let res = s.split(" ").reverse();
    res.forEach(element =>{
        element!=''&& resArr.push(element)
    })
    return resArr.join(" ");
};

console.log(reverseWords("a good   example"));
