import { ArrowLeft, MessageCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import pipeTangerineDream from "@/assets/pipe-tangerine-dream.png";
import pipeSunnySmile from "@/assets/pipe-sunny-smile.jpg";
import pipeSpringConfetti from "@/assets/pipe-spring-confetti.jpg";
import pipeTropical1 from "@/assets/pipe-tropical-1.jpg";
import pipeTropical2 from "@/assets/pipe-tropical-2.jpg";
import pipeTropical3 from "@/assets/pipe-tropical-3.jpg";

import pipeFloralCard1 from "@/assets/pipe-floral-card-1.jpg";
import pipeFloralCard2 from "@/assets/pipe-floral-card-2.jpg";

const pipeCleanerProducts = [
  {
    name: "Tangerine Dream Bloom",
    price: "Rs.300/=",
    image: pipeTangerineDream,
  },
  {
    name: "Sunny Smile Pot",
    price: "Rs.500/=",
    image: pipeSunnySmile,
  },
  {
    name: "Spring Confetti Basket",
    price: "Rs.600/=",
    image: pipeSpringConfetti,
  },
  {
    name: "Tropical Sunshine Pot",
    price: "Rs.550/=",
    image: pipeTropical1,
  },
  {
    name: "Tropical Sunshine Pot",
    price: "Rs.550/=",
    image: pipeTropical2,
  },
  {
    name: "Tropical Sunshine Pot",
    price: "Rs.550/=",
    image: pipeTropical3,
  },
  {
    name: "Floral Greeting Card",
    price: "Rs.300/=",
    image: pipeFloralCard1,
  },
  {
    name: "Floral Greeting Card",
    price: "Rs.300/=",
    image: pipeFloralCard2,
  },
];

const WHATSAPP_BASE = "https://wa.me/94750447986";

export default function PipeCleanerProducts() {
  const getWhatsAppLink = (productName: string) => {
    const message = encodeURIComponent(`Hi, I am interested in the ${productName}`);
    return `${WHATSAPP_BASE}?text=${message}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Button
            variant="ghost"
            size="sm"
            className="mb-8 hover:bg-primary/10"
            asChild
          >
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>

          {/* Header */}
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Choose Your <span className="text-gradient-gold">Arrangement</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Handcrafted pipe cleaner flowers that last forever
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pipeCleanerProducts.map((product, index) => (
              <div
                key={`${product.name}-${index}`}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-up flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-secondary">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-primary font-semibold mb-4 flex-1">
                    {product.price}
                  </p>
                  <Button
                    variant="whatsapp"
                    size="lg"
                    className="w-full mt-auto"
                    asChild
                  >
                    <a
                      href={getWhatsAppLink(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Order
                    </a>
                  </Button>
                </div>
              </div>
            ))}

            {/* Customization Card */}
            <div
              className="group bg-gradient-to-br from-primary/10 via-gold/10 to-primary/10 rounded-2xl overflow-hidden border-2 border-dashed border-primary/30 hover:border-primary/60 transition-all duration-300 hover:-translate-y-1 animate-fade-up flex flex-col"
              style={{ animationDelay: `${pipeCleanerProducts.length * 100}ms` }}
            >
              <div className="flex flex-col items-center justify-center h-full p-8 text-center min-h-[400px]">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Sparkles className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-3 text-foreground">
                  Customize Your Order
                </h3>
                <p className="text-muted-foreground mb-6 max-w-xs">
                  Want something unique? Let us create a custom pipe cleaner arrangement just for you!
                </p>
                <Button
                  variant="gold"
                  size="lg"
                  className="w-full max-w-xs"
                  asChild
                >
                  <a
                    href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Hi, I'd like to discuss a custom pipe cleaner flower arrangement")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Discuss Custom Design
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
