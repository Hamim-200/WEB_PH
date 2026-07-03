const fish = {
    name: 'Hilsa',
    address : 'Meghna Nodi',
    color: 'Silver',
    id: '01921',
    price:'4000'
}
// const phone =fish.phone;

const {id} = fish;
console.log(id);

//ARRAY DESTRUCTURING
const [first,another] = [44,99];
console.log(first,another);

// FUNCTION 
function getNames(){
    return ['Alim', 'Halim'];
}
const [baba,chacha] = getNames();
console.log(chacha,baba);