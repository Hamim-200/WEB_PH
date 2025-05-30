// var : no reason to use var
// let : allow it to reassign 
// const : do not allow to reassign 

const money = 25;
const rich = money + 25;
console.log(rich);

let count = 0;
count = count+10;
console.log(count);

const numbers = [21,23,43,45];
// numbers = [4,5,6,7];
numbers[1] = 34;
numbers.push(8,9,10);
console.log(numbers);

// object 
const student = {
    name:'hanif ',
    class :12
}

console.log(student);