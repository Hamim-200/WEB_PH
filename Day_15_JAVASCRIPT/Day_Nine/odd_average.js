// Calculate the average of the odd numbers in an array

function oddAverage(numbers) {
    const odds = [];
    for (const number of numbers) {
        if (number % 2 === 1) {
            odds.push(number);
        }
    }
    let sum = 0;
    for (const number of odds) {
        sum = sum + number;
    }
    const count = odds.length;
    const avg = sum / count;
    return avg;

}

const numbers = [2, 4, 3, 5, 6, 7, 5, 3, 6, 1, 8, 10, 12, 14, 9, 7];
const avg = oddAverage(numbers);
console.log('Average of the odd number is : ', avg)