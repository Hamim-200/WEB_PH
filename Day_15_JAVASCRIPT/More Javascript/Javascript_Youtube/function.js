const arr1 = [4,3,2,5,6,7,5,3,1,6,54,23];
const arr2 = [6,7,5,3,5,2,12,34,54,34,2,56,35,4,242,4,34];

// let max = arr1[0];
// for (let v of arr1){
//     if (v > max){
//         max = v;
//     }
// }
// console.log(max);

function findMax(arr){
    let max = arr[0];
    for (let v of arr){
    if (v > max){
        max = v;
    }
 }
return max;
}

console.log(findMax(arr1));
console.log(findMax(arr2));