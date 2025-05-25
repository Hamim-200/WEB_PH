document.getElementById('button-cashout').addEventListener('click',function(event){
    event.preventDefault();

    const cashOut = getInputFieldValueById('input-cashout-money');
    const pinNumber = getInputFieldValueById('cashout-pin-number')
    
    
      if (pinNumber == 12) {
        const balance = getTextFieldValueById('account-balance');
        const newbalance = balance - cashOut;
        document.getElementById('account-balance').innerText = newbalance;
    }
    else {
        alert('Failed to add the money')
    }
})