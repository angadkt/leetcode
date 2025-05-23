/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0 ) return "";
    let prefix = strs[0];
    for(i=1; i<strs.length; i++){
        while(strs[i].slice(0,prefix.length) !== prefix){
            prefix = prefix.slice(0,-1);
        }
    }
    return prefix;
};