const products = [
    { id: 1, name: 'Lenovo', price: 65000 },
    { id: 2, name: 'HP', price: 70000 },
    { id: 3, name: 'Dell', price: 68000 },
    { id: 4, name: 'Asus', price: 62000 },
    { id: 5, name: 'Acer', price: 60000 }
];


//Map
const names = products.map(product =>product.name);
console.log(names);

const prices = products.map(pr =>pr.price);
console.log(prices);


// For each
products.forEach(p=>console.log(p.id))

//filter
const expensive = products.filter(p=>p.price>65000)
console.log(expensive);

// find
const affordable = products.find(p=>p.price<62000);
console.log(affordable);

// reduce
const total = products.reduce((acum,current)=>acum+current.price,0)
console.log(total);