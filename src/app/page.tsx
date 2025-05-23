
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Welcome to Fitness Pro',
  description: 'Start your journey to wellness with Fitness Pro. Your ultimate fitness and mindfulness companion.',
};

export default function WelcomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] text-center px-4">
      <section className="py-12 md:py-20 rounded-lg shadow-xl bg-gradient-to-br from-primary via-teal-500 to-accent w-full max-w-4xl">
        <div className="container mx-auto">
          <Sparkles className="h-16 w-16 text-primary-foreground mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-primary-foreground mb-6">
            Welcome to <span className="drop-shadow-lg">Fitness Pro</span>!
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto">
            Your ultimate companion on the journey to a healthier, stronger, and more mindful you.
            Let's get started!
          </p>
          <Button size="lg" className="bg-background text-foreground hover:bg-background/90 text-lg py-3 px-8" asChild>
            <Link href="/bmi-calculator">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
