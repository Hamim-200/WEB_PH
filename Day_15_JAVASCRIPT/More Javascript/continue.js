var numbers = [23, 45, 2, 1, 4, 5, 23, 45, 6, 39, 54, 2, 56];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 50) {
        continue;
    }
    console.log(number);
}