function getTimeString(time) {
    const hour = parseInt(time / 3600);
    let remainingSecond = time % 3600;
    const minute = parseInt(remainingSecond / 60);
    remainingSecond = remainingSecond % 60;
    return `${hour} hour ${minute} minute ${remainingSecond} second ago`;
}

// 1 - Fetch, Load and Show categories on HTMl
//create loadCategories
const loadCategories = () => {
    //fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then((res) => res.json())
        .then((data) => displayCategories(data.categories))
        .catch((error) => console.log(error))
}

const removeActiveClass = () => {
    const buttons = document.getElementsByClassName("category-btn")
    for (let btn of buttons) {
        btn.classList.remove("active");
    }
};
const loadViedos = (searchText = "") => {
    //fetch the data
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`)
        .then((res) => res.json())
        .then((data) => displayViedos(data.videos))
        .catch((error) => console.log(error))
};

const loadCategoryVideos = (id) => {
    // alert(id);
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
        .then((res) => res.json())
        .then((data) => {
            removeActiveClass();

            const activeBtn = document.getElementById(`btn-${id}`)
            activeBtn.classList.add("active");
            displayViedos(data.category)
        })
        .catch((error) => console.log(error))
}
const loadDetails = async (videoId)=>{
    const url = `https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`;
    const res = await fetch(url);
    const data = await res.json();
    displaydetails(data.video);
};
const displaydetails = (video)=>{
    console.log(video);
    const detailContainer = document.getElementById("modal-content");

    detailContainer.innerHTML = `
        <img src = ${video.thumbnail}/>
        <p>${video.description}</p>
    `

    document.getElementById("showModalData").click();
};
const displayViedos = (videos) => {
    const videoContainer = document.getElementById("videos");
    videoContainer.innerHTML = "";

    if (videos.length == 0) {
        videoContainer.classList.remove("grid");
        videoContainer.innerHTML = `
        <div class="min-h-[300px] flex flex-col gap-5 justify-center items-center">
            <img src = "assests/Icon.png"/>
            <h2 class="text-center text-xl font-bold">
                No Content here in this category
            </h2>
        </div>
        `;
        return;
    }
    else {
        videoContainer.classList.add("grid");
    }

    videos.forEach(video => {
        console.log(video);
        const card = document.createElement("div");
        card.classList = "card card-compact w-96"
        card.innerHTML = `
        <figure class="h-[200px] relative">
        <img src=${video.thumbnail} class="h-full w-full object-cover" alt="thumbnail" />

        ${video.others.posted_date?.length == 0 ? "" : `<span class="absolute right-2 text-xs bottom-2 bg-black rounded p-1 text-white">${getTimeString(video.others.posted_date)}</span>`
            }
        
        </figure>
        <div class="px-0 py-2 flex gap-2">
            <div>
                <img class="w-10 h-10 rounded-full object-cover" src="${video.authors[0].profile_picture}"alt="thumbnail" />
            </div>
            <div>
            <h2 class="font-bold">${video.title}</h2>
            <div class="flex items-center gap-2">
                <p class="text-gray-400">${video.authors[0].profile_name}</p>
            
                ${video.authors[0].verified == true ? '<img class="w-5 " src=" https://img.icons8.com/?size=100&id=91kLZWvmd4sg&format=png&color=000000" />' : ""}
            <div>
            <p><button onclick="loadDetails('${video.video_id}')" class="btn btn-sm btn-error">Details</button></p>
            </div>
           
        </div>
 
        `;
        videoContainer.append(card);
    })
}

//create displayCatogries
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("categories")
    categories.forEach((item) => {
        //create a button
        const buttonContainer = document.createElement("div");
        buttonContainer.innerHTML =
            `
        <button id="btn-${item.category_id}" onclick="loadCategoryVideos(${item.category_id})" class="btn category-btn">
        ${item.category}
        </button>
        
        `
        // button.classList = "btn";
        // button.innerText = item.category;
        // add button to categories
        categoryContainer.append(buttonContainer);
    })
}

document.getElementById("search-inputs").addEventListener("keyup",(e)=>{
loadViedos(e.target.value);
});


loadViedos();
loadCategories();
displayCategories();



// module 35-8 ::: 9:36