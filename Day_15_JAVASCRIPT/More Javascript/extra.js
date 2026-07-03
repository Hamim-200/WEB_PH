// function radianToDegree(radian) {
//     const Degree = radian * (180 / Math.PI);
//     const result = degree.toFixed(2);
//     const convertDegree = parseFloat(result)

//     if (typeof radianNumber !== "number") {
//         return "please enter new number"
//     }
//     return convertDegree;


// }
// const degree = radianToDegree(10);
// console.log(convertDegree);


// function compare(a, b) {
//     if (a == b) {
//         return true;
//     } else {
//         return false;
//     }
// }
// const result = compare(15, "15");
// console.log(result);

function compare(a, b) {
    if (a.toString() === b) {
        return true;
    } else {
        return false;
    }
}
const result = compare(25, 25);
console.log(result);


console.log("123" + 123);

let a = "Hi"
let b = "there"
console.log(a + b)