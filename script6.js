'use strict'
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };
let arr = [john, pete, mary];

const getAverageAge = (inputArr) => {
    let length = inputArr.length;
    let sum = 0;
    let average;
    inputArr.forEach(element => {
        sum += element.age;
    });
    average = Math.round(sum / length);
    return average
}

console.log(getAverageAge(arr));