import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// Import product images
import scrunchBrownVelvet from "@/assets/scrunchie-brown-velvet.jpg";
import scrunchBlackVelvet from "@/assets/scrunchie-black-velvet.jpg";
import scrunchTieDye from "@/assets/scrunchie-tie-dye.png";
import scrunchPearlBow from "@/assets/scrunchie-pearl-bow.jpg";
import scrunchRibbon from "@/assets/scrunchie-ribbon.png";

const WHATSAPP_BASE = "https://wa.me/94750447986";

const scrunchieProducts = [
  {
    name: "Brown Velvet Scrunchies",
    price: "Rs.200/=",
    image: scrunchBrownVelvet,
  },
  {
    name: "Black Velvet Scrunchies",
    price: "Rs.200/=",
    image: scrunchBlackVelvet,
  },
  {
    name: "Tie-Dye Knot Scrunchies",
    price: "Rs.100/=",
    image: scrunchTieDye,
  },
  {
    name: "Pearl-Embellished Bow Clips",
    price: "Rs.200/=",
    image: scrunchPearlBow,
  },
  {
    name: "Long Ribbon/Scarf Scrunchies",
    price: "Rs.300/=",
    image: scrunchRibbon,
  },
];

const ScrunchieVariations = () => {
  const getWhatsAppLink = (productName: string) => {
    const message = encodeURIComponent(
      `Hi, I would like to order: ${productName}`
    );
    return `${WHATSAPP_BASE}?text=${message}`;
  };

  const getCustomOrderLink = () => {
    const message = encodeURIComponent(
      `Hi, I'd like to discuss a custom scrunchie/hair accessory order`
    );
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
            className="mb-8 group"
            asChild
          >
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </Button>

          {/* Header */}
          <div className="text-center mb-12 animate-fade-up">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Scrunchie & Hair <span className="text-gradient-gold">Collection</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Explore our beautiful selection of handcrafted scrunchies and hair accessories
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {scrunchieProducts.map((product, index) => (
              <div
                key={product.name}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover-lift animate-fade-up flex flex-col"
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

            {/* Custom Order Card */}
            <div
              className="group bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl overflow-hidden shadow-card hover-lift animate-fade-up flex flex-col border-2 border-dashed border-primary/30"
              style={{ animationDelay: `${scrunchieProducts.length * 100}ms` }}
            >
              {/* Icon Section */}
              <div className="relative aspect-square overflow-hidden bg-secondary/50 flex items-center justify-center">
                <div className="text-center p-8">
                  <Sparkles className="h-16 w-16 mx-auto mb-4 text-primary" />
                  <p className="text-lg font-medium text-foreground">
                    Create Something Unique
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  Customize Your Order
                </h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">
                  Want something special? Let's create your perfect hair accessory together!
                </p>
                <Button
                  variant="gold"
                  size="lg"
                  className="w-full mt-auto"
                  asChild
                >
                  <a
                    href={getCustomOrderLink()}
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
};

export default ScrunchieVariations;
