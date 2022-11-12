'use strict'
let userArr = [5, 3, 8, 1];

const filterRange = (arr, minNum, maxNum) => {
    let filteredItems = [];
    arr.map(item => {
        if (item >= minNum && item <= maxNum) filteredItems.push(item);
    });
    return filteredItems
};

let filtered = filterRange(userArr, 1, 4);
console.log(filtered);
console.log(userArr);