import type { YogaPose, WorkoutPlan } from '@/types';

export const MOCK_YOGA_POSES: YogaPose[] = [
  {
    id: 'pose1',
    name: 'Downward-Facing Dog',
    sanskritName: 'Adho Mukha Svanasana',
    imageUrl: 'https://placehold.co/400x300.png',
    description: 'Stretches the shoulders, hamstrings, and calves while strengthening the arms and legs.',
    benefits: ['Calms the brain', 'Relieves stress', 'Energizes the body'],
    dataAiHint: 'yoga downward dog',
  },
  {
    id: 'pose2',
    name: 'Warrior II',
    sanskritName: 'Virabhadrasana II',
    imageUrl: 'https://placehold.co/400x300.png',
    description: 'Builds stamina and concentration, stretches the legs and ankles.',
    benefits: ['Increases stamina', 'Stretches legs and ankles', 'Relieves backaches'],
    dataAiHint: 'yoga warrior pose',
  },
  {
    id: 'pose3',
    name: 'Triangle Pose',
    sanskritName: 'Trikonasana',
    imageUrl: 'https://placehold.co/400x300.png',
    description: 'Stretches hips, groins, hamstrings, and calves; strengthens legs and core.',
    benefits: ['Stimulates abdominal organs', 'Relieves stress', 'Improves digestion'],
    dataAiHint: 'yoga triangle pose',
  },
  {
    id: 'pose4',
    name: 'Tree Pose',
    sanskritName: 'Vrksasana',
    imageUrl: 'https://placehold.co/400x300.png',
    description: 'Improves balance and stability, strengthens thighs, calves, ankles, and spine.',
    benefits: ['Builds strength in thighs', 'Improves balance', 'Calms and relaxes the mind'],
    dataAiHint: 'yoga tree pose',
  },
];

export const MOCK_WORKOUT_PLANS: WorkoutPlan[] = [
  {
    id: 'plan1',
    name: 'Full Body Blast',
    goal: 'General Fitness',
    description: 'A comprehensive workout targeting all major muscle groups for overall strength and conditioning.',
    exercises: [
      { id: 'ex1', name: 'Squats', sets: '3', reps: '10-12', imageUrl: 'https://placehold.co/300x200.png', category: 'Legs', dataAiHint: 'barbell squat' },
      { id: 'ex2', name: 'Push-ups', sets: '3', reps: 'As many as possible', imageUrl: 'https://placehold.co/300x200.png', category: 'Chest', dataAiHint: 'push up floor' },
      { id: 'ex3', name: 'Plank', sets: '3', reps: '30-60 seconds', imageUrl: 'https://placehold.co/300x200.png', category: 'Core', dataAiHint: 'plank exercise' },
      { id: 'ex4', name: 'Dumbbell Rows', sets: '3', reps: '10-12 per arm', imageUrl: 'https://placehold.co/300x200.png', category: 'Back', dataAiHint: 'dumbbell row bench' },
    ],
  },
  {
    id: 'plan2',
    name: 'Core Strength Builder',
    goal: 'Muscle Gain - Core',
    description: 'Focused exercises to build a strong and stable core.',
    exercises: [
      { id: 'ex5', name: 'Crunches', sets: '3', reps: '15-20', imageUrl: 'https://placehold.co/300x200.png', category: 'Core', dataAiHint: 'crunches exercise' },
      { id: 'ex6', name: 'Leg Raises', sets: '3', reps: '15-20', imageUrl: 'https://placehold.co/300x200.png', category: 'Core', dataAiHint: 'leg raises' },
      { id: 'ex7', name: 'Russian Twists', sets: '3', reps: '15-20 per side', imageUrl: 'https://placehold.co/300x200.png', category: 'Core', dataAiHint: 'russian twist fitness' },
    ],
  },
];
