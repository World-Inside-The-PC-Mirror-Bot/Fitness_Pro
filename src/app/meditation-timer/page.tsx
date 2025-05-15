import MeditationTimer from '@/components/features/meditation-timer/MeditationTimer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain } from 'lucide-react'; 
import Image from 'next/image';

export const metadata = {
  title: 'Meditation Timer - Fitness Pro',
  description: 'Guided meditation timer to help you relax and focus with Fitness Pro.',
};

export default function MeditationTimerPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <Card className="shadow-xl">
         <CardHeader className="text-center">
           <div className="flex justify-center items-center mb-2">
            <Brain className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-3xl font-bold">Guided Meditation Timer</CardTitle>
          <CardDescription className="text-lg">
            Find your calm. Set your duration and begin your session.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <MeditationTimer />
        </CardContent>
      </Card>
    </div>
  );
}
