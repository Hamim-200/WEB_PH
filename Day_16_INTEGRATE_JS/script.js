const lilCollection = document.getElementsByTagName('li');
// console.log(lilCollection);
for (const li of lilCollection) {
    // console.log(li.innerText);
}

//Type1 - getElementsByTagName
const allheadings = document.getElementsByTagName('h1');
for (const h1 of allheadings) {
    // console.log(h1.innerText)
}

// Type2 - getElementById
const fruitesTitle = document.getElementById('fruits_title').style.textAlign='center'
fruitesTitle.innerText = 'Fruites Id change by JS';
// console.log(fruitesTitle)

//Type - 3 getElementsByClassName
const places = document.getElementsByClassName('imp-places');
for (const place of places) {
    // console.log(place.innerText)
}

//Type 4 - querySelectorAll
const allfruites = document.querySelectorAll('.fruits-container')
for (const li of allfruites) {
    console.log(li.innerText);
}

//Type 5 - querySelector