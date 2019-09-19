


class TimeLeft {
    /**
     * @param el {Element} - ссылка на корневой элемент
     */
    constructor(el) {
        this.el = el;
        let currDate = this.parseDate(this.el.getAttribute('data-from'))
        let finishDate = this.parseDate(this.el.getAttribute('data-to'))

        function Timer(current, finish, el) {
            let END = 'завершенно'
            if (!current && !finish || current > finish) {
                el.innerHTML = END
            } else if (finish && current) {
                let MS_IN_MILISEC = finish.getTime() - current.getTime();
                let seconds = parseInt(MS_IN_MILISEC / 1000);
                let days = parseInt((seconds / 3600) / 24);
                seconds -= days * (3600 * 24)
                let hours = parseInt(seconds / 3600);
                seconds -= hours * 3600
                let minutes = parseInt(seconds / 60)
                seconds -= minutes * 60;
                let arrTime = [days, hours, minutes, seconds]
                let arrTimeFinish = []
                let number = 0;
                for (let i in arrTime) {
                    if (arrTime[i] === 0) {
                        continue;
                    } else {
                        let arr = null;
                        let ending = null;
                        if (i === '3'){
                            arr = [' секунда', ' секунды', ' секунд']
                        } else if (i === '2') {
                            arr = [' минута', ' минуты', ' минут']
                        } else if (i === '1') {
                            arr = [' час', ' часа', ' часов']
                        } else if (i === '0'){
                            arr = [' день', ' дня', ' дней']
                        }
                        number = arrTime[i] % 100;
                        if (number>=11 && number<=19) {
                            ending = arr[2];
                        } else {
                            number = arrTime[i] % 10;
                            switch (number)
                            {
                                case (1): ending = arr[0];
                                break;
                                case (2):
                                case (3):
                                case (4): ending = arr[1];
                                break;
                                default: ending = arr[2];
                            }
                        }

                         arrTime[i] = arrTime[i] + ending

                        arrTimeFinish.push(arrTime[i])
                    }

                }


                el.innerHTML = arrTimeFinish.join(', ')

                if (MS_IN_MILISEC > 0) {
                    setTimeout(Timer, current.setTime(current.getTime() + 1), current, finish, el)
                }

            }


        }
        Timer(currDate, finishDate, this.el)

    }


    /**
     * Форматируем строку в дату. Чтобы написать данный метод нужно почитать главу http://learn.javascript.ru/datetime
     * @param {string} str - строка с датой в формате `year.month.day hours:minutes:second`
     * @return {Date} - возвращаем объект даты
     */
    parseDate(str) {
        let date = new Date(str);
        return date
    }


    /**
     * Статчный метод, который можно вызывать не посредственно от класса, а не от объекта.
     * Подробнее здесь http://learn.javascript.ru/es-class#staticheskie-svoystva
     * @param el
     */
    static create(el) {
        return new TimeLeft(el);
    }


}

window.TimeLeft = TimeLeft;
