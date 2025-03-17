const sentence = ' i want to learn.';

// TYPE 1
// let reverse = ''
// for (const letter of sentence) {
//     // console.log(letter);
//     reverse = letter + reverse;
// }
// console.log(reverse)

//TYPE 2
// let reverse = ''
// for (let i = 0;i<sentence.length;i++){
//     // console.log(i);
//     console.log(sentence[i]);
//     const letter = sentence[i];
//     reverse = letter + reverse;
// }
// console.log(reverse)

// TYPE 3
const reverseed = sentence.split('').reverse().join('');
console.log(reverseed); 