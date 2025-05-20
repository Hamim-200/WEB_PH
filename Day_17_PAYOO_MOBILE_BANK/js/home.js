// Add money to the account
document.getElementById('button-add-money').addEventListener('click', function (event) {
    event.preventDefault();

    // get money to be added to the account
    const addMoney = document.getElementById('input-add-money').value;
    console.log(addMoney);

    //get the pin number
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput)
})