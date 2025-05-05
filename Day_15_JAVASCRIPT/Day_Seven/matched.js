const numbers = [45, 65, 48, 35, 69]

// for (let i = 0;i<numbers.length;i++){
//     const number = numbers[i];
//     console.log(number);
// }

// for (const number of numbers){
//     console.log(number)
// }

const products = [
    { id: 0, name: 'Iphone', price: 12000 },
    { id: 1, name: 'Phone', price: 12000 },
    { id: 2, name: 'PC', price: 12000 },
    { id: 3, name: 'laptop', price: 12000 },
    { id: 4, name: 'earphone', price: 12000 },
    { id: 5, name: 'fridge', price: 12000 },
    { id: 6, name: 'calculator', price: 12000 },
    { id: 7, name: 'books', price: 12000 },
]

// for (const product of products){
//     console.log(product)
// }

function matchedProducts(products, search) {
    const matched = [];
    for (const product of products) {
        if (product.name.includes(search)) {
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, 'phone');
console.log(result);