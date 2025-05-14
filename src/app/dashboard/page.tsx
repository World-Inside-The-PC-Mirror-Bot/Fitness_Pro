
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calculator, Dumbbell, Flower2, Timer, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard - FitZenith',
  description: 'Explore FitZenith features: BMI calculator, workout plans, yoga library, and meditation timer.',
};

const features = [
  {
    title: "BMI Calculator",
    description: "Calculate your Body Mass Index quickly and accurately.",
    icon: Calculator,
    href: "/bmi-calculator",
    dataAiHint: "health checkup",
    imgSrc: "https://placehold.co/600x400.png"
  },
  {
    title: "Workout Plans",
    description: "Get personalized workout plans to achieve your fitness goals.",
    icon: Dumbbell,
    href: "/workout-plans",
    dataAiHint: "gym workout",
    imgSrc: "https://placehold.co/600x400.png"
  },
  {
    title: "Yoga Library",
    description: "Explore a variety of yoga poses to improve flexibility and mindfulness.",
    icon: Flower2,
    href: "/yoga-library",
    dataAiHint: "yoga meditation",
    imgSrc: "https://placehold.co/600x400.png"
  },
  {
    title: "Meditation Timer",
    description: "Guided meditation sessions to help you relax and find peace.",
    icon: Timer,
    href: "/meditation-timer",
    dataAiHint: "zen garden",
    imgSrc: "https://placehold.co/600x400.png"
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12 bg-gradient-to-r from-primary to-teal-600 rounded-lg shadow-xl">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold tracking-tight text-primary-foreground mb-6">
            FitZenith Dashboard
          </h1>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Your tools and resources designed to elevate your well-being.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
            <Link href="/bmi-calculator">
              Start with BMI <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-10">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="relative h-56 w-full">
                <Image
                  src={feature.imgSrc}
                  alt={feature.title}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={feature.dataAiHint}
                />
              </div>
              <CardHeader className="flex-row items-center gap-4">
                <feature.icon className="h-10 w-10 text-primary" />
                <div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-base mb-4">{feature.description}</CardDescription>
                <Button variant="outline" className="mt-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                  <Link href={feature.href}>
                    Explore <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
