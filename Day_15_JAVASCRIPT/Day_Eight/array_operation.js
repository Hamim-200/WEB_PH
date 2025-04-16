//Write a function to give me sum of all numbers in array

function sumOfNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum = sum + number;
    }
    return sum;
}
const nums = [1,2,3,4,5,6,7]
const sum = sumOfNumbers(nums);
console.log('SUm of number is: ', sum); 