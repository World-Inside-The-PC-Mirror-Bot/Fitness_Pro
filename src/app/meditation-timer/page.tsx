import MeditationTimer from '@/components/features/meditation-timer/MeditationTimer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Timer, Brain } from 'lucide-react'; // Brain as an icon for mindfulness

export const metadata = {
  title: 'Meditation Timer - FitZenith',
  description: 'Guided meditation timer to help you relax and focus with FitZenith.',
};

export default function MeditationTimerPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <Card className="shadow-xl">
         <CardHeader className="text-center">
           <div className="flex justify-center items-center mb-4">
            <Brain className="h-12 w-12 text-primary" />
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
