// 1. Template String
let name = "Hamim";
let age = 21;

// old way
console.log("My name is " + name + " and I am " + age + " years old.");
// template string
console.log(`My name is ${name} and I am ${age} years old.`);


// 2. Arrow Function

// normal function
function add(a, b) {
  return a + b;
}

// arrow function
const addArrow = (a, b) => a + b;

console.log(addArrow(5, 3)); // 8


// 3. Spread Operator (...)
let nums = [1, 2, 3];
let newNums = [...nums, 4, 5];  
console.log(newNums); // [1, 2, 3, 4, 5]


let arr1 = [10, 20];
let arr2 = [...arr1];  // copy
arr2.push(30);

console.log(arr1); // [10, 20]
console.log(arr2); // [10, 20, 30]
