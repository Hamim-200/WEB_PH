//Adding Something (Adding New li)

//1.where  to add?
const placesList = document.getElementById('places-list');

//2.What to be added?
const li= document.createElement('li');
li.innerText = 'Chittagong';

//3.add the child
placesList.appendChild (li);

//ADDING NEW SECTION

//1.where to add
const mainContainer =document.getElementById('main-container');

//2.What to add
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'biriyani'
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'borhani'
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Kabab'
ul.appendChild(li3);

//3.Add the Child
section.appendChild(ul);
mainContainer.appendChild(section);


//==========Set innerHTML directly==========
const sectionDress =document.createElement('section');
sectionDress.innerHTML = `
<h1>Cloth</h1>
<ul>
    <li>Shirt</li>
    <li>Jacket</li>
    <li>Pant</li>
</ul>

`
mainContainer.appendChild(sectionDress);