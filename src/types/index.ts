export interface Exercise {
  id: string;
  name: string;
  sets: string;
  reps: string;
  imageUrl: string;
  description?: string;
  category: string;
  dataAiHint?: string;
}

export interface WorkoutPlan {
  id: string;
  name: string;
  goal: string;
  description?: string;
  exercises: Exercise[];
}

export interface YogaPose {
  id: string;
  name: string;
  sanskritName?: string;
  imageUrl: string;
  description?: string;
  benefits?: string[];
  dataAiHint?: string;
}
