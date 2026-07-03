// 1. var let const
const numbers = [12,546,45,98];
let salary = 450;
salary = 455;

// 2.deafult parameters
function calculateSalary (salary,tax=0.25,bonus=0){
    const remaining = salary - salary*tax;
    const total = remaining +bonus;
    return total;
}

// 3.Tamplate String
const multiline = `
    first Line
    second Line
    Third Line
`
// 4.Arrow Function
const doubleIt = x => x*2;
const calculateSalary2 = (salary,tax,bonus)=> salary -salary*tax + bonus;

// 5. Spread (...)
const ages = [11,21,23,43];
const newAges = [...ages,32,23,12];

// 6.Destructing
const {x,y,z, ...c} = {x:45, y:12,z:33,name:'sakib',age:'30'};
const [a,b, ...r] = [10,20,30,40,50];