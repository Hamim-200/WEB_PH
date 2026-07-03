//Check Truthy
let myVar = 5;
if(myVar)
{
    myVar = myVar*100;
}
else{
    myVar = 0;
}

//Check falsy
let myMoney = 50;
if(!myMoney){

}


const money = 80;
let food;
if(money >100){
    food = 'Biryani';
}
else{
    food = 'cha';
}

//ternary
let food1 = money>100 ? 'biryani' : 'Cha';


//Number to string Convert
const num1 = 52;
console.log(num1);

const numStr = num1 + '';
console.log(numStr);


//String To Number
const input = '560';
const inputNum = +input;
console.log(inputNum);


const isActive = true;
const showUser = () =>console.log('display user');
const hideUser = () =>console.log('Hide user');
// isActive ? showUser() : hideUser();

// Use && if the left side is true then right side will be executed
isActive && showUser();
