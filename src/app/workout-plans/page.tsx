import WorkoutPlanClientPage from '@/components/features/workout-plans/WorkoutPlanClientPage';
import { MOCK_WORKOUT_PLANS } from '@/lib/constants';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dumbbell } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'Workout Plans - Fitness Pro',
  description: 'Generate or browse workout plans tailored to your fitness goals with Fitness Pro. This is the final step of our guided setup.',
};

export default function WorkoutPlansPage() {
  return (
    <div className="space-y-8">
      <Card className="shadow-xl">
        <CardHeader className="text-center">
           <div className="flex justify-center items-center mb-2">
            <Dumbbell className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-3xl font-bold">Workout Plans</CardTitle>
          <CardDescription className="text-lg">
            Discover workout plans for various goals or generate a new one tailored to you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <WorkoutPlanClientPage initialPlans={MOCK_WORKOUT_PLANS} />
        </CardContent>
      </Card>
    </div>
  );
}
