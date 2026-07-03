//1.How to declare a variable using let, const.
const countryName = 'America';
let season = 'rainy';
season = 'winter';

// 2. 6 Basic Condition: >,<,===,!==,<=,>=
//    Multiple Condition

if( countryName === 'america' || season === 'rainy'){

}
else if ( countryName === 'america'){

}
else{

}

// 3.Array 
// Index
// length,push
const numbers = [20,20,12,12,31,3,12];
numbers [0] = 99;

// 4. for loop
for (let i =0;i<numbers.length;i++){
    const number = numbers[i];
    console.log(number);
}

// 5.Function 
function multiply (num1,num2){
    const result = num1 * num2;
    return result;
}
const output = multiply(35,78);

// 6.Object
//access properties by name

const student = {
    name:' Sakib',
    age: 32,
    movies: ['King','Dhaka Attack'],
}

console.log(student.age);
console.log(student['age']);

const myVariable = 'age';
console.log(student[myVariable]);