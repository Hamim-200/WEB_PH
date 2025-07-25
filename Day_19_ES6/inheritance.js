class Laptop {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Price: ${this.price}`);
    }
}

class GamingLaptop extends Laptop {
    constructor(name, price, gpu) {
        super(name, price); // call parent constructor
        this.gpu = gpu;
    }

    displayGamingInfo() {
        console.log(`Name: ${this.name}, Price: ${this.price}, GPU: ${this.gpu}`);
    }
}

const myLaptop = new GamingLaptop('Asus', 120000, 'RTX 4060');
myLaptop.displayInfo();         // Inherited method
myLaptop.displayGamingInfo();   // Child method

// Output:
// Name: Asus, Price: 120000
// Name: Asus, Price: 120000, GPU: RTX 4060
                