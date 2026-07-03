const lyrics = 'Tumi bondhu kala pakhi ami jeno ki.bosonto kale tomay bolte pari ni.'
//For Search
const doesExist = lyrics.includes('pakhi');
console.log(doesExist);

//IndexOf

console.log(lyrics.indexOf('kala'));

//finding using loop
if (lyrics.indexOf('sada') !== -1) {
    console.log('exist inside the string')
}
else {
    console.log('cannot find it');
}

//startwith
console.log(lyrics.startsWith('2mi'))

//endwith
const fileName = 'mypic.png';
const otherFile = 'mybio.jpg';
fileName.endsWith('.png')