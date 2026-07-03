const add = (first,second) => first+second;
const getFullName = (first,last) => first + ' ' + last;
const multiply = (a,b) => a*b; 
const addAll = (a,b,c,d,e) => a+b+c+d+e;

//NO PARAMETER
const getPie = () => 3.1416;

//ONE PARAMETER
const doubleIt = (num) => num*2;
const fiveTime = num => num*5;

//MULTILINE ARROW FUNCTION
const doMath = (x,y,z) => {
    const firstSum = x+y;
    const secondSum = y+z;
    const multiplyResult = firstSum* secondSum;
    const result = multiplyResult/2;

    return result;
}

const result = multiply(7,8);
console.log(result);