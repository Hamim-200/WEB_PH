function stopwatch(){
    let counter = 0;
    return function(){
        counter++;
        return counter;
    }
}


const myWatch = stopwatch();
console.log(myWatch());
console.log(myWatch());
console.log(myWatch());
console.log(myWatch());
console.log(myWatch());

// A closure is when a function remembers the variables from its outer (lexical) scope, even after the outer function has finished executing.

