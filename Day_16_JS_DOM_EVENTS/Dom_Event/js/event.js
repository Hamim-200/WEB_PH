 // Learning-1 ===== CHANGING BACKGROUND COLOR ======
 
 // Function For make Background RED System-2
 function makeRed(){
    document.body.style.backgroundColor='red';
}

//System -3 (Using ID) make different function and call function
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
function makeBlue(){
    document.body.style.backgroundColor='blue';
}

//System -3 (Using ID) make function in one line
const greenButton = document.getElementById('make-green');
greenButton.onclick = function makeGreen(){
 document.body.style.backgroundColor = 'green';

}

//System- 4 Using addEventListener
const goldenButton = document.getElementById('make-golden');
goldenButton.addEventListener('click', makeGolden);
function makeGolden(){
    document.body.style.backgroundColor ='goldenrod';
}

//System -5 Simplest Way
document.getElementById('make-pink').addEventListener('click',function(){
    document.body.style.backgroundColor = 'pink';
})


// Learning-2 ===== CHANGING TEXT ======

// Type-1 using 'onclick'
function handleOnClick(){
    const handleStatus = document.getElementById('handle-status');
    handleStatus.innerText = 'Handle By Function attached on onClick attribute'
}

 //Type-2 using 'addEventListener'
document.getElementById('event-listner').addEventListener('click',function(){
    const handleStatus = document.getElementById('handle-status');
    handleStatus.innerText = 'Handle By Function attached on addEventListener'
})


// Learning-3 ====== Update Whatever I type =======

document.getElementById('btn-update').addEventListener('click',function(){
    const inputField = document.getElementById('input-field');

    //getting the written value
    const inputText = inputField.value;

    //set the value
    const p = document.getElementById('input-text-display');
    p.innerText = inputText;
    inputField.value = '';
})
