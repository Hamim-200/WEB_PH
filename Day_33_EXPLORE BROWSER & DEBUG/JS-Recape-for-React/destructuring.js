// 1.Array destructuring

// const numbers = [42,65];
// const x = numbers[0];
// const y = numbers[1];
// console.log(x,y);

// const [x,y] = [42,65];
// console.log(x,y);

function boxify (num1,num2){
    const nums = [num1,num2];
    return nums;
}

const [first ,second] = boxify(10,20);

console.log(boxify(99,66));

// 2.Object Destructuring
const {name,age} = {name: 'alu',age:14}

const employee = {
    ide:'VS Code',
    designation : 'developer',
    machine: 'mac',
    language: ['html','css','js'],
    specification : {
        height : 66,
        weight:5.9,
        address: 'uttara',
        drink: 'water',
        watch : {
            color: 'black',
            price:500,
            brand: 'casio'
        }
    }
}
const {machine,ide} = employee;
const {weight,address} = employee.specification;
const {brand} = employee.specification.watch;