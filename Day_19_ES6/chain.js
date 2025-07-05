// data access
const data = [{id:1,name:'abul',address:'uttara'}];
console.log(data[0].address);// Address

const products = {
    count:5000,
    data:[
        {id:1,name:'laptop apple',price:30000},
        {id:2,name:'laptop oppo',price:3000},
    ]
}

// second product price
console.log(products.data[1].price)


const user = {
    id:5001,
    name:'Rifat',
    address:{
        street:{
            firrst:'23 road',
            second:'house 12',
            third:'lalagh'
        },
        city:'Dhaka'
    }
}

console.log(user.address.street.second)