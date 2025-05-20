document.getElementById('button-login').addEventListener('click', function (event) {
    // prevent default behaviour (prevent reloading browser)
    event.preventDefault();
    //get the phpne & pin number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    //validation phone & pin
    if (phoneNumber === '0123456789' && pinNumber === '1234') {
        window.location.href = '/home.html'
    }
    else {
        alert('Please Try Again');
    }
})