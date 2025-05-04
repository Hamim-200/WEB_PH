const heights = [65, 54, 65, 23, 53, 56, 97, 56, 47, 89, 76, 57];

function getMax(numbers) {
    let max = numbers[0];
    for (const num of numbers) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}

const max = getMax(heights);
console.log('max value is', max)