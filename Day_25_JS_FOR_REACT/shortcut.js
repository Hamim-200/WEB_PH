/**
Falsy values (treated as false):
false
0
"" (empty string)
null
undefined
NaN 
*/

if (0) {
  console.log("This won’t run");
}

if ("Hello") {
  console.log("This will run"); // truthy
}


// Ternary Operator (? :)

let age = 18;

// normal if/else
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// ternary operator
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result); // Adult


// 3. Shortcut with || (OR) and && (AND)
let username = "";
let displayName = username || "Guest";  
console.log(displayName); // Guest

let isLoggedIn = true;
isLoggedIn && console.log("Welcome back!");
// Prints: Welcome back!


let user = {
  name: "Hamim",
  age: 21
};

let nickname = user.nickname || "No nickname"; 
console.log(nickname); // "No nickname"

let status = user.age >= 18 ? "Adult" : "Minor"; 
console.log(status); // "Adult"

user.name && console.log(`Hello, ${user.name}`); 
// Prints: Hello, Hamim


// string to numbers
const input = '560';
const inputNum = +input;
console.log(inputNum)