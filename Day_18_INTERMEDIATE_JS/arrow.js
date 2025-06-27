// STEP=1

// function add (a,b){
//     const result = a+b;
//     return result;
// }

// const sum = add(20,10);
// console.log(sum);

//STEP=2 function decleration
// function add (a,b){
//     return a+b;
// }

// const sum = add(20,10);
// console.log(sum);

// STEP = 3 function expression
const add2 = function(a,b){
    return a+b;
}

// arrow function
const add3 = (a,b) => a+b;
const sum = add3(10,40);
console.log(sum);