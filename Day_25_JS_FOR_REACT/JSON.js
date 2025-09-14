let student = { name: "Hamim", age: 21 };

// Convert object → JSON string
let jsonString = JSON.stringify(student);
console.log(jsonString); // '{"name":"Hamim","age":21}'

// Convert JSON string → object
let obj = JSON.parse(jsonString);
console.log(obj.name); // Hamim



fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json()) // convert to JSON
    .then(data => {
        console.log(data); // array of users
    })
    .catch(error => console.log("Error:", error));



async function getUsers() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

getUsers();


// KEYS / VAlue
let user = { id: 1, name: "Hamim", age: 21 };

console.log(Object.keys(user));   // ["id", "name", "age"]
console.log(Object.values(user)); // [1, "Hamim", 21]
