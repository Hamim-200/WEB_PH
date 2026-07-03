// Find the largest number of an array

function largestElement(array) {
    let largest = array[0];
    for (const element of array) {
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}

let array = [3, 5, 7, 1, 9];
console.log(largestElement(array))