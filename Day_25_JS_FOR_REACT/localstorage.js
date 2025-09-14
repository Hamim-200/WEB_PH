localStorage.setItem("name", "Hamim");
localStorage.setItem("age", 21);


let userName = localStorage.getItem("name");
console.log(userName); // "Hamim"


localStorage.removeItem("age");

localStorage.clear();

let student = { name: "Hamim", dept: "Engineering" };

// store
localStorage.setItem("student", JSON.stringify(student));

// retrieve
let data = JSON.parse(localStorage.getItem("student"));
console.log(data.name); // Hamim


let todos = ["Study", "Practice JS", "Donate Blood"];

// Save to localStorage
localStorage.setItem("todos", JSON.stringify(todos));

// Get back
let savedTodos = JSON.parse(localStorage.getItem("todos"));
console.log(savedTodos); // ["Study", "Practice JS", "Donate Blood"]
