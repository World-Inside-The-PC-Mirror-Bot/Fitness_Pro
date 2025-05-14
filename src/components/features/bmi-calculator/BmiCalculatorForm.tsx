'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Scale, TrendingUp, TrendingDown, CheckCircle2 } from 'lucide-react';

const formSchema = z.object({
  height: z.preprocess(
    (val) => (typeof val === 'string' ? parseFloat(val) : val),
    z.number().positive({ message: 'Height must be positive' })
  ),
  weight: z.preprocess(
    (val) => (typeof val === 'string' ? parseFloat(val) : val),
    z.number().positive({ message: 'Weight must be positive' })
  ),
  unit: z.enum(['metric', 'imperial']).default('metric'),
});

type BmiFormValues = z.infer<typeof formSchema>;

interface BmiResult {
  value: number;
  category: string;
  colorClass: string;
  icon: React.ElementType;
}

export default function BmiCalculatorForm() {
  const [bmiResult, setBmiResult] = useState<BmiResult | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<BmiFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      unit: 'metric',
    },
  });

  const unit = watch('unit');

  const onSubmit: SubmitHandler<BmiFormValues> = (data) => {
    let heightInMeters = data.height;
    let weightInKg = data.weight;

    if (data.unit === 'metric') {
      heightInMeters = data.height / 100; // cm to m
    } else { // imperial
      heightInMeters = data.height * 0.0254; // inches to m
      weightInKg = data.weight * 0.453592; // lbs to kg
    }

    if (heightInMeters <= 0 || weightInKg <= 0) {
        setBmiResult(null); // Or show an error specific to invalid calculation
        return;
    }
    
    const bmi = weightInKg / (heightInMeters * heightInMeters);
    const roundedBmi = parseFloat(bmi.toFixed(1));

    let category = '';
    let colorClass = '';
    let icon : React.ElementType = Scale;

    if (roundedBmi < 18.5) {
      category = 'Underweight';
      colorClass = 'text-blue-600';
      icon = TrendingDown;
    } else if (roundedBmi < 24.9) {
      category = 'Normal weight';
      colorClass = 'text-green-600';
      icon = CheckCircle2;
    } else if (roundedBmi < 29.9) {
      category = 'Overweight';
      colorClass = 'text-yellow-600';
      icon = TrendingUp;
    } else {
      category = 'Obesity';
      colorClass = 'text-red-600';
      icon = TrendingUp;
    }

    setBmiResult({ value: roundedBmi, category, colorClass, icon });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Label htmlFor="unit" className="text-base">Unit System</Label>
        <div className="flex gap-4 mt-2">
          <Button type="button" variant={unit === 'metric' ? 'default' : 'outline'} onClick={() => register('unit').onChange({ target: { value: 'metric' }})}>Metric (cm, kg)</Button>
          <Button type="button" variant={unit === 'imperial' ? 'default' : 'outline'} onClick={() => register('unit').onChange({ target: { value: 'imperial' }})}>Imperial (in, lbs)</Button>
        </div>
      </div>

      <div>
        <Label htmlFor="height" className="text-base">Height ({unit === 'metric' ? 'cm' : 'inches'})</Label>
        <Input
          id="height"
          type="number"
          step="any"
          {...register('height')}
          className="mt-1 text-base"
          placeholder={unit === 'metric' ? 'e.g., 170' : 'e.g., 68'}
        />
        {errors.height && <p className="text-destructive text-sm mt-1">{errors.height.message}</p>}
      </div>

      <div>
        <Label htmlFor="weight" className="text-base">Weight ({unit === 'metric' ? 'kg' : 'lbs'})</Label>
        <Input
          id="weight"
          type="number"
          step="any"
          {...register('weight')}
          className="mt-1 text-base"
          placeholder={unit === 'metric' ? 'e.g., 70' : 'e.g., 154'}
        />
        {errors.weight && <p className="text-destructive text-sm mt-1">{errors.weight.message}</p>}
      </div>

      <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-3">
        Calculate BMI
      </Button>

      {bmiResult && (
        <Alert variant="default" className={`mt-8 border-l-4 ${bmiResult.colorClass.replace('text-', 'border-')}`}>
          <bmiResult.icon className={`h-6 w-6 ${bmiResult.colorClass}`} />
          <AlertTitle className={`text-xl font-semibold ${bmiResult.colorClass}`}>Your BMI: {bmiResult.value}</AlertTitle>
          <AlertDescription className="text-base">
            Category: <span className="font-medium">{bmiResult.category}</span>
            <p className="text-sm text-muted-foreground mt-2">
              BMI is a general indicator and may not apply to all individuals, such as athletes or pregnant women. Consult a healthcare professional for personalized advice.
            </p>
          </AlertDescription>
        </Alert>
      )}
    </form>
  );
}
