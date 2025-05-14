'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Pause, RotateCcw, Settings2 } from 'lucide-react';

const BREATH_CYCLE_DURATION = 12; // seconds for a full breath cycle (e.g., 4s in, 4s hold, 4s out)
const BREATH_PHASES = [
  { name: 'Breathe In', duration: 4, color: 'bg-blue-500' },
  { name: 'Hold', duration: 4, color: 'bg-yellow-500' },
  { name: 'Breathe Out', duration: 4, color: 'bg-green-500' },
];

export default function MeditationTimer() {
  const [durationMinutes, setDurationMinutes] = useState(5);
  const [totalSeconds, setTotalSeconds] = useState(durationMinutes * 60);
  const [timeLeft, setTimeLeft] = useState(durationMinutes * 60);
  const [isActive, setIsActive] = useState(false);
  const [showSettings, setShowSettings] = useState(true);
  
  const [breathPhaseIndex, setBreathPhaseIndex] = useState(0);
  const [timeInPhase, setTimeInPhase] = useState(0);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const breathIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimerStates = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (breathIntervalRef.current) clearInterval(breathIntervalRef.current);
    setIsActive(false);
    setTimeLeft(totalSeconds);
    setBreathPhaseIndex(0);
    setTimeInPhase(0);
  }, [totalSeconds]);

  useEffect(() => {
    setTotalSeconds(durationMinutes * 60);
    resetTimerStates(); // Reset timer when duration changes
  }, [durationMinutes, resetTimerStates]);
  
  useEffect(() => {
    setTimeLeft(totalSeconds);
  }, [totalSeconds]);


  useEffect(() => {
    if (isActive && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      breathIntervalRef.current = setInterval(() => {
        setTimeInPhase((prevTimeInPhase) => {
          const currentPhase = BREATH_PHASES[breathPhaseIndex];
          if (prevTimeInPhase + 1 >= currentPhase.duration) {
            setBreathPhaseIndex((prevIndex) => (prevIndex + 1) % BREATH_PHASES.length);
            return 0;
          }
          return prevTimeInPhase + 1;
        });
      }, 1000);

    } else if (timeLeft === 0 && isActive) {
      resetTimerStates();
      // Optionally: play a sound or show a completion message
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (breathIntervalRef.current) clearInterval(breathIntervalRef.current);
    };
  }, [isActive, timeLeft, breathPhaseIndex, resetTimerStates]);

  const handleStartPause = () => {
    if (timeLeft === 0 && totalSeconds > 0) { // If timer finished and then play is hit
      setTimeLeft(totalSeconds); // Reset time
    }
    setIsActive(!isActive);
    if (!isActive) setShowSettings(false); // Hide settings when timer starts
  };

  const handleReset = () => {
    resetTimerStates();
    setShowSettings(true); // Show settings on reset
  };

  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMinutes = parseInt(e.target.value, 10);
    if (!isNaN(newMinutes) && newMinutes > 0 && newMinutes <= 120) {
      setDurationMinutes(newMinutes);
    } else if (e.target.value === '') {
       setDurationMinutes(0); // Allow empty input for typing
    }
  };
  
  const currentPhase = BREATH_PHASES[breathPhaseIndex];
  const progressPercentage = totalSeconds > 0 ? ((totalSeconds - timeLeft) / totalSeconds) * 100 : 0;
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <Card className="w-full max-w-md mx-auto text-center shadow-lg">
      <CardHeader>
        <Button variant="ghost" size="icon" className="absolute top-4 right-4" onClick={() => setShowSettings(!showSettings)}>
          <Settings2 className="h-5 w-5" />
        </Button>
        <CardTitle className="text-2xl">
          {isActive ? currentPhase.name : (timeLeft === 0 && totalSeconds > 0 ? "Session Complete!" : "Ready to Meditate?")}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {showSettings && !isActive && (
          <div className="space-y-2 my-4 p-4 border rounded-md bg-muted/50">
            <Label htmlFor="duration" className="text-base font-medium">Session Duration (minutes)</Label>
            <Input
              id="duration"
              type="number"
              value={durationMinutes === 0 && timeLeft > 0 ? '' : durationMinutes} // Handle empty state for typing
              onChange={handleDurationChange}
              min="1"
              max="120"
              className="w-full text-center text-lg"
              disabled={isActive}
            />
          </div>
        )}

        <div className="text-6xl font-mono font-bold text-primary" suppressHydrationWarning>
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </div>
        
        <Progress value={progressPercentage} className="w-full h-4 transition-all duration-500" />

        {/* Visual Breathing Cue */}
        <div className="relative w-32 h-32 mx-auto mt-4">
          <div 
            className={`absolute inset-0 rounded-full transition-all duration-1000 ease-in-out ${currentPhase.color} ${isActive ? 'opacity-70' : 'opacity-30'}`}
            style={{ 
              transform: isActive && (currentPhase.name === 'Breathe In' || currentPhase.name === 'Hold') ? 'scale(1)' : 'scale(0.7)'
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-background font-semibold">
              {isActive ? currentPhase.name.split(' ')[0] : ""}
            </p>
          </div>
        </div>

      </CardContent>
      <CardFooter className="flex justify-center gap-4">
        <Button onClick={handleStartPause} className="w-28 bg-primary hover:bg-primary/90 text-lg py-3" disabled={totalSeconds === 0 && durationMinutes === 0}>
          {isActive ? <Pause className="mr-2"/> : <Play className="mr-2"/>}
          {isActive ? 'Pause' : (timeLeft === 0 && totalSeconds > 0 ? 'Restart' : 'Start')}
        </Button>
        <Button onClick={handleReset} variant="outline" className="w-28 text-lg py-3">
          <RotateCcw className="mr-2"/> Reset
        </Button>
      </CardFooter>
    </Card>
  );
}
