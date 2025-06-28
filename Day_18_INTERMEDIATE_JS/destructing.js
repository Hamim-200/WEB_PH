const actor = {
    name: 'Ananta',
    age:30,
    phone:'0182482434',
    money:102032
}

const {phone,age} = actor
console.log(phone);
console.log(age);

// const phone = actor.phone;
// console.log(phone);

// Array destructuring 
const numbers = [45,99];
const [first,second] = numbers;
const [x,y] = [12,66];

function doubleThem(a,b){
    return[a*2,b*2];
}

const [prothom, ditio] = doubleThem(6,9);
console.log(prothom,ditio);