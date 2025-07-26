/**
 * JavaScript has:
1️⃣ Primitive Types (immutable, stored by value)
2️⃣ Non-Primitive (Reference) Types (mutable, stored by reference)
 */


// dynamic type language (Premitive)
const a = 5;
const b = 'hello';
const c = true;

//Non premitive (Object, Array, Funcation)
const ages = [20,35,55];
const student = {id:23,class:7}


// -------------------------------------
let x = 5;
let y = x;
console.log(x,y);
y = 7;  //Reassign the value
console.log(x,y);


let p = {job:'Developer'}
let q=p;
console.log(p,q);