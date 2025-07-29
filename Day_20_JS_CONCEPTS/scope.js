// Scope determines where variables can be accessed in your code.

function add(a,b){
    const total = a+b;
    console.log(a,b);
    return total;
}

// console.log(a,b);
add(5,7);

// Global Scope
let x = 10;
function show() {
    console.log(x); // ✅ can access x
}

// Function Scope
function greet() {
    let message = "Hello";
    console.log(message);
}
// console.log(message); ❌ Error: message is not defined


// Block Scope (let & const)
if (true) {
    let y = 20;
    const z = 30;
}
// console.log(y, z); ❌ Error
