//Finding Li By usinge Tag Name(1)
const liCollection = document.getElementsByTagName('li');
for(const li of liCollection){
    //console.log(li.innerText);
}

//Changing Titel by using ID(2)
const fruitsTitle = document.getElementById('fruites-title');
fruitsTitle.innerText = 'fruits titel changed by JS'

//Finding Important By usinge Class (3)
const places =document.getElementsByClassName('important-places');
for(const place of places){
    //console.log(place.innerText);
}


//quarySelectorAll(4)
const someLi = document.querySelectorAll('.fruits-container li');
//console.log(someLi);
for (const li of someLi){
    //console.log(li.innerText);
}

//quarySelector(5) will return the first one
const firstLi = document.querySelector('.fruits-container li');
//console.log(firstLi);

//Style HTML from JS
const sections = document.querySelectorAll('section');
for (const section of sections) {
    section.style.border = '2px solid red';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '10px';
    section.style.paddingLeft = '10px';
    section.style.backgroundColor = 'lightgray';
}

// const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor = 'yellow';

// Changing From CSS
const placesContainer = document.getElementById('places-container')
placesContainer.classList.add('text-center');
placesContainer.classList.remove('large-text')
