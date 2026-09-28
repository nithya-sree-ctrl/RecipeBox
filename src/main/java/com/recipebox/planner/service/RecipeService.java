package com.recipebox.planner.service;

import com.recipebox.planner.entity.Recipe;
import com.recipebox.planner.repository.RecipeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecipeService {

    private final RecipeRepository recipeRepository;

    public RecipeService(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    public Recipe addRecipe(Recipe recipe) {
        return recipeRepository.save(recipe);
    }

    public List<Recipe> getAllRecipes() {
        return recipeRepository.findAll();
    }

    public Recipe getRecipeById(int id) {
        return recipeRepository.findById(id).orElse(null);
    }

    public void deleteRecipe(int id) {
        recipeRepository.deleteById(id);
    }
}