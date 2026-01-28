// const target = document.getElementById("title");
// target.style.color = "red";


// const allBox = document.getElementsByClassName("box");

// for(let i = 0;i<allBox.length;i++){
//     const element = allBox[i];
//     element.style.backgroundColor = "green";
//     if(element.innerText == "Box-6"){
//         element.style.backgroundColor = "blue";
//     }
// }


document.getElementById("handleAdd").addEventListener("click" , (event)=> {
    const inputValue = document.getElementById("search-box").value;
    const container = document.getElementById("comment-container");
    const p = document.createElement("p");
    p.classList.add("child")
    p.innerText = inputValue;
    container.appendChild(p);
    document.getElementById("search-box").value = "";

    const allComments = document.getElementsByClassName("child");

    for (const element of allComments){
        element.addEventListener("click", (e) =>{
            e.target.parentNode.removeChild(element);
        });
    }
});
