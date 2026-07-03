//const numbers = [2, 8, 6, 3, 2];
// const output = [];

// for (const number of numbers){
//     const doubled = number * 2;
//     output.push(doubled);
// }
// console.log(output);

const numbers = [2, 8, 6, 3, 2];

function getDoubles(numbers) {
  const output = [];

  for (const number of numbers) {
    const doubled = number * 2;
    output.push(doubled);
  }
  return output;
}

const result = getDoubles(numbers);
console.log(result);

const doubleIt = num => num*2;
const makeDouble = numbers.map(doubleIt);
console.log(makeDouble);


// MAKE 5
const fiveTimes = [1, 2, 3, 4, 5, 6].map(x => x * 5);
console.log(fiveTimes);


// More Map
const number = [12, 34, 54, 36, 12, 90, 45];

const half = number.map(n => n / 2);
const thirds = number.map(x => x / 3);
console.log(half);
console.log(thirds);

//Practice Problem 1
const odd_array = [ 1, 3, 5, 7, 9 ];

const even_array = odd_array.map(e=>e+1);
console.log(even_array);