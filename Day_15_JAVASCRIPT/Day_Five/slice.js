const address = 'uttarakhan';
const part = address.slice(2,6);
console.log(part);



const sentence = 'Bangladesh is a beautiful country';
console.log(sentence.split());
console.log(sentence.split(''));
console.log(sentence.split(' '));

const friendsStr = 'Rahim,Karim,fahim,Amin,Rafiq';
const friends = friendsStr.split(',');
console.log(friends);

const realfriend = [ 'Rahim', 'Karim', 'fahim', 'Amin', 'Rafiq' ];
console.log(realfriend.join());