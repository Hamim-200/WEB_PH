var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2
}

const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);


//for in loop

for (var propertyName in shoppingCart) {
    const value = shoppingCart[propertyName];
    console.log(propertyName,'-', value);
}