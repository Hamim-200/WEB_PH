// Hoisting is JavaScript's behavior of moving declarations to the top of their scope (before code execution).

console.log(x); // undefined (not error)
var x = 5;

// =======
var x;
console.log(x); // undefined
x = 5;
