//create a function that will return only the even numbers

function evenNumbersOnly(numbers) {
    const evens = [];
    for (const number of numbers) {
        if (number % 2 === 0) {
            console.log(number);
            evens.push(number);
        }
    }
    return evens;
}

const numbers = [5,4,2,3,2,5,4,6,5,7,56,7,5,75,7,56]

const evens = evenNumbersOnly(numbers);
console.log('Even numbers are', evens);