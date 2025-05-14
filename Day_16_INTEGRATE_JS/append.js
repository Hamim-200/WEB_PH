// 1. where to add
const placesList = document.getElementById('places-list');

//2. What to be added
const li = document.createElement('li');
li.innerText = 'new places added';

//3.add the child
placesList.appendChild(li);



const mainContainer = document.getElementById('main-container');

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My food list';
section.appendChild(h1);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'Pizza'
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Burger'
ul.appendChild(li2);

section.appendChild(ul);
mainContainer.appendChild(section);


//set innerHTML directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
 <h1>My Dress</h1>
    <ul>
        <li>Shirt</li>
        <li>Pant</li>
        <li>tshirt</li>
    </ul>

`
mainContainer.appendChild(sectionDress)