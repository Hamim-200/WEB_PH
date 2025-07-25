// 1️⃣ Syntax Errors

/*
console.log("Hello World" // ❌ Missing closing parenthesis
*/

// 2️⃣ ReferenceError
/*
console.log(studentName); // ❌ studentName is not defined
*/

// 3️⃣ TypeError
/*
let num = 5;
num.toUpperCase(); // ❌ TypeError: num.toUpperCase is not a function
*/

// 4️⃣ Undefined vs Null Confusion
/*
let name;
console.log(name); // undefined
*/

// 5️⃣ Misunderstanding this
/*
const obj = {
    name: "Hamim",
    show: function() {
        function inner() {
            console.log(this.name); // ❌ undefined
        }
        inner();
    }
};
obj.show();
*/


// 6️⃣ Using Assignment (=) Instead of Comparison (== / ===)

/*
if (x = 5) { // ❌ This assigns 5 to x, not compares
    console.log("Yes");
}

if (x === 5) { // ✅
    console.log("Yes");
}

*/

// 7️⃣ Off-by-One Errors in Loops
/*
let arr = [1, 2, 3, 4];
for (let i = 0; i <= arr.length; i++) { // ❌ arr[4] is undefined
    console.log(arr[i]);
}
*/