var lengthOfLastWord = function(s) {
    let res = s.trim().split(" ");
    let lastWord = res[res.length-1];
    return lastWord.length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
