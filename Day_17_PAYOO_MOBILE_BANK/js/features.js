// show cashout form

document.getElementById('btn-show-cashout').addEventListener('click', function () {
    document.getElementById('cashout-form').classList.remove('hidden');

    //hide the add money button for cashout
    document.getElementById('add-money-form').classList.add('hidden');
})

//show add money form and hide the cashout form
document.getElementById('btn-show-addmoney').addEventListener('click', function () {
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cashout-form').classList.add('hidden');
})