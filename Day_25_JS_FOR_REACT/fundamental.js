// 1_variable
let name = "Hamim";   // can be changed
const pi = 3.1416;    // cannot be reassigned
var age = 21;         // old way, not recommended


// 2_Operators
let a = 10, b = 5;
console.log(a + b);    // 15
console.log(a > b);    // true
console.log(a === "10"); // false (strict check)


// 3_conditions
if (a > b) {
    console.log("a is bigger");
} else {
    console.log("b is bigger");
}


// 4_Array
let numbers = [10, 20, 30, 40];   // using []
let colors = new Array("Red", "Green", "Blue"); // using constructor
fruits.push("Pineapple");  // add to end
fruits.pop();              // remove from end
fruits.unshift("Lemon");   // add to start
fruits.shift();            // remove from start
for (let fruit of fruits) {
    console.log(fruit);
}



// 5_Loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}


// 6_Function
function greet(name) {
    return "Hello " + name;
}

console.log(greet("Hamim"));

// 7_Object
let student = {
    name: "Hamim",
    age: 21,
    department: "Engineering",
    isActive: true
};
console.log(student.name);   // Hamim (dot notation)
console.log(student["age"]); // 21 (bracket notation)
