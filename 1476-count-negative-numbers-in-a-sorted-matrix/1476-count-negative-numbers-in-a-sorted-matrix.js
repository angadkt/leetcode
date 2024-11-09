/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let newArr = grid.flat().filter((item)=> item<0)
    return newArr.length
};