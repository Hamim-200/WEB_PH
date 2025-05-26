document.getElementById('button-add-money').addEventListener('click', function (event) {
    event.preventDefault();


    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');

    if (isNaN(addMoney)) {
        alert('enter cash amonut');
        return;
    }

    if (pinNumber == 12) {
        const balance = getTextFieldValueById('account-balance');
        const newbalance = balance + addMoney;
        document.getElementById('account-balance').innerText = newbalance;

        // add to transaction history
        const p = document.createElement('p');
        p.innerText = `Added: ${addMoney} tk. New Balance = ${newbalance};`
        document.getElementById('transactions-container').appendChild(p);
    }
    else {
        alert('Failed to add the money')
    }

})
