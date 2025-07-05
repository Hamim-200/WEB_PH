const numbers = [2, 3, 4, 5, 6, 7];

function doubleIt(num) {
    console.log('Num now', num)
    return num * 2;
}
const result = numbers.map(doubleIt)
console.log(result)




// const doubled = [];
// for (const num of numbers){
//     const double = num*2;
//     doubled.push(double)
// }
// console.log(doubled) 

// STEP=2
// const threeTimes = n => n * 3;
// const output = numbers.map(threeTimes)
// console.log(output)

// STEP=3
// const threeTimes = n => n * 3;
const output = numbers.map(n => n * 4)
console.log(output)