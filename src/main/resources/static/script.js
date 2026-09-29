// ======================================================
// RECIPE
// ======================================================

async function addRecipe() {

    const recipe = {
        name: document.getElementById("recipeName").value,
        cuisine: document.getElementById("recipeCuisine").value,
        prepTime: Number(document.getElementById("recipePrepTime").value),
        steps: document.getElementById("recipeSteps").value,
        favourite: document.getElementById("recipeFavourite").checked
    };

    try {

        const response = await fetch("/recipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recipe)
        });

        if (response.ok) {

            // Clear form
            document.getElementById("recipeName").value = "";
            document.getElementById("recipeCuisine").value = "";
            document.getElementById("recipePrepTime").value = "";
            document.getElementById("recipeSteps").value = "";
            document.getElementById("recipeFavourite").checked = false;

            // Refresh list
            loadRecipes();

        } else {
            console.error("Failed to add recipe.");
        }

    } catch (error) {
        console.error("Error adding recipe:", error);
    }
}


async function loadRecipes() {

    const list = document.getElementById("recipeList");

    // Immediately clear old data
    list.innerHTML = "<p>Refreshing...</p>";

    try {

        const response = await fetch("/recipes?time=" + Date.now());

        if (!response.ok) {
            throw new Error("Unable to load recipes");
        }

        const recipes = await response.json();

        list.innerHTML = "";

        if (recipes.length === 0) {
            list.innerHTML = "<p>No recipes found.</p>";
            return;
        }

        recipes.forEach(recipe => {

            list.innerHTML += `
                <div class="item">

                    <h4>${recipe.name}</h4>

                    <p>
                        <b>ID:</b> ${recipe.id}
                    </p>

                    <p>
                        <b>Cuisine:</b> ${recipe.cuisine}
                    </p>

                    <p>
                        <b>Preparation:</b> ${recipe.prepTime} minutes
                    </p>

                    <p>
                        <b>Steps:</b> ${recipe.steps}
                    </p>

                    <p>
                        <b>Favourite:</b>
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

    } catch (error) {

        console.error(error);

        list.innerHTML =
            "<p>Unable to refresh recipes.</p>";
    }
}


async function deleteRecipe(id) {

    try {

        const response = await fetch("/recipes/" + id, {
            method: "DELETE"
        });

        if (response.ok) {
            loadRecipes();
        }

    } catch (error) {

        console.error("Error deleting recipe:", error);

    }
}


// ======================================================
// INGREDIENT
// ======================================================

async function addIngredient() {

    const ingredient = {
        name: document.getElementById("ingredientName").value,
        quantity: document.getElementById("ingredientQuantity").value
    };

    try {

        const response = await fetch("/ingredients", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ingredient)
        });

        if (response.ok) {

            // Clear form
            document.getElementById("ingredientName").value = "";
            document.getElementById("ingredientQuantity").value = "";

            // Refresh list
            loadIngredients();

        } else {
            console.error("Failed to add ingredient.");
        }

    } catch (error) {

        console.error("Error adding ingredient:", error);

    }
}


async function loadIngredients() {

    const list = document.getElementById("ingredientList");

    // Immediately clear old data
    list.innerHTML = "<p>Refreshing...</p>";

    try {

        const response =
            await fetch("/ingredients?time=" + Date.now());

        if (!response.ok) {
            throw new Error("Unable to load ingredients");
        }

        const ingredients = await response.json();

        list.innerHTML = "";

        if (ingredients.length === 0) {

            list.innerHTML =
                "<p>No ingredients found.</p>";

            return;
        }

        ingredients.forEach(ingredient => {

            list.innerHTML += `
                <div class="item">

                    <h4>${ingredient.name}</h4>

                    <p>
                        <b>ID:</b> ${ingredient.id}
                    </p>

                    <p>
                        <b>Quantity:</b> ${ingredient.quantity}
                    </p>

                    <button
                        class="delete-btn"
                        onclick="deleteIngredient(${ingredient.id})">
                        Delete
                    </button>

                </div>
            `;
        });

    } catch (error) {

        console.error(error);

        list.innerHTML =
            "<p>Unable to refresh ingredients.</p>";
    }
}


async function deleteIngredient(id) {

    try {

        const response =
            await fetch("/ingredients/" + id, {
                method: "DELETE"
            });

        if (response.ok) {
            loadIngredients();
        }

    } catch (error) {

        console.error(
            "Error deleting ingredient:",
            error
        );

    }
}


// ======================================================
// USER
// ======================================================

async function addUser() {

    const user = {
        name: document.getElementById("userName").value,
        email: document.getElementById("userEmail").value
    };

    try {

        const response = await fetch("/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        if (response.ok) {

            // Clear form
            document.getElementById("userName").value = "";
            document.getElementById("userEmail").value = "";

            // Refresh list
            loadUsers();

        } else {
            console.error("Failed to add user.");
        }

    } catch (error) {

        console.error("Error adding user:", error);

    }
}


async function loadUsers() {

    const list = document.getElementById("userList");

    // Immediately clear old data
    list.innerHTML = "<p>Refreshing...</p>";

    try {

        const response =
            await fetch("/users?time=" + Date.now());

        if (!response.ok) {
            throw new Error("Unable to load users");
        }

        const users = await response.json();

        list.innerHTML = "";

        if (users.length === 0) {

            list.innerHTML =
                "<p>No users found.</p>";

            return;
        }

        users.forEach(user => {

            list.innerHTML += `
                <div class="item">

                    <h4>${user.name}</h4>

                    <p>
                        <b>ID:</b> ${user.id}
                    </p>

                    <p>
                        <b>Email:</b> ${user.email}
                    </p>

                    <button
                        class="delete-btn"
                        onclick="deleteUser(${user.id})">
                        Delete
                    </button>

                </div>
            `;
        });

    } catch (error) {

        console.error(error);

        list.innerHTML =
            "<p>Unable to refresh users.</p>";
    }
}


async function deleteUser(id) {

    try {

        const response =
            await fetch("/users/" + id, {
                method: "DELETE"
            });

        if (response.ok) {
            loadUsers();
        }

    } catch (error) {

        console.error(
            "Error deleting user:",
            error
        );

    }
}


// ======================================================
// MEAL PLAN
// ======================================================

async function addMealPlan() {

    const mealPlan = {

        userId:
            Number(
                document.getElementById("mealUserId").value
            ),

        recipeId:
            Number(
                document.getElementById("mealRecipeId").value
            ),

        mealDate:
            document.getElementById("mealDate").value
    };

    try {

        const response =
            await fetch("/mealplans", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(mealPlan)

            });

        if (response.ok) {

            // Clear form
            document.getElementById("mealUserId").value = "";
            document.getElementById("mealRecipeId").value = "";
            document.getElementById("mealDate").value = "";

            // Refresh list
            loadMealPlans();

        } else {
            console.error("Failed to add meal plan.");
        }

    } catch (error) {

        console.error(
            "Error adding meal plan:",
            error
        );

    }
}


async function loadMealPlans() {

    const list =
        document.getElementById("mealPlanList");

    // Immediately clear old data
    list.innerHTML = "<p>Refreshing...</p>";

    try {

        const response =
            await fetch(
                "/mealplans?time=" + Date.now()
            );

        if (!response.ok) {
            throw new Error(
                "Unable to load meal plans"
            );
        }

        const mealPlans =
            await response.json();

        list.innerHTML = "";

        if (mealPlans.length === 0) {

            list.innerHTML =
                "<p>No meal plans found.</p>";

            return;
        }

        mealPlans.forEach(plan => {

            list.innerHTML += `
                <div class="item">

                    <h4>
                        Meal Plan #${plan.id}
                    </h4>

                    <p>
                        <b>User ID:</b>
                        ${plan.userId}
                    </p>

                    <p>
                        <b>Recipe ID:</b>
                        ${plan.recipeId}
                    </p>

                    <p>
                        <b>Date:</b>
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

    } catch (error) {

        console.error(error);

        list.innerHTML =
            "<p>Unable to refresh meal plans.</p>";
    }
}


async function deleteMealPlan(id) {

    try {

        const response =
            await fetch(
                "/mealplans/" + id,
                {
                    method: "DELETE"
                }
            );

        if (response.ok) {
            loadMealPlans();
        }

    } catch (error) {

        console.error(
            "Error deleting meal plan:",
            error
        );

    }
}


// ======================================================
// PAGE LOAD
// ======================================================

window.addEventListener("load", function () {

    loadRecipes();

    loadIngredients();

    loadUsers();

    loadMealPlans();

});