/**
 * Map记录
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {

  let m = new Map()

  const getSum = (n) => {
    let sum = 0
    while (n) {
      sum += (n % 10) ** 2
      n = Math.floor(n / 10)
    }
    return sum
  }

  while (true) {
    if (m.has(n)) return false
    if (n === 1) return true
    m.set(n, 1)
    n = getSum(n)
  }
};