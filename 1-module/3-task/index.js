'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
let inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73';
function getMinMax(str) {
let minmaxObj = {min: null, max: null}
let numbers = str.match(/-?(\d+(\.\d+)?)/ig)
numbers = numbers.map(function(name) {
    return Number(name);
});
numbers.sort(function(a, b) {
    return a - b;
});
minmaxObj['min'] = numbers[0]
minmaxObj['max'] = numbers[numbers.length - 1]
return minmaxObj
}
getMinMax(inputData)

