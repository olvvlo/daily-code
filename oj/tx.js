/**
 * 从最大面额开始，拿尽可能多的这种硬币找零
 * 
 * @param {*} coins 
 */
function MinCoinChange(coins) {
  var coins = coins
  this.makeChange = function (amount) {
    var change = [],
        total = 0
    for (var i = coins.length; i >= 0; i--) {
      var coin = coins[i]
      while (total + coin <= amount) {
        change.push(coin)
        total += coin
      }
    }
    return change
  }
}

var minCoinChange = new MinCoinChange([1, 5, 10, 25])
console.log(minCoinChange.makeChange(36)) // [25, 10, 1]

var minCoinChange = new MinCoinChange([1, 3, 4])
console.log(minCoinChange.makeChange(6)) // [4, 1, 1]