function updateCaseNumber(isIncrease){
    const casenumberField = document.getElementById('case-number-field');
    const casenumberstring = casenumberField.value;
    const previousCaseNumber = parseInt(casenumberstring);
    let newCaseNumber ;

    if(isIncrease){
        newCaseNumber =  previousCaseNumber+1;
    }
    else{
        newCaseNumber =  previousCaseNumber-1;
    }
    casenumberField.value = newCaseNumber;
    return newCaseNumber;
}

function updatePrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
} 

document.getElementById('btn-case-plus').addEventListener('click',function(){
   const newCaseNumber = updateCaseNumber(true);
   updatePrice(newCaseNumber);
   calculateSubTotal()
});

document.getElementById('btn-case-minus').addEventListener('click',function(){
    const newCaseNumber = updateCaseNumber(false);
    updatePrice(newCaseNumber);
    calculateSubTotal()
})