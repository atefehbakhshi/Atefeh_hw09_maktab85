'use strict'

const formatDate = (date) => {
    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;

    if ((new Date - date) < second) return 'right now'
    if ((new Date - date) < minute) return `${Math.round((new Date - date) / second)} sec ago`
    if ((new Date - date) < hour) return `${Math.round((new Date - date) / minute)} min ago`

    return specialFormatDate(date)
}

const specialFormatDate = (fullDate) => {
    let year = fullDate.getFullYear().toString().substr(-2);
    let month = fullDate.getMonth() + 1;
    let day = fullDate.getDate();
    let hour = fullDate.getHours();
    let minute = fullDate.getMinutes();
    return `${day}.${month}.${year} ${hour}:${minute}`
}

alert(formatDate(new Date(new Date - 1)));
alert(formatDate(new Date(new Date - 30 * 1000)));
alert(formatDate(new Date(new Date - 5 * 60 * 1000)));
alert(formatDate(new Date(new Date - 86400 * 1000)));
