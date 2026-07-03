const products = [
  { name: "laptop", price: 3200, Brand: "Lenovo" },
  { name: "Phone", price: 2000, Brand: "Samsung" },
  { name: "Realme Phone", price: 2500, Brand: "Realme" },
  { name: "Mouse", price: 800, Brand: "A4tech" },
  { name: "Keyboard", price: 1000, Brand: "Rmgot" },
  { name: "iphone", price: 55500, Brand: "Apple" },
];

//1. MAP - Return an Array
const brands = products.map(product => product.Brand);
// console.log(brands);

//2.For each - dont return anything
products.forEach(product => console.log(product));
products.forEach(product => console.log(product.Brand));

//3. filter
const cheap = products.filter(product =>product.price<=3000);
console.log(cheap);

const specificName = products.filter(p=>p.name.includes('n'));
console.log(specificName);

// 4.find
const special = products.find(p =>p.name.includes('n'));
console.log(special);
