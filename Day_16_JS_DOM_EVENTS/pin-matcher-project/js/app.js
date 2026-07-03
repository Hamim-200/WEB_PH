function getpin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getpin();
    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click',function(){
    const pin = getpin();

    //display pin
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;

})

document.getElementById('calculator').addEventListener('click',function(event){
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('typed-number');
    const previoustypeNumber = typeNumberField.value;

    if(isNaN(number)){
        if(number === 'C'){
            typeNumberField.value = ' ';
        }
        else if(number === '<'){
            const digits = previoustypeNumber .split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumberField.value = remainingDigits;
        }
    }else{
        const newTypenumber = previoustypeNumber + number;
        typeNumberField.value = newTypenumber;
    }

})

document.getElementById('verify-pin').addEventListener('click',function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typeNumberField = document.getElementById('typed-number');
    const typeNumber = typeNumberField.value;

    const pinSuccessmessage = document.getElementById('pin-success');
    const pinWrongMessage = document.getElementById('pin-wrong');

    if(typeNumber === currentPin){
        pinSuccessmessage.style.display = 'block';
        pinWrongMessage.style.display='none';
    }
    else{
        pinWrongMessage.style.display='block';
        pinSuccessmessage.style.display = 'none';
    }
})

