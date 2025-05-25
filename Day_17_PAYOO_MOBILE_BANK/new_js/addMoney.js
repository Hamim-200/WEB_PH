document.getElementById('button-add-money').addEventListener('click', function (event) {
    event.preventDefault();


    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');

    if (pinNumber == 12) {
        const balance = getTextFieldValueById('account-balance');
        const newbalance = balance + addMoney;
        document.getElementById('account-balance').innerText = newbalance;
    }
    else {
        alert('Failed to add the money')
    }

})
