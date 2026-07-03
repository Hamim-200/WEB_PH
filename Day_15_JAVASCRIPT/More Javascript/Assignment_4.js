//Task-1
function radianToDegree(radian) {
    if (typeof radian !== 'number') {
        return 'Enter a number '
    }
    else {
        const degree = radian * (180 / Math.PI);//Radian to degree
        return degree.toFixed(2); // return value
    }
}
const degree = radianToDegree(10);
console.log(degree);


//Task 2
function isJavaScriptFile(string) {
    if (string = string.endsWith('.js')) {
        return true;
    }
    else {
        return false;
    }
}
//object decleration
console.log(isJavaScriptFile('app.js'));


//Task-3
function oilPrice(dieselQuantity, petrolQuantity, octanQuantity) {
    //Given price for oil
    let dieselPerLiter = 114;
    let petrolPerLiter = 130;
    let octanPerLiter = 135;

    let dieselTotalPrice = dieselPerLiter * dieselQuantity;
    let petrolTotalPrice = petrolPerLiter * petrolQuantity;
    let octanTotalPrice = octanPerLiter * octanQuantity;

    const totalPrice = dieselTotalPrice + petrolTotalPrice + octanTotalPrice;
    return totalPrice;
}

//oil quantity // object decleration
const dieselLiter = 30;
const petrolLiter = 20;
const octenLiter = 10;

const totalPrice = oilPrice(dieselLiter, petrolLiter, octenLiter);
console.log(totalPrice);



//Task-4
function publicBusFare(totalPassenger) {
    let seatInBus = 50;
    let seatInMicro = 11;
    let publicBusTicketPrice = 250;
    //Data type checking
    if (typeof (totalPassenger) == "number") {
        if (totalPassenger == "" || totalPassenger == "undefined" || totalPassenger <= 0) {
            return "Please Enter Toatl Person";
        }
        else {
            if (totalPassenger < 50) {
                let publicBusPassenger = totalPassenger % seatInMicro;
                let publicBusFare = publicBusPassenger * publicBusTicketPrice;
                return publicBusFare;
            }
            else if (totalPassenger == 50) {
                let publicBusFare = totalPassenger % seatInBus;
                return publicBusFare;
            }

            else if (totalPassenger > 50) {
                let extraPassenger = totalPassenger % seatInBus;

                if (extraPassenger < 11) {
                    let publicBusFare = extraPassenger * publicBusTicketPrice;
                    return publicBusFare;
                }

                else if (extraPassenger == 11) {
                    let publicBusFare = extraPassenger % seatInMicro;
                    return publicBusFare;
                }

                else if (extraPassenger > 11) {
                    let publicBusPassenger = extraPassenger % seatInMicro;
                    let publicBusFare = publicBusPassenger * publicBusTicketPrice;
                    return publicBusFare;
                }
            }
        }
    }
    else {
        return "Please enter number in function perameter";
    }
}

//object decleration
let pblicBusCost = publicBusFare(55);
console.log(pblicBusCost);


//Task 5
function isBestFriend(person1, person2) {

    //Data type checking

    if (typeof person1 == "object" && typeof person2 == "object") {
        if (person1.name == person2.friend && person1.friend == person2.name) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return "Enter Name";
    }
}

//object decleration

const person1 = { name: 'Abul', friend: 'Babul' };
const person2 = { name: 'Babul', friend: 'Abul' };

let bestFriends = isBestFriend(person1, person2);
console.log(bestFriends);