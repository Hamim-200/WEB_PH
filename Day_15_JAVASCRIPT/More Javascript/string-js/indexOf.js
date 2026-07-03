const lyrics = 'Tumi bondhu kala pakhi ami jeno ki.bosonto kale tomay bolte pari ni.'


//IndexOf

console.log(lyrics.indexOf('kala'));

//finding using loop
if (lyrics.indexOf('sada') !== -1) {
    console.log('exist inside the string')
}
else {
    console.log('cannot find it');
}