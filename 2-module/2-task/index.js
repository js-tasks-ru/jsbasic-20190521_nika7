/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */

function isEmpty(obj) {
    let result;
    (obj === null || Object.keys(obj).length === 0) ? result = true : result = false;
    return result
}

