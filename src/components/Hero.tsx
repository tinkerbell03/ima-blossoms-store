import { Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-roses.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-blush" />
      
      {/* Decorative elements */}
      <div className="absolute top-40 left-10 opacity-20">
        <Heart className="h-16 w-16 text-primary animate-float" />
      </div>
      <div className="absolute bottom-40 right-10 opacity-20">
        <Sparkles className="h-20 w-20 text-gold animate-float delay-300" />
      </div>
      <div className="absolute top-60 right-1/4 opacity-10">
        <Heart className="h-12 w-12 text-primary animate-float delay-500" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full text-sm font-medium text-secondary-foreground">
              <Sparkles className="h-4 w-4 text-gold" />
              Handcrafted with Love in Sri Lanka
            </div>
            
            <p className="font-display text-lg sm:text-xl text-primary font-medium tracking-wide">
              Welcome to Ima Blossoms
            </p>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-foreground">Sparkle That</span>
              <br />
              <span className="text-gradient-pink">Never Fades.</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 font-light">
              From glitter roses to custom gift boxes, find the perfect handmade treasure. 
              <span className="font-medium text-foreground"> Delivered island-wide in Sri Lanka.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button variant="gold" size="xl" asChild>
                <a href="#products">
                  Shop Best Sellers
                </a>
              </Button>
              <Button variant="pink-outline" size="xl" asChild>
                <a href="#categories">
                  Explore Collections
                </a>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-6 justify-center lg:justify-start pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-primary fill-primary" />
                <span>100% Handmade</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-gold" />
                <span>Everlasting Beauty</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-up delay-200">
            <div className="relative rounded-3xl overflow-hidden shadow-hover gold-border">
              <img
                src={heroImage}
                alt="Handcrafted Glitter Rose Bouquet"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              {/* Sparkle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-card gold-border-thin animate-float">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-gold flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">Everlasting</p>
                  <p className="text-sm text-muted-foreground">Glitter Roses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
