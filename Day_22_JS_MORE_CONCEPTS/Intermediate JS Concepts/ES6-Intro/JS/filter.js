const numbers = [12, 34, 54, 36, 12, 90, 45,56,43,23,54,65,49];

const binNums = numbers.filter(number => number>20);
const tiny = numbers.filter( n =>n < 20);
const even = numbers.filter( n =>n % 2 === 0);

// console.log(binNums);
// console.log(tiny);
// console.log(even);



const products = [
    { id: 1, name: 'laptop', price: 40000 },
    { id: 2, name: 'Mobile', price: 20000 },
    { id: 3, name: 'Computer', price: 8000 },
    { id: 4, name: 'Watch', price: 3000 },
    { id: 5, name: 'Watch', price: 10000 },
    { id: 6, name: 'Watch', price: 6000 },
];
const expensive = products.filter(product => product.price <10000);
console.log(expensive);