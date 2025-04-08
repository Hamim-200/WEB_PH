const persons = ['rakib', 'sakib', 'akib', 'makib'];
const sortedPersons = persons.sort();
console.log(sortedPersons);


const numbers = [4, 5, 6, 3, 7, 45, 9, 54, 1];
const num_asc = [...numbers].sort(function (a, b) { return a - b })
const num_dsc = [...numbers].sort(function (a, b) { return b - a })


console.log(num_asc);
console.log(num_dsc);