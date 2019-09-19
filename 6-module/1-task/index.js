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
                innerBody.setAttribute('id', element.id)
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
            let self = this;
            this.el.addEventListener("click", function(event) {
               if (!event.target.hasAttribute('href')) return
                let id = event.target.parentElement.parentElement.id
                self.onRemoved(Number(id))
               // console.log(event.target)
            });

        }

        /**
         * Метод который выщывается после удалении строки
         * @param {number} id - идентификатор удаляемого пользователя
         */
        onRemoved(id) {
            // let elToRemove = document.getElementById(id)
            // elToRemove.remove()
            // elToRemove.innerHTML = "";
            let row_num = 1;
            for (let i in this.data){
                if(this.data[i].id === id) {
                    delete this.data[i];
                    break
                }
                row_num += 1;
            }
            this.el.deleteRow(row_num)
            console.log(`Из таблицы удален пользователь ${id}`)


        }
    }

    window.ClearedTable = ClearedTable;
})();

