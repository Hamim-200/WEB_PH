// function sum(a,b,c){
//     console.log(arguments);
//     const result = a+b+c;
//     return result;
// }

// const total = sum(10,20,30,40,50);
// console.log(total);



function sum(a,b,c){
    const args = [...arguments];
    console.log(args);
    const result = a+b+c;
    return result;
}

const total = sum(10,20,30,40,50);
console.log(total);