const numbers = [1, 4, 5, 6, 4, 12]
const players = [75, 65, 67, 29, 87, 58, 62];

const selected = players.filter(p => p > 70);
console.log(selected);


const friends = ['Tom', 'jhon', 'emon', 'rimon', 'imi']

const bestFriends = friends.filter(friend => friend.length < 4);
console.log(bestFriends);

// filter: Returns a new array containing only the elements that pass a test (return true in the callback).