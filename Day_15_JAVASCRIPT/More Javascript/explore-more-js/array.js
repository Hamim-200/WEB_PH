const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = { id: 121, class: 11, name: 'Agun' };
const friends = [12, 13, 14, 15, 16, 17,18, 12];
function add(num1, num2) {
    return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(typeof add);

//check array using Array.isArray
console.log(Array.isArray(friends));
console.log(friends.includes(19));


//Concat-combine two or more array
const newFriends = [21, 22, 23, 24, 25, 26]
const allFriend = newFriends.concat(friends);
console.log(allFriend)