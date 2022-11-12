'use strict'
let userArr = [5, 3, 8, 1];

const filterRangeInPlace = (arr, minNum, maxNum) => {
    arr.forEach(item => {
        if (item < minNum || item > maxNum) arr.splice(arr.indexOf(item), 1);
    });
    return arr
};

filterRangeInPlace(userArr, 1, 4);
console.log(userArr);