'use strict'
// get array length from user
let arrLength = prompt('Enter array length');

// get array items from user
let userArray = [];
for (let i = 0; i < arrLength; i++) {
    let item = prompt('Enter array item');
    userArray.push(item);
}

// checking is array like it's reverse
const sameReverse = (arr) => {
    if (arr.length === 0) return 'Empty array';

    let temp = [];
    for (let i = 1; i < (arr.length / 2) + 1; i++) {
        if (arr[i - 1] === arr.at(-i)) {
            temp.push(arr[i - 1]);
        };
    };

    if ((arr.length % 2 === 0 && arr.length === temp.length * 2) || (arr.length === (temp.length * 2) - 1)) {
        return `[${arr}] is like it's reverse`
    };

    return `[${arr}] is not like it's reverse`
};

console.log(sameReverse(userArray));
