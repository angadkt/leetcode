/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    let arr = prices.sort((a,b)=> a-b)
    if(arr[0]+arr[1] <= money){
        return money - (arr[0]+arr[1])
    }else{
        return money
    }
};