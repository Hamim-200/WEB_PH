const lyrics = 'Tumi bondhu kala pakhi ami jeno ki.bosonto kale tomay bolte pari ni.'


const searchString = 'Pakhi';

const lyricsLowerCase = lyrics.toLowerCase();
const searchStringLower = searchString.toLowerCase();

const doesExist = lyricsLowerCase.includes(searchStringLower);
const doesExistoneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());


console.log(doesExist);
console.log(doesExistoneLine);