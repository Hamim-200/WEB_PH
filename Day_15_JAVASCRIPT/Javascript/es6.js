// CONST LET

// let num = 5;
// num =40;
// console.log(num);

// let nam = "HAMIM";
// nam ="AHMED";
// console.log(nam);

// Tamplet litarels & Spread Operators

// const countryName = "Bangladesh"
// const country = `My country name is ${countryName}`
// console.log(country)

// const numbers  = [1,2,34,5,565,75,7,5,7,6,57];
// console.log(...numbers);


// OBJECT DISTRUCTURING

// const person = {
//     name: "test",
//     age:10,
//     friends : ["korim","rohim","jobbar"],
// };

// const {friends} = person;

// console.log(friends);

// ARROW FUNCTION

// const sum = (num1,num2) => num1 + num2;
// const output = sum(10,20);

// FIND

const products = [
    {id:1,name:"xiaomi",description:"This is a xiaomi phone",price:3000,color:"black"},
    {id:2,name:"samsung",description:"This is a samsung phone",price:34000,color:"yello"},
    {id:3,name:"vivo",description:"This is a vivo phone",price:13000,color:"blue"},
    {id:4,name:"oppo",description:"This is a oppo phone",price:320000,color:"red"},
    {id:5,name:"iphone",description:"This is a iphone phone",price:30000,color:"golden"},

]


// for (let i =0;i<products.length;i++){
//     const element = products[i];

//     if (element.id == 3){
//         console.log(element);
//     }
// }

// const result = products.find(pd=>pd.id == 3);
// console.log(result);


// FILTER

const result = products.filter(product => product.color = "blue");
console.log(result);