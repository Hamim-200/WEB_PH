//1.Variable
var myName = 'Khan';

//2.Math Operation: +,-,*,/,%
//Shorthand : ++,--,+=,-=

//2.Array
var friends = ['Tamim', 'Ramim','Shamim','Kamim','Rohim'];

//Find Third Friend
var thirdFriend=friends[2];

//Changing Fourth Friend
friends[3] = 'Karim'

//3.Conditionals
// > , < , <= , >= , == , === ,!==

if (friends.length < 2){
    console.log('Less Friend')
}
else{

}

//4.Loop

var number = 0 ;
while (number <= 6){
    console.log(number)
    number++
}

for(var i = 0; i<=10;i++){

}

//5.Function
function isMoonUp(time){
    if(time > 7){
        return true;
    }
}

//6.Object
var shoppingCart = {
    sunglass:4,
    bag: 2,
    bottle:3
}