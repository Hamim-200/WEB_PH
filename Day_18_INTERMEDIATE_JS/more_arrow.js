const difference = (x, y) => x - y;
const multiply = (first, secod, third) => first * second * third;

// single or one parameter
const getAge = (person) => person.age;
const student = { name: 'jolil', age: 35 }
const age = getAge(student)
console.log(age);

const getThird = numbers =>numbers[2];
const third = getThird([2,3,4,5,6,9])
console.log(third);

//no parameter
const getPI = () => Math.PI;
console.log(getPI());

// large arrow function
const doMath = (x,y,z)=>{
    const sum = x+y+z;
    const mult = x*y*z;
    const result = sum + mult;

    return result;
}