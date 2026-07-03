function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentTotalString);
    return currentPhoneTotal;
}

function setTextelementValueById(elementId,value){
    const subtotalelement = document.getElementById(elementId);
    subtotalelement.innerText = value;
}

function calculateSubTotal(){
     // calculate total
     const currentPhoneTotal = getTextElementValueById('phone-total');
     const currentCasetotal = getTextElementValueById('case-total');


     const currentSubTotal = currentPhoneTotal +currentCasetotal;
     setTextelementValueById('sub-total',currentSubTotal);
    
     //calculate tax 
     const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
     const taxAmount = parseFloat(taxAmountString);
     setTextelementValueById('tax-amount',taxAmount);

     const finalAmount = currentSubTotal + taxAmount;
     setTextelementValueById('final-total',finalAmount);
}