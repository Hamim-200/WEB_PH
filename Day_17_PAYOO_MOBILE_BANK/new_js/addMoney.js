document.getElementById('button-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    console.log('addmoney button clicked');

    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');
    console.log('add money with perameter', addMoney);
    console.log('Pin number with perameter', pinNumber);
})

console.log('hello');