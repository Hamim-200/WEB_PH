function add(num1, num2) {
    console.log(num1, num2);
    var sum = num1 + num2;
    return sum;
}

var total = add(40, 60);
console.log('Total= ', total);


function bringSingara(money) {
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity
}

var myTaka = 150;
var singaras = bringSingara(myTaka);
console.log('Get Singara = ', singaras);