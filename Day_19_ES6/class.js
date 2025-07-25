const products = [
    { id: 1, name: 'Lenovo', price: 65000 },
    { id: 2, name: 'HP', price: 70000 },
    { id: 3, name: 'Dell', price: 68000 },
    { id: 4, name: 'Asus', price: 62000 },
    { id: 5, name: 'Acer', price: 60000 }
];


//similar (has some properties, method)
class Product{
    country = 'Bangladesh'
    constructor(name){
        this.name = name; 
    }
    speak(talk){
        console.log(`Talking about ${talk}`)
    }
}

const lenovo = new Product()
console.log(lenovo);
lenovo.speak('Hello guys')

class Laptop {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Price: ${this.price}`);
    }
}

const myLaptop = new Laptop('Lenovo', 65000);
myLaptop.displayInfo(); 
// Output: Name: Lenovo, Price: 65000
