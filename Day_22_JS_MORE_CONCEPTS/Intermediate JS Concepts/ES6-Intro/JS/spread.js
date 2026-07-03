// const max = Math.max(12,34,65,11,29);
// console.log(max);

// const numbers = [12,85,22,12,34,54];
// const largest = Math.max(...numbers);
// console.log(...numbers);
// console.log(largest)


const numbers = [12,85,22,12,34,54];
const numbers2= [...numbers];
const numbers4 = [111,222,333, ...numbers, 999,444]

numbers.push(55);
numbers2.push(7777);
console.log(numbers);
console.log(numbers2);
console.log(numbers4);