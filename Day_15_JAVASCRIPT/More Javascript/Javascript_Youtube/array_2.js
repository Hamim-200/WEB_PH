// Array Fill Manual Way

const arr1 = new Array(10);
for (let i = 0; i<arr1.length;i++){
    arr1[i] = false;
}
console.log(arr1);

// Array Fill
const arr2 = new Array(10);
arr2.fill(0);
// console.log(arr2);

const fruits = ['apple', 'banana', 'orange', 'mango'];
fruits[0] = 'Lichi';
fruits[1] = 'Watermalon';
fruits[2] = 'Goava';
// console.log(fruits);

// Fill Array and update
const response = new Array(9);
response.fill(false);
for (let i = 0 ; i < response.length; i++){
    const rand = Math.floor(Math.random() * 10+1);
    response[i] = rand > 5 ? 'X' : 'O';
}
console.log(response);

// Array is Mutable
function update (arr){
    for (let i = 0; i<arr.length;i++){
        arr[i] = `${i + 1}. ${arr[i]}`;
    }
    return arr;
}

const updatedNames = update(fruits);
console.log(fruits);
console.log(updatedNames);