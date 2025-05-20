// Add money to the account
document.getElementById('button-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    // get money to be added to the account
    const addMoney = document.getElementById('input-add-money').value;
    //get the pin number
    const pinNumberInput = document.getElementById('input-pin-number').value;
    if (pinNumberInput === '1234') {
        //get the current ballance
        const balance = document.getElementById('account-balance').innerText;
        // add new money in total balance
        const addMoneyInput = parseFloat(addMoney)
        const balanceNumber = parseFloat(balance)
        const newBalance = addMoneyInput + balanceNumber;
        //update the balance 
        document.getElementById('account-balance').innerText = newBalance;
    }
    else {
        alert('wrong')
    }
})