const actor = {
    name: 'Ananta',
    age:30,
    phone:'0182482434',
    money:102032,
    ismarried:true
};

console.log(actor);
  
const keys  = Object.keys(actor);
console.log(keys);

const values = Object.values(actor);
console.log(values);

const pair = Object.entries(actor);
console.log(pair); 


//Two dimentional array
// [
//   [ 'name', 'Ananta' ],
//   [ 'age', 30 ],
//   [ 'phone', '0182482434' ],
//   [ 'money', 102032 ],
//   [ 'ismarried', true ]
// ]