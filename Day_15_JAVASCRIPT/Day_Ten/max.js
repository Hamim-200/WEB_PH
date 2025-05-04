const disha = 56;
const salman = 49;

if (disha > salman) {
    console.log('Disha will get the gift')
}
else {
    console.log('Salman will get the gift');
}


// Using Function
function getMax(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}

const max = getMax(56, 74);
console.log('Max of two is : ', max);