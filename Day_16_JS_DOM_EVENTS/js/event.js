// Op-1 -- In line js use

// Op-2 -- Add on click function
function makeRed() {
    document.body.style.backgroundColor = 'red';
}


// Op-3 -- By using ID
const makeGreenbutton = document.getElementById('make-green');
makeGreenbutton.onclick = makeGreen;

function makeGreen() {
    document.body.style.backgroundColor = 'green';
}

// Op -- 4  (almost same as op 3)

const orangeButton = document.getElementById('make-orange');
orangeButton.onclick = function makeorange() {
    document.body.style.backgroundColor = 'orange';
}

// Op -- 5 
const blackButton = document.getElementById('make-black');
blackButton.addEventListener('click', makeBlack)

function makeBlack() {
    document.body.style.backgroundColor = 'black';
}

// Op -- 5 another
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', function makepink() {
    document.body.style.backgroundColor = 'pink';
})

// Op -- 5 FINAL
document.getElementById('make-gray').addEventListener('click',function(){
     document.body.style.backgroundColor = 'DarkGray';
})

