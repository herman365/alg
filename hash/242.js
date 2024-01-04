/**
 * 暴力解法
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const sl = s.length, tl = t.length
  if (sl !== tl) return false
  for (let i = 0; i < sl; i++) {
    if (t.indexOf(s[i]) === -1) return false
    t = t.replace(s[i], '')
  }
  return !t.length
};

/**
 * Map解法
* @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram2 = function(s, t) {
  if (s.length !== t.length) return false
  let char_count = new Map()
  for (let it of s) {
    char_count.set(it, (char_count.get(it) || 0) + 1)
  }
  for (let it of t) {
    if (!char_count.get(it)) return false
    char_count.set(it, char_count.get(it) - 1)
  }
  return true
}

/**
 * hash解法
 */
var isAnagram3 = function(s, t) {
  if (s.length !== t.length) return false
  const resSet = new Array(26).fill(0)
  const base = 'a'.charCodeAt()
  for (let i of s) {
    resSet[i.charCodeAt() - base]++
  }
  for (let i of t) {
    if (!resSet[i.charCodeAt() - base]) return false
    resSet[i.charCodeAt() - base]--
  }
  return true
}