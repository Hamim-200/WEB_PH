function greet() {
    console.log(this.name);
}
const user = { name: "Hamim" };
greet.call(user); // "Hamim"
greet.apply(user); // "Hamim"

const boundGreet = greet.bind(user);
boundGreet(); // "Hamim"


// In JavaScript, this refers to the object that is currently executing the function.