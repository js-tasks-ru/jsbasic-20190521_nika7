(function () {
    'use strict';

    /**
     * Компонент, который реализует таблицу
     * с возможностью удаления строк
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
    class ClearedTable {

        constructor(data) {
            this.el = document.createElement('table');
            this.data = data;
            let headRow = document.createElement('thead')
            headRow.innerHTML = '<tr>\n' + '<td>Name</td>\n' + '<td>Age</td>\n' + '<td>Salary</td>\n' + '<td>City</td>\n' + '<td> </td>\n </tr>'
            let bodyRow = document.createElement('tbody')
            this.data.forEach(function (element) {
                let innerBody = document.createElement('tr')
                innerBody.innerHTML += '<td>' + element.name + '</td>\n'
                innerBody.innerHTML += '<td>' + element.age + '</td>\n'
                innerBody.innerHTML += '<td>' + element.salary + '</td>\n'
                innerBody.innerHTML += '<td>' + element.city + '</td>\n'
                innerBody.innerHTML += '<td><a href="#delete">X</a></td>\n'
                bodyRow.appendChild(innerBody)
            })

            this.el.appendChild(headRow)
            this.el.appendChild(bodyRow)
            this.el.classList.add('pure-table')
        }

        /**
         * Метод который выщывается после удалении строки
         * @param {number} id - идентификатор удаляемого пользователя
         */
        onRemoved(id) {
            console.log(`Из таблицы удален пользователь ${id}`);
        }
    }

    window.ClearedTable = ClearedTable;
})();
