// Unit Convert Inch to Feet, miles to kilometre
//12 inch = 1 feet

function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}

function inchToFeet2(inch) {
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' Fit ' + inchRemaining + ' Inch. '
    return result;
}


const shuvoheight = inchToFeet2(50);
console.log(shuvoheight);


// Mile to Kilometer
function mileTokilometer(mile) {
    const kilo = mile * 1.60934;
    return kilo;
}

console.log(mileTokilometer(2));