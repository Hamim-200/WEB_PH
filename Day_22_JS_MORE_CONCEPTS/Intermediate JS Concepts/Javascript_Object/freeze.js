const bottle = { color: "yellow", price: 50, isCleaned: true, capacity: 1 };

const keys = Object.keys(bottle); //[ 'color', 'price', 'isCleaned', 'capacity' ]
console.log(keys); 

const values = Object.values(bottle);//[ 'yellow', 50, true, 1 ]
console.log(values);

const pair = Object.entries(bottle);
console.log(pair);      
// [
//     [ 'color', 'yellow' ],
//     [ 'price', 50 ],
//     [ 'isCleaned', true ],
//     [ 'capacity', 1 ]
// ]

//Can't remove anything from object
Object.seal(bottle);

//DELETE ANYTHING 
delete bottle.isCleaned;

//Update element
bottle.price=1000;

//Can't do anything
Object.freeze(bottle);

