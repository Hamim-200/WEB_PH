const users = [{id:1,name:'Abul',job:'Doctor'}];

// console.log(users[0].name);

const data ={
    count: 5000,
    data: [
        {id:1,name: 'Babul',job:'Leader'},
        {id:2,name: 'Dabul',job:'Leader'},
    ]
}
const firstJob = data.data[0].job;
// console.log(firstJob);

const user = {
    id:5001,
    name:'Tamim Iqubal',
    address: {
        street:{
            first: '35/A Nilkhet',
            second: 'third floor',
            third: 'right side'
        },
        postoffice:'Cantonment',
        city: 'Dhaka'
    }
}

const userFloor = user.address.street.second;
console.log(userFloor);