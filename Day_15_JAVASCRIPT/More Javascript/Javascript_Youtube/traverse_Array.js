const arr = [1,2,3,4,5];
const n = arr[3];
const m = arr[2];
const x =1,y=0;

// console.log(m,n,arr[x],arr[y],arr[x]+arr[y], arr [x+y+1]);


//Simple Traverse
for (let i =0 ; i<arr.length; i++){
    console.log(arr[i]);
}

//SUM

let sum = 0;
for (let i =0 ; i< arr.length; i++){
    sum += arr[i]
}
console.log(sum)

// Avg
console.log(sum/arr.length)

// Finding Large Number
const arr1 = [1,2,3,4,5,32,31,34,56,43,24,56,54,67,54,98,65,45,41,46,75,35];

let largestNumber = arr1[0]
for (let i = 1; i<arr1.length; i++){
    if (arr1[i] > largestNumber){
        largestNumber = arr1[i]
    } 
}
console.log(largestNumber);

