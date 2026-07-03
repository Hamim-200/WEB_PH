function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))

}
function displayPost(posts){
    const postContainer = document.getElementById('posts-container');
    for(const post of posts){        
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        console.log(post);
        postDiv.innerHTML = `
            <h2>User - ${post.id}</h2>
            <h3>Post Titel - ${post.title}</h3>
            <h4>Post Description: ${post.body} </h4>
        `;
        postContainer.appendChild(postDiv);
    }

}
loadPost();