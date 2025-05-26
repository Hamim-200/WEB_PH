document.getElementById('button-cashout').addEventListener('click', function (event) {
    event.preventDefault();

    const cashOut = getInputFieldValueById('input-cashout-money');
    const pinNumber = getInputFieldValueById('cashout-pin-number')


    if (pinNumber == 12) {
        const balance = getTextFieldValueById('account-balance');

        if (cashOut > balance) {
            alert('you dont have enough money to cash out');
        }
        const newbalance = balance - cashOut;
        document.getElementById('account-balance').innerText = newbalance;

        // add to transaction history
        const div = document.createElement('div');
        div.classList.add('bg-red-300');
        div.innerHTML = `
            <h4 class = "text-2xl font-cold">cash out</h4>
            <p>${cashOut} withdraw. New Balance ${newbalance}</p>        
        `
        document.getElementById('transactions-container').appendChild(div);
    }
    else {
        alert('Failed to add the money')
    }
})