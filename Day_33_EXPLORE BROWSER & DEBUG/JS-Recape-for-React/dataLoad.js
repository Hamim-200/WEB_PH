//1.JSON - Stringfy,parse
const student = {
    name:' Sakib',
    age: 32,
    movies: ['King','Dhaka Attack'],
}
const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

// 2.Fetch
fetch('url')
    .then(res => res.json())
    .then(data => console.log(data));

// 3.Keys,values
const keys = Object.keys(student);
const values = Object.values(student);

//4.forEach
const numbers = [201,232,13,4,2,42,31,31];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

//5.for of ->on array like object

//6.for in -> loop on an object

// 7.Add or Remove an array
const products = [
    { name: "laptop", price: 3200, Brand: "Lenovo" },
    { name: "Phone", price: 2000, Brand: "Samsung" },
    { name: "Realme Phone", price: 2500, Brand: "Realme" },
    { name: "Mouse", price: 800, Brand: "A4tech" },
    { name: "Keyboard", price: 1000, Brand: "Rmgot" },
    { name: "iphone", price: 55500, Brand: "Apple" },
];

const newProduct = {name:'webcam',price:700,brand: 'Lal'};

//copy products array and then newProduct
const newProducts = [...products,newProduct];
console.log(newProducts);

//Create a new array without one specific item
//remove phone means create a new array without the phone

const remaining = products.filter(pr => pr.name !== 'phone');