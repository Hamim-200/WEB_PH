const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals));
}

const displayMeals = meals => {
    //Step-1:Container Element
    const mealsContainer = document.getElementById('meal-container');
    mealsContainer.innerHTML = '';
    meals.forEach(meal => {
        //Step-2: Create Child for each element
        const mealdiv = document.createElement('div');
        mealdiv.classList.add('col');
        //step-3 set content of the child
        mealdiv.innerHTML = `
            <div class = "card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 100)}....</p>
                    <button onclick="loadMealDetail2(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">Details
                    </button>
                </div>
            </div>
        `;
        //Step-4 Append child
        mealsContainer.appendChild(mealdiv);
    })
}

//Searching Food
const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadMeals(searchText);
    searchField.value = '';
}

//MODAL
const loadMealDetail = (idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealsDetails(data.meals[0]));
}

//MODAL USING "Async Await"
const loadMealDetail2 = async(idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    const res = await fetch(url);
    const data = await res.json();
    displayMealsDetails(data.meals[0]);

}
//Load Modal Details 
const displayMealsDetails = meal => {
   document.getElementById('mealDetailsLabel').innerHTML = meal.strMeal;
   const mealsDetails = document.getElementById('mealDetailsLabelBody');
   mealsDetails.innerHTML = `
        <p class="card-text">${meal.strInstructions}</p>
   `
}
loadMeals('');