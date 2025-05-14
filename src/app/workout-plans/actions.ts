'use server';

import type { WorkoutPlan, Exercise } from '@/types';

// Mock AI flow - in a real app, this would call the Genkit flow
async function mockGenerateWorkoutPlan(goal: string): Promise<WorkoutPlan> {
  await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API delay

  const commonExercises: Exercise[] = [
    { id: 'ex-stretch-1', name: 'Dynamic Warm-up', sets: '1', reps: '5-10 min', imageUrl: 'https://placehold.co/300x200.png', category: 'Warm-up', dataAiHint: 'dynamic stretching' },
    { id: 'ex-stretch-2', name: 'Cool-down Stretches', sets: '1', reps: '5-10 min', imageUrl: 'https://placehold.co/300x200.png', category: 'Cool-down', dataAiHint: 'static stretching' },
  ];
  
  let planExercises: Exercise[];

  if (goal.toLowerCase().includes('weight loss')) {
    planExercises = [
      { id: 'ex-wl-1', name: 'Jumping Jacks', sets: '3', reps: '45 sec work, 15 sec rest', imageUrl: 'https://placehold.co/300x200.png', category: 'Cardio', dataAiHint: 'jumping jacks' },
      { id: 'ex-wl-2', name: 'Burpees', sets: '3', reps: '10-12', imageUrl: 'https://placehold.co/300x200.png', category: 'Full Body', dataAiHint: 'burpee exercise' },
      { id: 'ex-wl-3', name: 'High Knees', sets: '3', reps: '30 sec work, 15 sec rest', imageUrl: 'https://placehold.co/300x200.png', category: 'Cardio', dataAiHint: 'high knees' },
      { id: 'ex-wl-4', name: 'Bodyweight Squats', sets: '3', reps: '15-20', imageUrl: 'https://placehold.co/300x200.png', category: 'Legs', dataAiHint: 'bodyweight squat' },
    ];
    return {
      id: `plan-${Date.now()}`,
      name: `AI Generated: Weight Loss Focus`,
      goal: 'Weight Loss',
      description: 'A plan focused on calorie expenditure and cardiovascular health.',
      exercises: [...commonExercises.slice(0,1), ...planExercises, commonExercises[1]],
    };
  } else if (goal.toLowerCase().includes('muscle gain')) {
    planExercises = [
      { id: 'ex-mg-1', name: 'Dumbbell Bench Press', sets: '4', reps: '8-10', imageUrl: 'https://placehold.co/300x200.png', category: 'Chest', dataAiHint: 'dumbbell bench press' },
      { id: 'ex-mg-2', name: 'Pull-ups (or Lat Pulldowns)', sets: '4', reps: '6-10 (or 8-12)', imageUrl: 'https://placehold.co/300x200.png', category: 'Back', dataAiHint: 'pull up bar' },
      { id: 'ex-mg-3', name: 'Overhead Press', sets: '3', reps: '8-10', imageUrl: 'https://placehold.co/300x200.png', category: 'Shoulders', dataAiHint: 'overhead press barbell' },
      { id: 'ex-mg-4', name: 'Barbell Squats', sets: '4', reps: '6-8', imageUrl: 'https://placehold.co/300x200.png', category: 'Legs', dataAiHint: 'barbell squat rack' },
    ];
    return {
      id: `plan-${Date.now()}`,
      name: `AI Generated: Muscle Gain Focus`,
      goal: 'Muscle Gain',
      description: 'A plan focused on progressive overload and strength building.',
      exercises: [...commonExercises.slice(0,1), ...planExercises, commonExercises[1]],
    };
  } else {
     planExercises = [
      { id: 'ex-gf-1', name: 'Kettlebell Swings', sets: '3', reps: '15-20', imageUrl: 'https://placehold.co/300x200.png', category: 'Full Body', dataAiHint: 'kettlebell swing' },
      { id: 'ex-gf-2', name: 'Lunges', sets: '3', reps: '10-12 per leg', imageUrl: 'https://placehold.co/300x200.png', category: 'Legs', dataAiHint: 'dumbbell lunge' },
      { id: 'ex-gf-3', name: 'Plank Rows', sets: '3', reps: '8-10 per arm', imageUrl: 'https://placehold.co/300x200.png', category: 'Core/Back', dataAiHint: 'plank row dumbbell' },
    ];
    return {
      id: `plan-${Date.now()}`,
      name: `AI Generated: General Fitness`,
      goal: 'General Fitness',
      description: 'A well-rounded plan for overall health and conditioning.',
      exercises: [...commonExercises.slice(0,1), ...planExercises, commonExercises[1]],
    };
  }
}

export async function generatePlanAction(goal: string): Promise<WorkoutPlan | { error: string }> {
  if (!goal.trim()) {
    return { error: 'Goal cannot be empty.' };
  }
  try {
    // Replace with actual AI flow call:
    // const plan = await import('@/ai/flows/workoutFlow').then(m => m.generateWorkoutPlanFlow({ goal }));
    const plan = await mockGenerateWorkoutPlan(goal);
    return plan;
  } catch (error) {
    console.error('Error generating workout plan:', error);
    return { error: 'Failed to generate workout plan. Please try again.' };
  }
}
