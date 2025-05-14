import YogaLibraryDisplay from '@/components/features/yoga-library/YogaLibraryDisplay';
import { MOCK_YOGA_POSES } from '@/lib/constants';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Flower2 } from 'lucide-react';

export const metadata = {
  title: 'Yoga Library - FitZenith',
  description: 'Explore various yoga poses and their benefits with FitZenith.',
};

export default function YogaLibraryPage() {
  return (
    <div className="space-y-8">
       <Card className="shadow-xl mb-10">
        <CardHeader className="text-center">
           <div className="flex justify-center items-center mb-4">
            <Flower2 className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-3xl font-bold">Yoga Library</CardTitle>
          <CardDescription className="text-lg">
            Discover a collection of yoga poses to enhance your practice.
          </CardDescription>
        </CardHeader>
      </Card>
      <YogaLibraryDisplay poses={MOCK_YOGA_POSES} />
    </div>
  );
}
