'use strict'

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };
let users = [john, pete, mary];
let usersMapped = [];

users.map(item => {
    let temp = {
        fullName: `${item.name} ${item.surname}`,
        id: item.id,
    };
    usersMapped.push(temp);
});

console.log(usersMapped[0].id)
console.log(usersMapped[0].fullName)