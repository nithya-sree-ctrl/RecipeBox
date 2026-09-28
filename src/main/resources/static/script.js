const API = "";


/* =========================
   RECIPES
========================= */

async function addRecipe() {

    const recipe = {

        name: document.getElementById("recipeName").value,

        cuisine: document.getElementById("recipeCuisine").value,

        prepTime: Number(
            document.getElementById("recipePrepTime").value
        ),

        steps: document.getElementById("recipeSteps").value,

        favourite:
            document.getElementById("recipeFavourite").checked
    };

    const response = await fetch(API + "/recipes", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(recipe)
    });

    if (response.ok) {

        alert("Recipe added successfully!");

        document.getElementById("recipeName").value = "";
        document.getElementById("recipeCuisine").value = "";
        document.getElementById("recipePrepTime").value = "";
        document.getElementById("recipeSteps").value = "";

        loadRecipes();

    } else {

        alert("Failed to add recipe.");
    }
}


async function loadRecipes() {

    const response = await fetch(API + "/recipes");

    const recipes = await response.json();

    const list = document.getElementById("recipeList");

    list.innerHTML = "";

    recipes.forEach(recipe => {

        list.innerHTML += `

            <div class="item">

                <h4>${recipe.name}</h4>

                <p><b>ID:</b> ${recipe.id}</p>

                <p><b>Cuisine:</b> ${recipe.cuisine}</p>

                <p><b>Preparation:</b>
                    ${recipe.prepTime} minutes
                </p>

                <p><b>Steps:</b>
                    ${recipe.steps}
                </p>

                <p><b>Favourite:</b>
                    ${recipe.favourite ? "Yes ⭐" : "No"}
                </p>

                <button
                    class="delete-btn"
                    onclick="deleteRecipe(${recipe.id})">
                    Delete
                </button>

            </div>
        `;
    });
}


async function deleteRecipe(id) {

    await fetch(API + "/recipes/" + id, {

        method: "DELETE"
    });

    loadRecipes();
}


/* =========================
   INGREDIENTS
========================= */

async function addIngredient() {

    const ingredient = {

        name: document.getElementById("ingredientName").value,

        quantity:
            document.getElementById("ingredientQuantity").value
    };

    const response = await fetch(API + "/ingredients", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(ingredient)
    });

    if (response.ok) {

        alert("Ingredient added successfully!");

        document.getElementById("ingredientName").value = "";
        document.getElementById("ingredientQuantity").value = "";

        loadIngredients();

    } else {

        alert("Failed to add ingredient.");
    }
}


async function loadIngredients() {

    const response = await fetch(API + "/ingredients");

    const ingredients = await response.json();

    const list = document.getElementById("ingredientList");

    list.innerHTML = "";

    ingredients.forEach(ingredient => {

        list.innerHTML += `

            <div class="item">

                <h4>${ingredient.name}</h4>

                <p><b>ID:</b> ${ingredient.id}</p>

                <p><b>Quantity:</b>
                    ${ingredient.quantity}
                </p>

                <button
                    class="delete-btn"
                    onclick="deleteIngredient(${ingredient.id})">
                    Delete
                </button>

            </div>
        `;
    });
}


async function deleteIngredient(id) {

    await fetch(API + "/ingredients/" + id, {

        method: "DELETE"
    });

    loadIngredients();
}


/* =========================
   USERS
========================= */

async function addUser() {

    const user = {

        name: document.getElementById("userName").value,

        email: document.getElementById("userEmail").value
    };

    const response = await fetch(API + "/users", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(user)
    });

    if (response.ok) {

        alert("User added successfully!");

        document.getElementById("userName").value = "";
        document.getElementById("userEmail").value = "";

        loadUsers();

    } else {

        alert("Failed to add user.");
    }
}


async function loadUsers() {

    const response = await fetch(API + "/users");

    const users = await response.json();

    const list = document.getElementById("userList");

    list.innerHTML = "";

    users.forEach(user => {

        list.innerHTML += `

            <div class="item">

                <h4>${user.name}</h4>

                <p><b>ID:</b> ${user.id}</p>

                <p><b>Email:</b> ${user.email}</p>

                <button
                    class="delete-btn"
                    onclick="deleteUser(${user.id})">
                    Delete
                </button>

            </div>
        `;
    });
}


async function deleteUser(id) {

    await fetch(API + "/users/" + id, {

        method: "DELETE"
    });

    loadUsers();
}


/* =========================
   MEAL PLANS
========================= */

async function addMealPlan() {

    const mealPlan = {

        userId:
            Number(document.getElementById("mealUserId").value),

        recipeId:
            Number(document.getElementById("mealRecipeId").value),

        mealDate:
            document.getElementById("mealDate").value
    };

    const response = await fetch(API + "/mealplans", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(mealPlan)
    });

    if (response.ok) {

        alert("Meal plan added successfully!");

        loadMealPlans();

    } else {

        alert("Failed to add meal plan.");
    }
}


async function loadMealPlans() {

    const response = await fetch(API + "/mealplans");

    const mealPlans = await response.json();

    const list = document.getElementById("mealPlanList");

    list.innerHTML = "";

    mealPlans.forEach(plan => {

        list.innerHTML += `

            <div class="item">

                <h4>Meal Plan #${plan.id}</h4>

                <p><b>User ID:</b>
                    ${plan.userId}
                </p>

                <p><b>Recipe ID:</b>
                    ${plan.recipeId}
                </p>

                <p><b>Date:</b>
                    ${plan.mealDate}
                </p>

                <button
                    class="delete-btn"
                    onclick="deleteMealPlan(${plan.id})">
                    Delete
                </button>

            </div>
        `;
    });
}


async function deleteMealPlan(id) {

    await fetch(API + "/mealplans/" + id, {

        method: "DELETE"
    });

    loadMealPlans();
}


/* =========================
   LOAD DATA WHEN PAGE OPENS
========================= */

window.onload = function() {

    loadRecipes();

    loadIngredients();

    loadUsers();

    loadMealPlans();
};
