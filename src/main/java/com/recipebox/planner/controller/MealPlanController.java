package com.recipebox.planner.controller;

import com.recipebox.planner.entity.MealPlan;
import com.recipebox.planner.service.MealPlanService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/mealplans")
public class MealPlanController {

    private final MealPlanService mealPlanService;

    public MealPlanController(MealPlanService mealPlanService) {
        this.mealPlanService = mealPlanService;
    }

    @PostMapping
    public MealPlan addMealPlan(@RequestBody MealPlan mealPlan) {
        return mealPlanService.addMealPlan(mealPlan);
    }

    @GetMapping
    public List<MealPlan> getAllMealPlans() {
        return mealPlanService.getAllMealPlans();
    }

    @GetMapping("/{id}")
    public MealPlan getMealPlanById(@PathVariable int id) {
        return mealPlanService.getMealPlanById(id);
    }

    @DeleteMapping("/{id}")
    public String deleteMealPlan(@PathVariable int id) {
        mealPlanService.deleteMealPlan(id);
        return "Meal plan deleted successfully";
    }
}