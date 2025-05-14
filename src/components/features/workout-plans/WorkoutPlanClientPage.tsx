'use client';

import { useState, useTransition } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import type { WorkoutPlan } from '@/types';
import { generatePlanAction } from '@/app/workout-plans/actions';
import ExerciseCard from './ExerciseCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Wand2, ListChecks } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

const formSchema = z.object({
  goal: z.string().min(3, { message: 'Goal must be at least 3 characters long.' }).max(50, { message: 'Goal must be 50 characters or less.' }),
});

type PlanFormValues = z.infer<typeof formSchema>;

interface WorkoutPlanClientPageProps {
  initialPlans: WorkoutPlan[];
}

export default function WorkoutPlanClientPage({ initialPlans }: WorkoutPlanClientPageProps) {
  const [generatedPlan, setGeneratedPlan] = useState<WorkoutPlan | null>(null);
  const [displayedPlans, setDisplayedPlans] = useState<WorkoutPlan[]>(initialPlans);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PlanFormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<PlanFormValues> = async (data) => {
    startTransition(async () => {
      setGeneratedPlan(null);
      const result = await generatePlanAction(data.goal);
      if ('error' in result) {
        toast({
          title: 'Error Generating Plan',
          description: result.error,
          variant: 'destructive',
        });
      } else {
        setGeneratedPlan(result);
        // Add newly generated plan to the top of displayed plans if not already there by name
        if (!displayedPlans.some(p => p.name === result.name)) {
            setDisplayedPlans(prevPlans => [result, ...prevPlans]);
        }
        toast({
          title: 'Workout Plan Generated!',
          description: `Your new plan "${result.name}" is ready.`,
        });
        reset(); 
      }
    });
  };

  return (
    <div className="space-y-8">
      <Card className="bg-background/50">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2"><Wand2 className="text-primary"/>Generate Your Workout Plan</CardTitle>
          <CardDescription>Tell us your fitness goal, and we'll suggest a plan.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="goal" className="text-base">What's your primary fitness goal?</Label>
              <Input
                id="goal"
                {...register('goal')}
                className="mt-1 text-base"
                placeholder="e.g., Weight loss, Muscle gain, Circuit training"
              />
              {errors.goal && <p className="text-destructive text-sm mt-1">{errors.goal.message}</p>}
            </div>
            <Button type="submit" disabled={isPending} className="w-full sm:w-auto bg-accent hover:bg-accent/90">
              {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
              Generate Plan
            </Button>
          </form>
        </CardContent>
      </Card>

      {generatedPlan && (
        <Card className="mt-8 shadow-lg border-primary border-2">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">{generatedPlan.name}</CardTitle>
            <CardDescription>{generatedPlan.description || `A plan focused on ${generatedPlan.goal}.`}</CardDescription>
            {generatedPlan.duration && <CardDescription>Duration: {generatedPlan.duration}</CardDescription>}
            {generatedPlan.frequency && <CardDescription>Frequency: {generatedPlan.frequency}</CardDescription>}
          </CardHeader>
          <CardContent className="space-y-4">
            {generatedPlan.exercises.map((exercise) => (
              <Link key={exercise.id} href={`/exercise/${exercise.id}`} passHref legacyBehavior>
                <a className="block hover:bg-muted/50 rounded-lg transition-colors">
                  <ExerciseCard exercise={exercise} />
                </a>
              </Link>
            ))}
          </CardContent>
        </Card>
      )}
      
      <Separator className="my-10"/>

      <div>
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2"><ListChecks className="text-primary"/>Sample Workout Plans</h2>
        {displayedPlans.length > 0 ? (
          <Accordion type="single" collapsible className="w-full">
            {displayedPlans.map((plan) => (
              <AccordionItem value={plan.id} key={plan.id} className="mb-4 border bg-card rounded-lg shadow-md">
                <AccordionTrigger className="p-6 text-xl hover:no-underline">
                  {plan.name} <span className="text-sm text-muted-foreground ml-2">({plan.goal})</span>
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0">
                   <p className="text-muted-foreground mb-1">{plan.description}</p>
                   {plan.duration && <p className="text-sm text-muted-foreground mb-1">Duration: {plan.duration}</p>}
                   {plan.frequency && <p className="text-sm text-muted-foreground mb-4">Frequency: {plan.frequency}</p>}
                  <div className="space-y-4">
                    {plan.exercises.map((exercise) => (
                       <Link key={exercise.id} href={`/exercise/${exercise.id}`} passHref legacyBehavior>
                         <a className="block hover:bg-muted/50 rounded-lg transition-colors">
                           <ExerciseCard exercise={exercise} />
                         </a>
                       </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <p>No sample plans available at the moment.</p>
        )}
      </div>
    </div>
  );
}
