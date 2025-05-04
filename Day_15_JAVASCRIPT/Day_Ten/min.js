const phones = [
    { name: 'Samsung', price: 20000, camera: '12mp', color: 'black' },
    { name: 'iPhone', price: 85000, camera: '48mp', color: 'white' },
    { name: 'Xiaomi', price: 18000, camera: '50mp', color: 'blue' },
    { name: 'OnePlus', price: 35000, camera: '64mp', color: 'red' },
    { name: 'Realme', price: 15000, camera: '32mp', color: 'green' },
    { name: 'Nokia', price: 12000, camera: '8mp', color: 'gray' }
]

function getCheapestphone(phones) {
    let min = phones[0];
    for (const phone of phones) {
        if (phone.price < min.price) {
            min = phone
        }
    }
    return min;
}

const cheap = getCheapestphone(phones);
console.log('Cheapest Phone is :', cheap);