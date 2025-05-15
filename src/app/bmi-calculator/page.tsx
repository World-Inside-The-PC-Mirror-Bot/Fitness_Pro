import BmiCalculatorForm from '@/components/features/bmi-calculator/BmiCalculatorForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'BMI Calculator - Fitness Pro',
  description: 'Calculate your Body Mass Index (BMI) with Fitness Pro to start your wellness journey.',
};

export default function BmiCalculatorPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <Card className="shadow-xl">
        <CardHeader className="text-center">
          <div className="flex justify-center items-center mb-2">
             <Calculator className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-3xl font-bold">BMI Calculator</CardTitle>
          <CardDescription className="text-lg">
            Enter your height and weight to calculate your Body Mass Index. This is the first step in our guided setup.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <BmiCalculatorForm />
        </CardContent>
      </Card>
    </div>
  );
}
