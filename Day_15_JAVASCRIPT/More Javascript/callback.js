function greeting(greetingHandler, name) {
    greetingHandler(name);
}

function greetingHandler(name) {
    console.log('Good Morning', name);

}

function greetevening(name) {
    console.log('Good Evening', name);
}
greeting(greetingHandler, 'Tom Hanks')
greeting(greetevening, 'Tom Brus')

greeting(greetingHandler, 'Tom Hanks')