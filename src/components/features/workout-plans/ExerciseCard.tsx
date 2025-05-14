import Image from 'next/image';
import type { Exercise } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dumbbell, Repeat, Target, Clock } from 'lucide-react'; // Added Clock for time-based exercises

interface ExerciseCardProps {
  exercise: Exercise;
}

export default function ExerciseCard({ exercise }: ExerciseCardProps) {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg cursor-pointer">
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-1/3 relative h-48 sm:h-auto">
          <Image
            src={exercise.imageUrl || "https://placehold.co/300x200.png"}
            alt={exercise.name}
            layout="fill"
            objectFit="cover"
            className="sm:rounded-l-lg sm:rounded-t-none rounded-t-lg"
            data-ai-hint={exercise.dataAiHint || exercise.name.toLowerCase().split(" ").slice(0,2).join(" ")}
          />
        </div>
        <div className="sm:w-2/3 flex flex-col">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2"><Dumbbell className="text-primary h-5 w-5"/>{exercise.name}</CardTitle>
            {exercise.description && <CardDescription className="text-sm">{exercise.description}</CardDescription>}
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Repeat className="h-4 w-4 text-muted-foreground" />
                <span>Sets: {exercise.sets}</span>
              </div>
              <div className="flex items-center gap-2">
                {exercise.timeBased ? <Clock className="h-4 w-4 text-muted-foreground" /> : <Repeat className="h-4 w-4 text-muted-foreground" />}
                <span>{exercise.timeBased ? 'Duration' : 'Reps'}: {exercise.reps}</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-muted-foreground" />
                <span>Category: {exercise.category}</span>
              </div>
            </div>
          </CardContent>
           {/* Footer can be used for "View Details" button if not wrapping whole card */}
        </div>
      </div>
    </Card>
  );
}
