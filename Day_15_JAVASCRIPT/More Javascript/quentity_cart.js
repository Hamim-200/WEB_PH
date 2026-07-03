const shoppingCart = [
    { name: 'Shoe', price: 1200, quantity: 3 },
    { name: 'Shirt', price: 1200, quantity: 4 },
    { name: 'Pant', price: 1200, quantity: 5 },
    { name: 'Belt', price: 1200, quantity: 6 }
];


function totalCost(products){
    let sum =0 ;
    for (let i =0 ; i<products.length;i++){
        const product = products[i];
        const productTotal = product.price * product.quantity;
        sum = sum + productTotal;
    }
    return sum;
}
const expense = totalCost(shoppingCart);
console.log('Total expense:',expense);