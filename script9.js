'use strict'
// setInterval
// const printNumbers = (from, to) => {
//     let count = from;
//     let id = setInterval(() => {
//         console.log(count++);
//         if (count > to) clearInterval(id);
//     }, 1000);
// }

// printNumbers(3, 6);

// setTimeout
const printNumbers = (from, to) => {
    let count = from;
    let id = setTimeout(function counter() {
        console.log(count++);
        id = setTimeout(counter, 1000);
        if (count > to) clearTimeout(id);
    }, 1000);
}

printNumbers(4, 10);

