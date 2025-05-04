const heights = [65, 54, 65, 23, 53, 56, 97, 56, 47, 89, 76, 57];

function getMin(numbers) {
    let min = numbers[0];
    for (const num of numbers) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}

const min = getMin(heights);
console.log('MIN value is', min)