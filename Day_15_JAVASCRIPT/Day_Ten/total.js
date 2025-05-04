const products = [
    {name:'shampoo', price:300},
    {name:'sope', price:200},
    {name:'oil', price:100},
    {name:'powder', price:400},
]

function getShoppingTotal(products){
    let total = 0;
    for(const product of products){
        total = total + product.price;
    }
    return total;
}

const total = getShoppingTotal(products);
console.log('Total cost : ', total); 