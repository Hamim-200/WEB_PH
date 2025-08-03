function greeting(greetingHandler,name) {
    greetingHandler(name);
}
// const name = 'Hulo'
// greeting(name);

function greetingHandler(name) {
    console.log('Good morning', name);
}
function greetevening(name) {
    console.log('Good Evening', name);
}

greeting(greetingHandler, 'Tom cruse')
greeting(greetingHandler, 'Tom Brown')
greeting(greetevening, 'Tom Loung')


// A callback function is a function that
//is passed as an argument to another function,
//and it's usually called later inside that function.


function greet(name, callback) {
  console.log("Hello, " + name);
  callback(); // calling the passed function
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Hamim", sayBye);
