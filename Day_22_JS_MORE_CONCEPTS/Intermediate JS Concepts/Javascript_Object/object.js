//1. create object using object literals
const player = {};
player.name = 'Tamim Iqubal';
player.specialty = 'Batsman';
player.bat = function () {
    console.log('swing your bat');
}
console.log(player);
player.bat();

const student = {
    name: 'Ibrahim',
    job: 'tution',
    ball: function () {
        console.log('throw the ball')
    },
    salary: 10000
}
console.log(student);

//2.object constructor
const person = new Object();
console.log(person);

//3. object create method
const emon = Object.create(student);
console.log(emon.name);

//4.class
class Person {
    name = 'abul';
    address = 'sodor ghat';
    constructor(age) {
        this.age = age;
    }
}
const person1 = new Person(42);
console.log(person1);

// 5.Function
function Car(model,price){
    this.model = model;
    this.price = price;
}
const tesla = new Car ('elon',32);
console.log(tesla);