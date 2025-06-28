const max = Math.max(3,5,2,4,13,23,43,56,23,56,24,76,43,56,78,97,10)
const numbers = [3,4,6,76,40,12]
const arraymax = Math.max(...numbers);

// console.log(...numbers);
console.log(arraymax);

// use spread operation to copy
const nums = [4,5,6,7];
const nums2 = nums;
nums2.push(12);
console.log(nums2);