import BmiCalculatorForm from '@/components/features/bmi-calculator/BmiCalculatorForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator } from 'lucide-react';

export const metadata = {
  title: 'BMI Calculator - FitZenith',
  description: 'Calculate your Body Mass Index (BMI) with FitZenith.',
};

export default function BmiCalculatorPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <Card className="shadow-xl">
        <CardHeader className="text-center">
          <div className="flex justify-center items-center mb-4">
            <Calculator className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-3xl font-bold">BMI Calculator</CardTitle>
          <CardDescription className="text-lg">
            Enter your height and weight to calculate your Body Mass Index.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <BmiCalculatorForm />
        </CardContent>
      </Card>
    </div>
  );
}
