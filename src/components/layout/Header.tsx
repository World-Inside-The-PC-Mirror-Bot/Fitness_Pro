
import Link from 'next/link';
import { Activity, Calculator, Dumbbell, Flower2, Timer, HomeIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { href: '/', label: 'Welcome', icon: HomeIcon },
  { href: '/bmi-calculator', label: 'BMI Calculator', icon: Calculator },
  { href: '/workout-plans', label: 'Workout Plans', icon: Dumbbell },
  { href: '/yoga-library', label: 'Yoga Library', icon: Flower2 },
  { href: '/meditation-timer', label: 'Meditation', icon: Timer },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Activity className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-primary">FitZenith</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => (
            <Button key={item.label} variant="ghost" asChild>
              <Link href={item.href} className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 lg:px-3">
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            </Button>
          ))}
        </nav>
        <div className="md:hidden">
          {/* Mobile menu button can be added here */}
        </div>
      </div>
    </header>
  );
}
