// function greeting(person){
//     console.log(person);
// }
// const name = 'Honey Sing';
// const numbers = [45,54,78];
// greeting(numbers);

function greeting(greetingHandler,name){
    greetingHandler(name);
}

function greetingHandler(name){
    console.log('Good Morning',name);
}

function greetingEvening(name){
    console.log('Good Evening',name);
}
function greetingNight(name){
    console.log('Good Night',name);
}


greeting(greetingHandler,'Jon Duew');
greeting(greetingHandler,'Jon Cruise');
greeting(greetingHandler,'Jon Sina');
greeting(greetingEvening,'Solayman');
greeting(greetingNight,'Rasel');