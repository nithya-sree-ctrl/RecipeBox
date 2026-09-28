package com.recipebox.planner.service;

import com.recipebox.planner.entity.MealPlan;
import com.recipebox.planner.repository.MealPlanRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MealPlanService {

    private final MealPlanRepository mealPlanRepository;

    public MealPlanService(MealPlanRepository mealPlanRepository) {
        this.mealPlanRepository = mealPlanRepository;
    }

    public MealPlan addMealPlan(MealPlan mealPlan) {
        return mealPlanRepository.save(mealPlan);
    }

    public List<MealPlan> getAllMealPlans() {
        return mealPlanRepository.findAll();
    }

    public MealPlan getMealPlanById(int id) {
        return mealPlanRepository.findById(id).orElse(null);
    }

    public void deleteMealPlan(int id) {
        mealPlanRepository.deleteById(id);
    }
}