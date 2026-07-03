const friends = ['Tom henery', 'Tom Luthar', 'Hyjenberg', 'Mongodb', 'Javascript', 'Hello Everyone'];

//Find First lettr
const firstletters = friends.map(friend => friend[0]);
console.log(firstletters);

//Find Name Length
const nameLengths = friends.map(friend => friend.length);
console.log(nameLengths);

const products = [
    { id: 1, name: 'laptop', price: 40000 },
    { id: 2, name: 'Mobile', price: 20000 },
    { id: 1, name: 'Computer', price: 8000 },
    { id: 1, name: 'Watch', price: 5000 },
];

const items = products.map(product => product.name);
const price = products.map(product => product.price);

console.log(items);
console.log(price);
