'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { getExerciseById } from '@/lib/constants';
import type { Exercise, SetProgress } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Dumbbell, Target, ListChecks, Clock, Info } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export default function ExerciseDetailPage() {
  const params = useParams();
  const exerciseId = params.exerciseId as string;
  const [exercise, setExercise] = useState<Exercise | null>(null);
  const [setProgress, setSetProgress] = useState<SetProgress[]>([]);

  useEffect(() => {
    if (exerciseId) {
      const foundExercise = getExerciseById(exerciseId);
      if (foundExercise) {
        setExercise(foundExercise);
        const numberOfSets = parseInt(foundExercise.sets, 10);
        if (!isNaN(numberOfSets) && numberOfSets > 0) {
          setSetProgress(
            Array.from({ length: numberOfSets }, (_, i) => ({
              setNumber: i + 1,
              completed: false,
            }))
          );
        } else {
          setSetProgress([]); // For exercises like warm-up/cool-down with '1' set but no distinct reps to track this way
        }
      }
    }
  }, [exerciseId]);

  const handleSetToggle = (setNumber: number) => {
    setSetProgress((prevProgress) =>
      prevProgress.map((s) =>
        s.setNumber === setNumber ? { ...s, completed: !s.completed } : s
      )
    );
  };

  if (!exercise) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)]">
        <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
        <p className="text-lg text-muted-foreground">Loading exercise details...</p>
         <Button variant="outline" asChild className="mt-4">
            <Link href="/workout-plans"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Workout Plans</Link>
        </Button>
      </div>
    );
  }
  
  const Loader2 = ({ className }: { className?: string }) => ( // Simple loader
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
  );

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <Button variant="outline" asChild className="mb-6">
        <Link href="/workout-plans"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Workout Plans</Link>
      </Button>

      <Card className="shadow-xl overflow-hidden">
        <div className="relative h-72 w-full">
          <Image
            src={exercise.imageUrl || "https://placehold.co/600x400.png"}
            alt={exercise.name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={exercise.dataAiHint || exercise.name.toLowerCase().split(" ").slice(0,2).join(" ")}
          />
        </div>
        <CardHeader className="pb-4">
          <CardTitle className="text-3xl font-bold flex items-center gap-3">
            <Dumbbell className="h-8 w-8 text-primary" />
            {exercise.name}
          </CardTitle>
          <CardDescription className="text-md">
            {exercise.description || "Detailed exercise information."}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base">
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-md">
              <Target className="h-6 w-6 text-primary" />
              <div>
                <p className="font-semibold">Category</p>
                <p>{exercise.category}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-md">
              {exercise.timeBased ? <Clock className="h-6 w-6 text-primary" /> : <ListChecks className="h-6 w-6 text-primary" />}
              <div>
                <p className="font-semibold">{exercise.timeBased ? "Duration per Set" : "Sets & Reps"}</p>
                <p>{exercise.sets} sets of {exercise.reps}</p>
              </div>
            </div>
          </div>
          
          {exercise.instructions && exercise.instructions.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2"><Info className="h-5 w-5 text-primary"/>Instructions</h3>
              <ul className="list-decimal list-inside space-y-1 pl-2 text-muted-foreground">
                {exercise.instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
          )}

          {exercise.targetMuscles && exercise.targetMuscles.length > 0 && (
             <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2"><Target className="h-5 w-5 text-primary"/>Target Muscles</h3>
              <div className="flex flex-wrap gap-2">
                {exercise.targetMuscles.map((muscle, index) => (
                  <span key={index} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">{muscle}</span>
                ))}
              </div>
            </div>
          )}
          
          <Separator />

          {setProgress.length > 0 && !exercise.timeBased && ( // Only show set tracking for non-time-based exercises with defined sets
            <div>
              <h3 className="text-xl font-semibold mb-3">Track Your Sets</h3>
              <div className="space-y-3">
                {setProgress.map((s) => (
                  <div key={s.setNumber} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-md">
                    <Checkbox
                      id={`set-${s.setNumber}`}
                      checked={s.completed}
                      onCheckedChange={() => handleSetToggle(s.setNumber)}
                      aria-label={`Mark set ${s.setNumber} as complete`}
                    />
                    <Label htmlFor={`set-${s.setNumber}`} className="text-base cursor-pointer">
                      Set {s.setNumber}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          )}
           {exercise.timeBased && parseInt(exercise.sets) > 0 && (
             <div>
                <h3 className="text-xl font-semibold mb-3">Track Your Timed Sets</h3>
                <p className="text-muted-foreground">For timed exercises like this, ensure you complete {exercise.sets} set(s) of {exercise.reps} each. Use an external timer.</p>
             </div>
           )}


        </CardContent>
      </Card>
    </div>
  );
}

// Add metadata if needed, though dynamic metadata is more complex for client components
// export const metadata = { title: 'Exercise Details' }
