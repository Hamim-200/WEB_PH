let fruits = ["Apple", "Mango", "Banana"];

// old way
let a = fruits[0];
let b = fruits[1];

// new way (destructuring)
let [first, second, third] = fruits;

console.log(first);  // Apple
console.log(second); // Mango




let student = {
  name: "Hamim",
  age: 21,
  department: "Engineering"
};

// old way
let studentName = student.name;

// new way (destructuring)
let { name, age, department } = student;

console.log(name);       // Hamim
console.log(department); // Engineering
