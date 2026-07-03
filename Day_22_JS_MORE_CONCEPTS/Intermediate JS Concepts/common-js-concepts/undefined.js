/*
8 ways to get Undefines
    1.variable that is not initialized will give undefined
        `
            let first;
            console.log(first);
        `
    2.function with no return
        `
            function second(a,b){
                const total = a+b;
            }
            const result = second(10,20);
            console.log(result);
        `
    3.parameter that is not passed will be undefined
        `
            function third(a,b,c,d){
                const total = a+b+c+d;
                console.log(a,b,c,d);
            }
            third(2,5);
        `
    4.If return has nothing on the right side will return undefined    
         `
            function noNegative(a,b){
                if(a<0||b<0){
                    return
                }
                return a+b;
            }
            const total = noNegative(2,-3);
            console.log(total);
        `
    5.Property that does not exists on an object will give undefined
        `
            const fifth = {id:2, name:'Emon', age:34};
            console.log(fifth.age,fifth.salery);
        `
    6.Accessing array elements outside of the index range
        `
            const sixth = [2,3,4,2,1,4];
            console.log(sixth[1],sixth[10],sixth[4]);
        `
    7.deleting an element inside an array.
        `
            const sixth = [2,3,4,2,1,4];
            delete sixth[1];
            console.log(sixth[1],sixth[10],sixth[4]);
        `
    8. Set a value directly to undefined.
*/

console.log(typeof null) //Object
console.log(typeof undefined) //Undefined




