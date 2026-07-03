const phones = [
    { name: 'Samsung', camera: 12, storage: '32gb', price: 3600, color: 'silver' },
    { name: 'Oppo', camera: 12, storage: '32gb', price: 36000, color: 'silver' },
    { name: 'iphone', camera: 12, storage: '32gb', price: 260000, color: 'silver' },
    { name: 'Nokia', camera: 12, storage: '32gb', price: 36000, color: 'silver' },
    { name: 'walton', camera: 12, storage: '32gb', price: 3620, color: 'silver' },
    { name: 'asus', camera: 12, storage: '32gb', price: 12000, color: 'silver' }
]

function cheapestPhone(phones){
    let cheapest = phones[0];

    for (let i =0; i<phones.length;i++){
        const phone = phones[i];

        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}
const mySelection = cheapestPhone(phones);
console.log(mySelection);