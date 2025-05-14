import type { YogaPose, WorkoutPlan, Exercise } from '@/types';

export const ALL_EXERCISES_LIST: Exercise[] = [
  // Warm-up & Cool-down
  { id: 'ex-stretch-1', name: 'Dynamic Warm-up', sets: '1', reps: '5-10 min', imageUrl: 'https://placehold.co/300x200.png', category: 'Warm-up', dataAiHint: 'dynamic stretching', description: 'Prepare your body for exercise with light cardio and dynamic movements.' },
  { id: 'ex-stretch-2', name: 'Cool-down Stretches', sets: '1', reps: '5-10 min', imageUrl: 'https://placehold.co/300x200.png', category: 'Cool-down', dataAiHint: 'static stretching', description: 'Gradually slow down and stretch major muscle groups to improve flexibility and reduce soreness.' },

  // Cardio
  { id: 'ex-cardio-1', name: 'Jumping Jacks', sets: '3', reps: '45 sec work, 15 sec rest', imageUrl: 'https://placehold.co/300x200.png', category: 'Cardio', dataAiHint: 'jumping jacks exercise', timeBased: true },
  { id: 'ex-cardio-2', name: 'High Knees', sets: '3', reps: '30 sec work, 15 sec rest', imageUrl: 'https://placehold.co/300x200.png', category: 'Cardio', dataAiHint: 'high knees running', timeBased: true },
  { id: 'ex-cardio-3', name: 'Burpees', sets: '3', reps: '10-12', imageUrl: 'https://placehold.co/300x200.png', category: 'Full Body', dataAiHint: 'burpee exercise fitness' },
  { id: 'ex-cardio-4', name: 'Mountain Climbers', sets: '3', reps: '30 sec work, 15 sec rest', imageUrl: 'https://placehold.co/300x200.png', category: 'Core', dataAiHint: 'mountain climber exercise', timeBased: true },
  { id: 'ex-cardio-5', name: 'Running in Place', sets: '1', reps: '5-10 min', imageUrl: 'https://placehold.co/300x200.png', category: 'Cardio', dataAiHint: 'running place fitness', timeBased: true },
  { id: 'ex-cardio-6', name: 'Butt Kicks', sets: '3', reps: '30 sec work, 15 sec rest', imageUrl: 'https://placehold.co/300x200.png', category: 'Cardio', dataAiHint: 'butt kicks exercise', timeBased: true },

  // Strength & Full Body
  { id: 'ex-strength-1', name: 'Bodyweight Squats', sets: '3', reps: '15-20', imageUrl: 'https://placehold.co/300x200.png', category: 'Legs', dataAiHint: 'bodyweight squat form' },
  { id: 'ex-strength-2', name: 'Dumbbell Bench Press', sets: '4', reps: '8-10', imageUrl: 'https://placehold.co/300x200.png', category: 'Chest', dataAiHint: 'dumbbell bench press' },
  { id: 'ex-strength-3', name: 'Pull-ups (or Lat Pulldowns)', sets: '4', reps: '6-10 (or 8-12)', imageUrl: 'https://placehold.co/300x200.png', category: 'Back', dataAiHint: 'pull up bar man' },
  { id: 'ex-strength-4', name: 'Overhead Press', sets: '3', reps: '8-10', imageUrl: 'https://placehold.co/300x200.png', category: 'Shoulders', dataAiHint: 'overhead press barbell' },
  { id: 'ex-strength-5', name: 'Barbell Squats', sets: '4', reps: '6-8', imageUrl: 'https://placehold.co/300x200.png', category: 'Legs', dataAiHint: 'barbell squat rack gym' },
  { id: 'ex-strength-6', name: 'Push-ups', sets: '3', reps: 'As many as possible', imageUrl: 'https://placehold.co/300x200.png', category: 'Chest', dataAiHint: 'push up floor exercise' },
  { id: 'ex-strength-7', name: 'Plank', sets: '3', reps: '30-60 seconds', imageUrl: 'https://placehold.co/300x200.png', category: 'Core', dataAiHint: 'plank exercise woman', timeBased: true },
  { id: 'ex-strength-8', name: 'Dumbbell Rows', sets: '3', reps: '10-12 per arm', imageUrl: 'https://placehold.co/300x200.png', category: 'Back', dataAiHint: 'dumbbell row bench fit' },
  { id: 'ex-strength-9', name: 'Kettlebell Swings', sets: '3', reps: '15-20', imageUrl: 'https://placehold.co/300x200.png', category: 'Full Body', dataAiHint: 'kettlebell swing action' },
  { id: 'ex-strength-10', name: 'Lunges', sets: '3', reps: '10-12 per leg', imageUrl: 'https://placehold.co/300x200.png', category: 'Legs', dataAiHint: 'dumbbell lunge exercise' },
  { id: 'ex-strength-11', name: 'Plank Rows', sets: '3', reps: '8-10 per arm', imageUrl: 'https://placehold.co/300x200.png', category: 'Core', dataAiHint: 'plank row dumbbell core' },
  { id: 'ex-strength-12', name: 'Jump Squats', sets: '3', reps: '12-15', imageUrl: 'https://placehold.co/300x200.png', category: 'Legs', dataAiHint: 'jump squat explosive' },

  // Core specific
  { id: 'ex-core-1', name: 'Crunches', sets: '3', reps: '15-20', imageUrl: 'https://placehold.co/300x200.png', category: 'Core', dataAiHint: 'crunches exercise abs' },
  { id: 'ex-core-2', name: 'Leg Raises', sets: '3', reps: '15-20', imageUrl: 'https://placehold.co/300x200.png', category: 'Core', dataAiHint: 'leg raises core' },
  { id: 'ex-core-3', name: 'Russian Twists', sets: '3', reps: '15-20 per side', imageUrl: 'https://placehold.co/300x200.png', category: 'Core', dataAiHint: 'russian twist fitness oblique' },
];

export const getExerciseById = (id: string): Exercise | undefined => ALL_EXERCISES_LIST.find(ex => ex.id === id);

const findExercisesByIds = (ids: string[]): Exercise[] => {
  return ids.map(id => getExerciseById(id)).filter(ex => ex !== undefined) as Exercise[];
};


export const MOCK_YOGA_POSES: YogaPose[] = [
  {
    id: 'pose1',
    name: 'Downward-Facing Dog',
    sanskritName: 'Adho Mukha Shvanasana', // Corrected spelling
    imageUrl: 'https://placehold.co/400x300.png',
    description: 'Stretches the shoulders, hamstrings, and calves while strengthening the arms and legs. A foundational pose that calms the brain and helps relieve stress and mild depression.',
    benefits: ['Calms the brain & helps relieve stress', 'Energizes the body', 'Stretches shoulders, hamstrings, calves', 'Strengthens arms and legs', 'Improves digestion'],
    dataAiHint: 'yoga downward dog silhouette',
    difficulty: 'Beginner',
    instructions: [
      "Start on your hands and knees, with hands slightly ahead of shoulders and knees directly below hips.",
      "Exhale and lift your knees away from the floor. Initially keep the knees slightly bent and the heels lifted away from the floor.",
      "Lengthen your tailbone away from the back of your pelvis and press it lightly toward the pubis.",
      "Against this resistance, lift the sitting bones toward the ceiling, and from your inner ankles draw the inner legs up into the groins.",
      "On an exhalation, push your top thighs back and stretch your heels onto or down toward the floor.",
      "Firm the outer arms and press the bases of the index fingers actively into the floor. Lift along your inner arms from the wrists to the tops of the shoulders.",
      "Hold for 1 to 3 minutes, then bend your knees to the floor with an exhalation and rest in Child’s Pose."
    ]
  },
  {
    id: 'pose2',
    name: 'Warrior II',
    sanskritName: 'Virabhadrasana II',
    imageUrl: 'https://placehold.co/400x300.png',
    description: 'Builds stamina and concentration. Stretches the legs, ankles, groins, chest, and shoulders. Opens the hips and chest.',
    benefits: ['Increases stamina', 'Stretches legs, ankles, groins', 'Relieves backaches', 'Opens hips and chest', 'Improves concentration'],
    dataAiHint: 'yoga warrior two pose',
    difficulty: 'Beginner',
     instructions: [
      "Stand in Tadasana (Mountain Pose). Exhale and step or lightly jump your feet 3.5 to 4 feet apart.",
      "Raise your arms parallel to the floor and reach them actively out to the sides, shoulder blades wide, palms down.",
      "Turn your right foot out 90 degrees to the right and your left foot in slightly to the right. Align the right heel with the left heel.",
      "Firm your thighs and turn your right thigh outward so that the center of the right kneecap is in line with the center of the right ankle.",
      "Exhale and bend your right knee over the right ankle, so that the shin is perpendicular to the floor. If possible, bring the right thigh parallel to the floor.",
      "Stretch the arms, keeping them parallel to the floor. Turn the head to the right and look out over the fingers.",
      "Hold for 30 seconds to 1 minute. Inhale to come up. Reverse the feet and repeat for the same length of time to the left."
    ]
  },
  {
    id: 'pose3',
    name: 'Triangle Pose',
    sanskritName: 'Trikonasana',
    imageUrl: 'https://placehold.co/400x300.png',
    description: 'Stretches hips, groins, hamstrings, and calves; strengthens legs and core. Stimulates abdominal organs and improves digestion.',
    benefits: ['Stimulates abdominal organs', 'Relieves stress & improves digestion', 'Stretches hips, groins, hamstrings, calves', 'Strengthens legs and core', 'Relieves backache'],
    dataAiHint: 'yoga triangle pose outline',
    difficulty: 'Beginner',
    instructions: [
      "Stand in Tadasana. Exhale, step or lightly jump your feet 3.5 to 4 feet apart.",
      "Raise your arms parallel to the floor, palms down. Turn your left foot in 45-60 degrees to the right and your right foot out 90 degrees to the right.",
      "Align your right heel with your left heel. Firm your thighs and turn your right thigh outward.",
      "Exhale and extend your torso to the right directly over the plane of the right leg, bending from the hip joint, not the waist.",
      "Rest your right hand on your shin, ankle, or the floor outside your right foot. Stretch your left arm toward the ceiling, in line with the tops of your shoulders.",
      "Keep your head in a neutral position or turn it to the left, eyes gazing softly at the left thumb.",
      "Stay in this pose for 30 seconds to 1 minute. Inhale to come up. Reverse feet and repeat for the same length of time on the other side."
    ]
  },
  {
    id: 'pose4',
    name: 'Tree Pose',
    sanskritName: 'Vrksasana',
    imageUrl: 'https://placehold.co/400x300.png',
    description: 'Improves balance and stability, strengthens thighs, calves, ankles, and spine. Calms and relaxes the mind.',
    benefits: ['Builds strength in thighs, calves, ankles, spine', 'Improves balance & focus', 'Calms and relaxes the mind', 'Stretches the groins and inner thighs'],
    dataAiHint: 'yoga tree pose balance',
    difficulty: 'Beginner',
    instructions: [
      "Stand in Tadasana. Shift your weight slightly onto the left foot, keeping the inner foot firm to the floor, and bend your right knee.",
      "Reach down with your right hand and clasp your right ankle.",
      "Draw your right foot up and place the sole against the inner left thigh. If possible, press the right heel into the inner left groin, toes pointing toward the floor.",
      "Rest your hands on the top rim of your pelvis. Make sure the pelvis is in a neutral position, directly over the left foot.",
      "Lengthen your tailbone toward the floor. Firmly press the right foot sole against the inner thigh and resist with the outer left leg.",
      "Press your hands together in Anjali Mudra (Salutation Seal) at the heart center. Or, stretch arms overhead like branches.",
      "Stay for 30 seconds to 1 minute. Step back to Tadasana with an exhalation and repeat for the same length of time with the legs reversed."
    ]
  },
  {
    id: 'pose5',
    name: 'Cobra Pose',
    sanskritName: 'Bhujangasana',
    imageUrl: 'https://placehold.co/400x300.png',
    description: 'Strengthens the spine, chest, and abdomen. Stretches shoulders and chest. Helps relieve stress and fatigue.',
    benefits: ['Strengthens spine', 'Stretches chest, shoulders, abdomen', 'Firms buttocks', 'Soothes sciatica'],
    dataAiHint: 'yoga cobra pose floor',
    difficulty: 'Beginner',
    instructions: [
        "Lie prone on the floor. Stretch your legs back, tops of the feet on the floor.",
        "Place your hands on the floor under your shoulders. Hug the elbows back into your body.",
        "Press the tops of the feet and thighs and the pubis firmly into the floor.",
        "On an inhalation, begin to straighten the arms to lift the chest off the floor, going only to the height at which you can maintain a connection through your pubis to your legs.",
        "Firm the shoulder blades against the back, puffing the side ribs forward. Lift through the top of the sternum but avoid pushing the front ribs forward.",
        "Hold the pose anywhere from 15 to 30 seconds, breathing easily. Release back to the floor with an exhalation."
    ]
  },
   {
    id: 'pose6',
    name: 'Child\'s Pose',
    sanskritName: 'Balasana',
    imageUrl: 'https://placehold.co/400x300.png',
    description: 'Gently relaxes the muscles on the front of the body while softly stretching the muscles of the back torso. Calms the brain and helps relieve stress and fatigue.',
    benefits: ['Gently stretches hips, thighs, ankles', 'Calms brain, relieves stress/fatigue', 'Relieves back and neck pain when done with head/torso supported'],
    dataAiHint: 'yoga childs pose relax',
    difficulty: 'Beginner',
    instructions: [
        "Kneel on the floor. Touch your big toes together and sit on your heels, then separate your knees about as wide as your hips.",
        "Exhale and lay your torso down between your thighs.",
        "Broaden your sacrum across the back of your pelvis and narrow your hip points toward the navel, so that they snuggle down onto the inner thighs.",
        "Lay your hands on the floor alongside your torso, palms up, and release the fronts of your shoulders toward the floor.",
        "You can also stretch your arms out in front of you.",
        "Stay in the pose anywhere from 30 seconds to a few minutes."
    ]
  }
];

export const MOCK_WORKOUT_PLANS: WorkoutPlan[] = [
  {
    id: 'plan-fullbody-1',
    name: 'Full Body Blast',
    goal: 'General Fitness',
    description: 'A comprehensive workout targeting all major muscle groups for overall strength and conditioning.',
    exercises: findExercisesByIds(['ex-stretch-1', 'ex-strength-1', 'ex-strength-6', 'ex-strength-7', 'ex-strength-8', 'ex-stretch-2']),
    duration: "Approx. 45 mins",
    frequency: "2-3 times a week"
  },
  {
    id: 'plan-core-1',
    name: 'Core Strength Builder',
    goal: 'Muscle Gain - Core',
    description: 'Focused exercises to build a strong and stable core.',
    exercises: findExercisesByIds(['ex-stretch-1', 'ex-core-1', 'ex-core-2', 'ex-core-3', 'ex-strength-7', 'ex-stretch-2']),
    duration: "Approx. 30 mins",
    frequency: "3-4 times a week"
  },
  {
    id: 'plan-weightloss-1',
    name: 'Weight Loss Kickstart',
    goal: 'Weight Loss',
    description: 'A plan focused on calorie expenditure and cardiovascular health to kickstart weight loss.',
    exercises: findExercisesByIds(['ex-stretch-1', 'ex-cardio-1', 'ex-cardio-3', 'ex-cardio-2', 'ex-strength-1', 'ex-stretch-2']),
    duration: "Approx. 50 mins",
    frequency: "3-4 times a week"
  },
  {
    id: 'plan-musclegain-1',
    name: 'Muscle Gain Foundation',
    goal: 'Muscle Gain',
    description: 'A plan focused on progressive overload and strength building for foundational muscle growth.',
    exercises: findExercisesByIds(['ex-stretch-1', 'ex-strength-2', 'ex-strength-3', 'ex-strength-4', 'ex-strength-5', 'ex-stretch-2']),
    duration: "Approx. 60 mins",
    frequency: "3 times a week (with rest days)"
  },
  {
    id: 'plan-circuit-1',
    name: 'Circuit Burn',
    goal: 'General Fitness',
    description: 'A high-intensity circuit to maximize calorie burn and improve cardiovascular fitness.',
    exercises: findExercisesByIds(['ex-stretch-1', 'ex-cardio-3', 'ex-cardio-4', 'ex-strength-12', 'ex-strength-6', 'ex-stretch-2']),
    duration: "Approx. 35 mins",
    frequency: "2-3 times a week"
  },
  {
    id: 'plan-cardio-1',
    name: 'Cardio Blast',
    goal: 'Cardiovascular Health',
    description: 'A dedicated cardio session to boost endurance and heart health.',
    exercises: findExercisesByIds(['ex-stretch-1', 'ex-cardio-5', 'ex-cardio-1', 'ex-cardio-2', 'ex-cardio-6', 'ex-stretch-2']),
    duration: "Approx. 40 mins",
    frequency: "3-5 times a week"
  }
];
