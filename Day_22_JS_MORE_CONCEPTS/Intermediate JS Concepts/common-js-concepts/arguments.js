function sum(a,b,c){
    console.log(arguments);
    const result = a+b+c;
    return result;
}
const total = sum(10,20,30,45,4,32,23);
console.log(total);