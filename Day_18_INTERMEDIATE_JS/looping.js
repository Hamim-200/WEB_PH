const numbers = [1,6,8,2];

for (const num of numbers ){
    console.log(num);
}

const nobab = 'Siraj ud dullah';
for(const char of nobab){
    console.log(char);
}

const glass = {
    name : 'glass',
    color:'golden',
    price:12,
    isClear:true
}

// for(const key of glass){
//     console.log(key)
// }

for(const key in glass){
    const value = glass[key];
    console.log(key,value);
}

const keys = Object.keys(glass);
console.log(keys);

for(const key of keys){
    const value = glass[key];
    console.log(key,value);
}