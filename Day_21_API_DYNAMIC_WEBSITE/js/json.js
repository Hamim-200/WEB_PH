const user = {id:1,name:'anowar',job:'actor'};
const stringfied = JSON.stringify(user);
// console.log(user);
// console.log(stringfied);


const shop = {
    owner : 'Alia',
    address:{
        street:'Kochu khet',
        city:'Dhanmondi',
        country:'Bangladesh'
    },
    products:['laptop','mic','monitor','keyboard'],
    revenue:5600,
    isOpen:true,
    isnew:false
}

console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);