'use server';

import type { WorkoutPlan, Exercise } from '@/types';
import { ALL_EXERCISES_LIST, getExerciseById } from '@/lib/constants';

// Helper to select random exercises from a category
function getRandomExercises(category: string, count: number, availableExercises: Exercise[]): Exercise[] {
  const categoryExercises = availableExercises.filter(ex => ex.category.toLowerCase() === category.toLowerCase());
  const shuffled = categoryExercises.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Mock AI flow - uses the centralized ALL_EXERCISES_LIST
async function mockGenerateWorkoutPlan(goal: string): Promise<WorkoutPlan> {
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay

  const warmUp = getExerciseById('ex-stretch-1');
  const coolDown = getExerciseById('ex-stretch-2');
  let planExercises: Exercise[] = [];
  let planName = `AI: ${goal} Focus`;
  let planDescription = `An AI-generated plan to help you achieve your goal of ${goal}.`;

  if (!warmUp || !coolDown) {
    throw new Error("Warm-up or cool-down exercise not found in the central list.");
  }

  switch (goal.toLowerCase()) {
    case 'weight loss':
      planExercises = [
        ...getRandomExercises('Cardio', 2, ALL_EXERCISES_LIST),
        ...getRandomExercises('Full Body', 1, ALL_EXERCISES_LIST),
        ...getRandomExercises('Legs', 1, ALL_EXERCISES_LIST),
      ];
      planName = `AI Generated: Weight Loss Focus`;
      planDescription = 'A plan focused on calorie expenditure and cardiovascular health.';
      break;
    case 'muscle gain':
      planExercises = [
        getRandomExercises('Chest', 1, ALL_EXERCISES_LIST)[0] || ALL_EXERCISES_LIST.find(ex => ex.id === 'ex-strength-2')!, // Dumbbell Bench Press
        getRandomExercises('Back', 1, ALL_EXERCISES_LIST)[0] || ALL_EXERCISES_LIST.find(ex => ex.id === 'ex-strength-3')!, // Pull-ups
        getRandomExercises('Shoulders', 1, ALL_EXERCISES_LIST)[0] || ALL_EXERCISES_LIST.find(ex => ex.id === 'ex-strength-4')!, // Overhead Press
        getRandomExercises('Legs', 1, ALL_EXERCISES_LIST)[0] || ALL_EXERCISES_LIST.find(ex => ex.id === 'ex-strength-5')!, // Barbell Squats
      ].filter(Boolean); // Filter out any undefined if defaults fail
      planName = `AI Generated: Muscle Gain Focus`;
      planDescription = 'A plan focused on progressive overload and strength building.';
      break;
    case 'circuit training':
      planExercises = [
        ...getRandomExercises('Full Body', 2, ALL_EXERCISES_LIST),
        ...getRandomExercises('Cardio', 2, ALL_EXERCISES_LIST.filter(ex => ex.timeBased)),
      ];
      planName = `AI Generated: Circuit Burn`;
      planDescription = 'High-intensity interval training for maximum calorie burn and conditioning.';
      break;
    case 'cardio boost':
       planExercises = [
        ...getRandomExercises('Cardio', 3, ALL_EXERCISES_LIST.filter(ex => ex.timeBased)),
        getRandomExercises('Cardio', 1, ALL_EXERCISES_LIST.filter(ex => !ex.timeBased)),
      ];
      planName = `AI Generated: Cardio Endurance`;
      planDescription = 'Focused cardiovascular exercises to improve stamina and heart health.';
      break;
    default: // General Fitness
      planExercises = [
        ...getRandomExercises('Full Body', 1, ALL_EXERCISES_LIST),
        ...getRandomExercises('Legs', 1, ALL_EXERCISES_LIST),
        ...getRandomExercises('Core', 1, ALL_EXERCISES_LIST),
        ...getRandomExercises('Cardio', 1, ALL_EXERCISES_LIST),
      ];
      planName = `AI Generated: General Fitness`;
      planDescription = 'A well-rounded plan for overall health and conditioning.';
      break;
  }
  
  // Ensure unique exercises and limit total number
  const finalExerciseSet = Array.from(new Set(planExercises.map(ex => ex.id)))
                             .map(id => getExerciseById(id)!)
                             .filter(Boolean)
                             .slice(0, 4); // Max 4 main exercises + warm-up/cool-down

  return {
    id: `plan-ai-${Date.now()}`,
    name: planName,
    goal: goal,
    description: planDescription,
    exercises: [warmUp, ...finalExerciseSet, coolDown].filter(Boolean) as Exercise[],
    duration: "Approx. 45-60 mins",
    frequency: "3 times a week"
  };
}

export async function generatePlanAction(goal: string): Promise<WorkoutPlan | { error: string }> {
  if (!goal.trim()) {
    return { error: 'Goal cannot be empty.' };
  }
  try {
    const plan = await mockGenerateWorkoutPlan(goal);
    return plan;
  } catch (error) {
    console.error('Error generating workout plan:', error);
    const message = error instanceof Error ? error.message : 'Failed to generate workout plan. Please try again.';
    return { error: message };
  }
}
