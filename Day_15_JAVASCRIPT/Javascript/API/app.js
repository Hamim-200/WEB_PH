fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        displayData(data);
    })
    .catch(error => console.error('Error fetching data:', error));

const displayData = (userData) => {
    const container = document.getElementById("userdata-container");

    userData.forEach((user) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <h4>${user.name}</h4>
            <p>${user.email}</p>
            <button onclick="showDetails(${user.id})">Details</button>
        `;
        container.appendChild(div);
    });
}

const showDetails = (userId) => {
    alert('User ID: ' + userId);
}