'use strict';

/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {
    let headRow = document.createElement('thead')
    headRow.innerHTML = '<tr>\n' + '<td>Name</td>\n' + '<td>Age</td>\n' + '<td>Salary</td>\n' + '<td>City</td>\n' + '</tr>'
    let bodyRow = document.createElement('tbody')
    items.forEach(function (element) {
        let innerBody = document.createElement('tr')
        innerBody.innerHTML += '<td>' + element.name + '</td>\n'
        innerBody.innerHTML += '<td>' + element.age + '</td>\n'
        innerBody.innerHTML += '<td>' + element.salary + '</td>\n'
        innerBody.innerHTML += '<td>' + element.city + '</td>\n'
        bodyRow.appendChild(innerBody)
    })


    /**
     * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
     */
    this.el = document.createElement('table');
    this.el.appendChild(headRow)
    this.el.appendChild(bodyRow)

    /**
     * Метод выполняет сортировку таблицы
     * @param {number} column - номер колонки, по которой нужно выполнить сортировку (отсчет начинается от 0)
     * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
     */
    this.sort = function (column, desc = false)
    {
        let bodySort = this.el.lastElementChild
        let allBodyRows = bodySort.querySelectorAll('tr')
        let allBodyRows1 = Array.prototype.slice.call(allBodyRows)
        let newTbody = document.createElement('tbody')
        if (!desc) {
            allBodyRows1.sort(function (a, b) {
                if (!isNaN(Number(a.children[column].innerHTML))) {
                    if (Number(a.children[column].innerHTML)< Number(b.children[column].innerHTML)) {
                        return -1;
                    }
                } else {
                    if (a.children[column].innerHTML < b.children[column].innerHTML) {
                        return -1;
                    }
                }
            })
            allBodyRows1.forEach(function (el) {
                newTbody.appendChild(el)

            })
        }  else {
            allBodyRows1.sort(function (a, b) {
                if (!isNaN(Number(a.children[column].innerHTML))) {
                    if (Number(a.children[column].innerHTML) > Number(b.children[column].innerHTML)) {
                        return 1;
                    }
                } else {
                    if (a.children[column].innerHTML > b.children[column].innerHTML) {
                        return 1;
                    }
                }
            })
            allBodyRows1.forEach(function (el) {
                newTbody.appendChild(el)

            })
        }
        this.el.appendChild(newTbody)

    };
}


// function Button({el, options}) {
//     // this = {}
//
//     this.el = el;
//     this.text = options.text;
//
//
//     this.click = function () {
//
//     }
// }
//
// // app.js
//
// const submit = new Button({
//     el: document.body,
//     options: {
//         text: 'Отправить'
//     }
// });
//
// const scrollDow = new Button({
//     el: document.body,
//     options: {
//         text: 'Вниз'
//     }
// })

