// Add money to the account
document.getElementById('button-cashout').addEventListener('click', function (event) {
    event.preventDefault();
    // get money to be added to the account
    const removeMoney = document.getElementById('input-cashout-money').value;
    //get the pin number
    const pinNumberInput = document.getElementById('cashout-pin-number').value;
    if (pinNumberInput === '1234') {
        //get the current ballance
        const balance = document.getElementById('account-balance').innerText;
        // add new money in total balance
        const cashoutInput = parseFloat(removeMoney)
        const balanceNumber = parseFloat(balance)
        const newBalance = balanceNumber - cashoutInput;
        //update the balance 
        document.getElementById('account-balance').innerText = newBalance;
    }
    else {
        alert('wrong')
    }
})