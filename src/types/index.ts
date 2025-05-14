export interface Exercise {
  id: string;
  name: string;
  sets: string; // e.g., "3", "1"
  reps: string; // e.g., "10-12", "5-10 min", "45 sec work, 15 sec rest"
  imageUrl: string;
  description?: string;
  category: string; // e.g., "Legs", "Chest", "Cardio", "Warm-up", "Full Body"
  dataAiHint?: string;
  instructions?: string[]; // Detailed steps for the exercise
  targetMuscles?: string[]; // Specific muscles targeted
  timeBased?: boolean; // If true, 'reps' might be a duration string
}

export interface WorkoutPlan {
  id: string;
  name: string;
  goal: string;
  description?: string;
  exercises: Exercise[]; // Can be full Exercise objects or just IDs if using a central list
  duration?: string; // e.g., "Approx. 45 minutes"
  frequency?: string; // e.g., "3 times a week"
}

export interface YogaPose {
  id: string;
  name: string;
  sanskritName?: string;
  imageUrl: string;
  description?: string;
  benefits?: string[];
  dataAiHint?: string;
  instructions?: string[];
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
}

// Helper type for the exercise detail page state if needed
export interface SetProgress {
  setNumber: number;
  completed: boolean;
}
