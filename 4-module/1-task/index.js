'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList (friends) {
    let ul = document.createElement('ul')
    friends.forEach(function (el) {
        let li = document.createElement('li')
        li.innerHTML = `${el.firstName}` + ` ${el.lastName}`
        ul.appendChild(li)
    })
 return ul
}
