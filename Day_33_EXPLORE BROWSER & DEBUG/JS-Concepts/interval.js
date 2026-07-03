console.log('first');
console.log('Second');
let seconds = 0;
const intervalId = setInterval(() => {
    // console.log(seconds++);
    console.log(++seconds);
    if (seconds === 10) {
        clearInterval(intervalId);
    }

}, 1500)

console.log('fourth');
console.log('fifth');