function doubleIt(number){
    const doubled = number*2;
    console.log(number,'--->',doubled);
}
console.log('Call the function and double it');
doubleIt(2);
console.log('------------------------')
doubleIt(5);
console.log('------------------------')
doubleIt(6);
console.log('------------------------')
doubleIt(7);


function difference (num1,num2){
    const diff = num1 - num2;
    console.log(num1,num2, 'Difference is ' , diff);
}
const fatherAge = 40;
const myAge = 10;

difference(fatherAge,myAge);