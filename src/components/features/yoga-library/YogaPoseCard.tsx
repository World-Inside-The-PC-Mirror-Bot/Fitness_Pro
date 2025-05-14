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
          alt={pose.sanskritName || pose.name} // Use Sanskrit name for alt if available
          layout="fill"
          objectFit="cover"
          data-ai-hint={pose.dataAiHint || (pose.sanskritName || pose.name).toLowerCase().split(" ").slice(0,2).join(" ")}
        />
      </div>
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-primary" />
          {/* Prioritize Sanskrit name for the title */}
          {pose.sanskritName || pose.name}
        </CardTitle>
        {/* Display English name as a subtitle if Sanskrit name was used as title AND English name exists */}
        {(pose.sanskritName && pose.name) && (
          <CardDescription className="text-md text-muted-foreground -mt-0.5">
            {pose.name}
          </CardDescription>
        )}
        {/* If only English name was available and used as title, this CardDescription shows general pose description */}
        {(!pose.sanskritName && pose.description) && (
             <CardDescription className="text-sm text-muted-foreground pt-1">{pose.description.substring(0,100)}{pose.description.length > 100 ? "..." : ""}</CardDescription>
        )}
      </CardHeader>
      <CardContent className="flex-grow space-y-3">
        {/* Display full description here if it wasn't used as a fallback subtitle */}
        {pose.sanskritName && pose.description && (
            <p className="text-muted-foreground text-sm">{pose.description}</p>
        )}
        
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
