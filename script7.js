'use strict'

const getSecondsToday = () => {
    let nowTime = new Date().toString().split(' ')[4];
    let splitTime = nowTime.split(':');
    let hour = Number(splitTime[0]);
    let minute = Number(splitTime[1]);
    let second = Number(splitTime[2]);
    let seconds = hour * 3600 + minute * 60 + second;
    return seconds
}

console.log(getSecondsToday());