/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */

function showSalary(data, age) {
    let result = '';
    let filterAge  =  data.filter(items => items.age <= age)
    for (let i = 0; i < filterAge.length; i++){
        if(i === filterAge.length-1) {
            result += `${filterAge[i].name}, ${filterAge[i].balance}`
        } else {
            result += `${filterAge[i].name}, ${filterAge[i].balance}` + '\n'
        }
    }
    return result

}
