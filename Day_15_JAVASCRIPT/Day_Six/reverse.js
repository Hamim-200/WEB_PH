const numbers = [1,2,3,4,5,6,7];
// console.log(numbers);

// Step-1
// numbers.reverse();
// console.log(numbers);



// Step-2
// const rev_numbers = [];

// for(const num of numbers){
//     console.log(num);
//     rev_numbers.unshift(num);
// }
// console.log(rev_numbers);



// Step-3
const rev_rev_numbers = [];
for(let i = numbers.length-1;i>=0;i--){
    const num = numbers[i];
    console.log(num);
    rev_rev_numbers.push(num);
}
console.log(rev_rev_numbers);