const sections = document.querySelectorAll('section');
// console.log(sections);
for(const section of sections){
    section.style.border='2px solid red';
    section.style.marginBottom='6px';
    section.style.paddingLeft='10px';
}


// const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor='orange';


const placesContainer = document.getElementById('places-container');

// class add
placesContainer.classList.add('text-center')

// remove class
placesContainer.classList.remove('lg-font')
