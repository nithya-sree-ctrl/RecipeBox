package com.recipebox.planner.repository;

import com.recipebox.planner.entity.MealPlan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MealPlanRepository extends JpaRepository<MealPlan, Integer> {

}