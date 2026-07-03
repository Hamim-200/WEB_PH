function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberstring = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberstring);
    let newPhoneNumber;
    if(isIncrease){
        newPhoneNumber =  previousPhoneNumber+1;
    }
    else{
        newPhoneNumber =  previousPhoneNumber-1;
    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;

}

function updatePhonePrice(newphoneNumber){
    const phoneTotalPrice = newphoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
} 

document.getElementById('btn-phone-plus').addEventListener('click',function(){
    const newphoneNumber = updatePhoneNumber(true);
    updatePhonePrice(newphoneNumber);
    calculateSubTotal()
})

document.getElementById('btn-phone-minus').addEventListener('click',function(){
    const newphoneNumber = updatePhoneNumber(false);
    updatePhonePrice(newphoneNumber);
    calculateSubTotal()
})