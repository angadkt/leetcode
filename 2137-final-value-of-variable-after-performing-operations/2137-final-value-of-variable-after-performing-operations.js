/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
   let x = 0
   for(let item of operations){
        if(item == "X++" || item == "++X") {
            x++
        }else if(item == "--X" || item == "X--"){
            x--
        }
   }
   return x
};