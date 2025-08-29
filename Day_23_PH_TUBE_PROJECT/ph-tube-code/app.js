// 1 - Fetch, Load and Show categories on HTMl
//create loadCategories
const loadCategories = () => {
    //fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then((res) => res.json())
        .then((data) => displayCategories(data.categories))
        .catch((error) => console.log(error))
}

const loadViedos = () => {
    //fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then((res) => res.json())
        .then((data) => displayViedos(data.videos))
        .catch((error) => console.log(error))
};

const displayViedos = (videos) => {
    const videoContainer = document.getElementById("videos");
    videos.forEach(video => {
        console.log(video);
        const card = document.createElement("div");
        card.classList = "card card-compact w-96"
        card.innerHTML = `
        <figure class="h-[200px]">
        <img src=${video.thumbnail} class="h-full w-full object-cover" alt="thumbnail" />
        </figure>
        <div class="px-0 py-2 flex gap-2">
            <div>
                <img class="w-10 h-10 rounded-full object-cover" src="${video.authors[0].profile_picture}"alt="thumbnail" />
            </div>
            <div>
            <h2 class="font-bold">${video.title}</h2>
            <div class="flex items-center gap-2">
                <p class="text-gray-400">${video.authors[0].profile_name}</p>
                <img class="w-5 " src=" https://img.icons8.com/?size=100&id=91kLZWvmd4sg&format=png&color=000000" />
            <div>
            <p></p>
            </div>
           
        </div>
 
        `
        videoContainer.append(card);
    })
}

//create displayCatogries
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("categories")
    categories.forEach((item) => {
        //create a button
        const button = document.createElement("button");
        button.classList = "btn";
        button.innerText = item.category;

        // add button to categories
        categoryContainer.append(button);
    })
}



loadViedos();
loadCategories();
displayCategories();
