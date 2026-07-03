const numbers = [20, 20, 12, 12, 31, 3, 12];

const student = {
  name: " Sakib",
  age: 32,
  movies: ["King", "Dhaka Attack", "Herogiri"],
};

// 1.Tamplate String
const about = `My Name is : ${student.name} age of ${student.age} and i earn form ${numbers[2]} and favourite movie is ${student.movies[1]}`;
console.log(about);

// 2.Arrow function
const getFiftyFive = () => 55;

const addSixtyFive = (num) => num + 65;
addSixtyFive(10);

const isEven = (x) => x % 2 == 0;

const addThree = (x,y,z) => x+y+z;

const doMath = (num1 , num2) =>{
    const sum = num1 + num2;
    return sum;
} 

// 3.Spread operator
const newnumbers = [...numbers];
numbers.push(99);
numbers.push(99);
numbers.push(99);
numbers.push(99);

const currentNumbers = [...numbers,55];

console.log(numbers);
console.log(newnumbers);
console.log(currentNumbers);
