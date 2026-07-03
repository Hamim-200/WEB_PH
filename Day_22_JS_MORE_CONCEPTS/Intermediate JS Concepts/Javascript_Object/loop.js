// const numbers = [12, 23, 23, 45, 3, 4];
// for (const number of numbers) {
//     console.log(number);
// }

//'for of' loop can not used with objects
const bottle = { color: 'yellow', price: 50, isCleaned: true, capacity: 1 };

const keys = Object.keys(bottle);
// console.log(keys);

/*
3 ways to read object properties
    i)bottle.color
    ii)bottle['color']
    iii)bottle[key]
*/

//'for of' loop can used in object(keys)
for (const key of keys) {
    console.log(key);
}

//'for in loop'
for (const key in bottle) {
    const prop = bottle[key];
    console.log(key,prop);
}