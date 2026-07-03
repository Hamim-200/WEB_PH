//Primitie types are pass by value

// let num1 = 5;
// let num2 = 7;

// function multiply(a,b){
//     a=10;
//     const result = a*b;
//     return result;
// }

// const output = multiply(num1,num2);
// console.log(num1);
// multiply(num1,num2);
// console.log(num1);
// console.log(output);


//objects and array are pass by refference

let student1 = {name:'Jalil',partner:'borsha'};
let student2 = {name:'Raj',partner:'Anika'};

function makeMovide(couple1,couple2){
    couple1.name = 'ononto';
    couple2.partner = 'Mim';
}
console.log(student1,student2);
makeMovide(student1,student2);
console.log(student1,student2);