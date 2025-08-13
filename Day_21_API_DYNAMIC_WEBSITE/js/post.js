function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
}

function displayPosts(posts) {
    const postsContainer = document.getElementById('posts-container');
    for (const post of posts) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post')
        postDiv.innerHTML = `
                <h3>User ID :${post.userId} </h3>
                <h4>Post Title:${post.title}</h4>
                <p>Post Description :${post.body} </p>
        `
        postsContainer.appendChild(postDiv)
    }
}

loadPosts() 