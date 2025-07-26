// 1️⃣ Declaring a variable without assigning a value
let a;
console.log(a); // undefined

// 2️⃣ A function without a return statement implicitly returns undefined
function greet() {
    console.log("Hello");
}
let result = greet(); 
console.log(result); // undefined

// 3️⃣Function parameters not passed will be undefined
function add(a, b) {
    console.log(b);
}
add(5); // undefined (since `b` is not passed)


// 4️⃣If return has nothing on the right side will return undefined
function noNegative(a,b){
    if(a<0||b<0){
        return
    }
    return a+b;
}
const total = noNegative(2,-5)
console.log(total);

// 5️⃣Accessing a property that does not exist
const obj = { name: "Hamim" };
console.log(obj.age); // undefined

// 6️⃣ Accessing an array index that does not exist
let arr = [10, 20, 30];
console.log(arr[5]); // undefined
