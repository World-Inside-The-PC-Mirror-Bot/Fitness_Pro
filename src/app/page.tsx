
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Welcome to FitZenith',
  description: 'Start your journey to wellness with FitZenith. Your ultimate fitness and mindfulness companion.',
};

export default function WelcomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] text-center px-4">
      <section className="py-12 md:py-20 rounded-lg shadow-xl bg-gradient-to-br from-primary via-teal-500 to-accent w-full max-w-4xl">
        <div className="container mx-auto">
          <Sparkles className="h-16 w-16 text-primary-foreground mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-primary-foreground mb-6">
            Welcome to <span className="drop-shadow-lg">FitZenith</span>!
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto">
            Your ultimate companion on the journey to a healthier, stronger, and more mindful you.
            Let's get started!
          </p>
          <Button size="lg" className="bg-background text-foreground hover:bg-background/90 text-lg py-3 px-8" asChild>
            <Link href="/dashboard">
              Explore Features <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
      <div className="mt-12 w-full max-w-4xl">
        <Image
          src="https://placehold.co/1200x400.png"
          alt="Wellness Journey"
          width={1200}
          height={400}
          className="rounded-lg shadow-lg"
          data-ai-hint="fitness wellness collage"
        />
      </div>
    </div>
  );
}
