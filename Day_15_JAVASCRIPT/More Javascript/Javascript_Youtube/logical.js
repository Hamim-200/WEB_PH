let k =50, l=100;

let operation = (k > 20 ) && (l<150);
console.log("("+ k + " > 20) && (" +l + " < 150) == " + operation);

operation = (k > 20 ) || (l<150);
console.log("("+ k + " > 20) || (" +l + " < 150) == " + operation);

console.log("Operation = " + operation + " and NOt operation = " + !operation);