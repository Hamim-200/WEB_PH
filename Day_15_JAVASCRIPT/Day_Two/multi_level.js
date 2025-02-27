const price = 600;


if (price >= 500) {
    const discount = price * 10 / 100;
    const payment = price - discount;
    console.log("10% discount", discount);
    console.log("You Have to pay", payment)
}
else if (price >= 400 && price < 500){
    const discount = price * 5 / 100;
    const payment = price - discount;
    console.log("5% discount", discount);
    console.log("You Have to pay", payment)
}
else if (price >= 300 && price < 400){
    const discount = price * 2 / 100;
    const payment = price - discount;
    console.log("2% discount", discount);
    console.log("You Have to pay", payment)
}
else{
    console.log("No Discount")
}