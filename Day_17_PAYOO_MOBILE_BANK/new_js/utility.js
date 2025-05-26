function getInputFieldValueById(id) {
    const inputvalue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputvalue);
    return inputNumber;
}


function getTextFieldValueById(id) {
    const textvalue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textvalue);
    return textNumber;
}

function showSectionById(id){
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cashout-form').classList.add('hidden');
    document.getElementById('transtion-section').classList.add('hidden');

    //show the section with the provided ID
    document.getElementById(id).classList.remove('hidden');
}