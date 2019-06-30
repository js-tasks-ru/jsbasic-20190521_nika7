'use strict';

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    let tableBody = table.lastElementChild
    let tableStatus = tableBody.rows

    for (let el of tableStatus) {
        let cells1 = el.cells
        cells1 = Array.prototype.slice.call(cells1)
        cells1.forEach(function (item) {
            if (item.cellIndex === 3) {
                if (item.getAttribute('data-available') === 'true') {
                    el.classList.add('available')
                } else if (item.getAttribute('data-available') === 'false') {
                    el.classList.add('unavailable')
                } else if (!item.getAttribute('data-available')){
                    el.setAttribute('hidden', '')
                }
            } if (item.cellIndex === 1) {
                if (Number(item.innerText) < 18) {
                    el.style = 'text-decoration: line-through'
                }
            } if (item.cellIndex === 2){
                if (item.innerText === 'm'){
                    el.classList.add('male')
                } else if (item.innerText === 'f'){
                    el.classList.add('female')
                }
            }
        })
        // for (let el of cells1) {
        //     console.log(el)
        //     // if (el.cellIndex[0]) {
        //     //     if (el.getAttribute('data-available') === 'true') {
        //     //         el.classList.add('available')
        //     //     } else if (el.getAttribute('data-available') === 'false') {
        //     //         el.classList.add('unavailable')
        //     //     } else {
        //     //         el.setAttribute('hidden', '')
        //     //     }
        //     // }
        // }
        // if (el.cellIndex === 3) {
        //
        // }

    }
}