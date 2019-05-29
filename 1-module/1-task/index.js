/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow (m, n) {
n !== 1 ?  m = m * pow(m, n-1) : m
return m
}
