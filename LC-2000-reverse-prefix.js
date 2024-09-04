var reversePrefix = function(word, ch) {
    let wordArr = word.split("");
    let duplicateArr = [...wordArr];
    let index = wordArr.indexOf(ch);
    let revStr = wordArr.splice(0,index+1).reverse().join("");
    let remainStr = duplicateArr.splice(index+1).join("");
    return revStr.concat(remainStr);
};

console.log(reversePrefix("abcdefghi","d"));
