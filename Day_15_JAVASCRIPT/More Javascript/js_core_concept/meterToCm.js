function meterToCentimeter(meter) {
    const centimeter = meter * 100;
    return centimeter;
}

const bambo1Meter = 80;
const bambo1Cm = meterToCentimeter(bambo1Meter);
console.log(bambo1Cm);