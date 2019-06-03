/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
let obj = {test: { test2: { test3: '1' } }};
function clone (obj) {
    if (obj == null || typeof obj !== 'object') return obj;
    let copy = {}
    for (let o in obj){
        copy[o] = clone(obj[o])
    }
    return copy;
}

console.log(clone(obj).test.test2 !== obj.test.test2)
console.log(clone(obj).test.test2.test3 === obj.test.test2.test3)

