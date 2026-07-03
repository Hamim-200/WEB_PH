function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayTudos(data))
}

function displayTudos(todos){
    //Get the container
    const todoContainer = document.getElementById('todo-container');
    for(const todo of todos){
        //Create the child element
        const todoDiv = document.createElement('div');
        // set innerText or innerHTML
        todoDiv.innerHTML = `
            <p>User Id: ${todo.id} </p>
            <h2>Title: ${todo.title} </h2>
            <h3>Is Complete? - ${todo.completed === true? 'Completed':'Not Complete'} </h3>
        `;
        //append child
        todoContainer.appendChild(todoDiv);

    }

}
loadTodos();