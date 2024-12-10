/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let up = 0
    let right = 0
    for(let i=0; i<moves.length; i++){
        if(moves[i] === "U"){
            up++
        }
        else if(moves[i] === "D"){
            up--
        }
        else if(moves[i] === "R"){
            right++
        }
        else if (moves[i] === "L"){
            right --
        }
    }
    console.log(up)
    console.log(right)
    return up == 0 && right === 0 ? true : false
};