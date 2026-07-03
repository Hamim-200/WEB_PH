function sumOfnumbers(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum = sum + i;
        // console.log(i, sum);
    }
    return sum;
}
const result = sumOfnumbers(10);
console.log(result);