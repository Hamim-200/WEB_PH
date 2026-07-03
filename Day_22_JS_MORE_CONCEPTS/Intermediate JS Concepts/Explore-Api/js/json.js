const user = {id:1,name:'Amir Khan',job:'Actor'};
//JavaScript Object Notation (JSON)
const stringified = JSON.stringify(user);
console.log(user); // { id: 1, name: 'Amir Khan', job: 'Actor' } --->JS
console.log(stringified); // {"id":1,"name":"Amir Khan","job":"Actor"} --->JSON(Converted as STRING)

const shop = {
    owner: 'Alia',
    address:{
        street:'Road-54',
        city:'Mumbai',
        countru:'India'
    },
    products:['Laptop','Phone','Mic','monitor'],
    revenue:43000,
    isOpen:true,
    isNew: false
}

console.log(shop);

const shopJson = JSON.stringify(shop);
console.log(shopJson);

const shopObj = JSON.parse(shopJson);
console.log(shopObj);
