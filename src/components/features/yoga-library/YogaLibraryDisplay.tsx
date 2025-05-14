'use client';

import { useState } from 'react';
import type { YogaPose } from '@/types';
import YogaPoseCard from './YogaPoseCard';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

interface YogaLibraryDisplayProps {
  poses: YogaPose[];
}

export default function YogaLibraryDisplay({ poses }: YogaLibraryDisplayProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPoses = poses.filter(
    (pose) =>
      pose.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (pose.sanskritName && pose.sanskritName.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      <Input
        type="search"
        placeholder="Search yoga poses (e.g., Warrior, Trikonasana)..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="text-base"
      />
      {filteredPoses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPoses.map((pose) => (
            <YogaPoseCard key={pose.id} pose={pose} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground py-8">
          No yoga poses found matching your search. Try a different term.
        </p>
      )}
    </div>
  );
}
