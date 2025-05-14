import Image from 'next/image';
import type { YogaPose } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, Sparkles, Zap } from 'lucide-react'; // Zap for benefits/energy

interface YogaPoseCardProps {
  pose: YogaPose;
}

export default function YogaPoseCard({ pose }: YogaPoseCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className="relative h-64 w-full">
        <Image
          src={pose.imageUrl || "https://placehold.co/400x300.png"}
          alt={pose.name}
          layout="fill"
          objectFit="cover"
          data-ai-hint={pose.dataAiHint || pose.name.toLowerCase().split(" ").slice(0,2).join(" ")}
        />
      </div>
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-primary" /> 
          {pose.name}
        </CardTitle>
        {pose.sanskritName && (
          <CardDescription className="text-primary/80 italic">{pose.sanskritName}</CardDescription>
        )}
      </CardHeader>
      <CardContent className="flex-grow space-y-3">
        <p className="text-muted-foreground text-sm">{pose.description}</p>
        
        {pose.benefits && pose.benefits.length > 0 && (
          <div>
            <h4 className="font-semibold mb-1 text-foreground flex items-center gap-1.5"><Zap className="h-4 w-4 text-yellow-500"/>Benefits:</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-0.5 pl-2">
              {pose.benefits.slice(0, 3).map((benefit, index) => ( // Show max 3 benefits in card
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
      {pose.difficulty && (
        <CardFooter>
          <Badge variant={
            pose.difficulty === 'Beginner' ? 'secondary' : 
            pose.difficulty === 'Intermediate' ? 'default' : 'destructive'
          }>
            {pose.difficulty}
          </Badge>
        </CardFooter>
      )}
    </Card>
  );
}
