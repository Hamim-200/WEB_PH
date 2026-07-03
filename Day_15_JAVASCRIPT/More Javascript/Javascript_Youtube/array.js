// const arr = [];
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;

// console.log(arr);

// const fruits = ['apple', 'banana', 'orange', 'mango'];

// fruits [4] = 'Lichi';

// console.log(fruits.length);
// console.log(fruits);

// Creating an array
let fruits = ['apple', 'banana', 'orange', 'mango'];

// Accessing elements
console.log(fruits[0]); // Output: 'apple'

// Modifying an element
fruits[1] = 'kiwi';
console.log(fruits); // Output: ['apple', 'kiwi', 'orange', 'mango']

// Adding elements
fruits.push('grape');
console.log(fruits); // Output: ['apple', 'kiwi', 'orange', 'mango', 'grape']

// Removing elements
fruits.pop();
console.log(fruits); // Output: ['apple', 'kiwi', 'orange', 'mango']

// Finding the length of an array
console.log(fruits.length); // Output: 4

// Iterating over an array
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// Output:
// 'apple'
// 'kiwi'
// 'orange'
// 'mango'
