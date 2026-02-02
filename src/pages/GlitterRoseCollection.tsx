import { useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, ArrowLeft, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// Product images
import blushingRomance from "@/assets/glitter-blushing-romance.jpg";
import blackGold from "@/assets/glitter-black-gold.jpg";
import loveYou from "@/assets/glitter-love-you.jpg";
import gildedRomance from "@/assets/glitter-gilded-romance.jpg";
import happyBirthday from "@/assets/glitter-happy-birthday.jpg";
import royalCrimson from "@/assets/glitter-royal-crimson.jpg";
import majesticBirthday from "@/assets/glitter-majestic-birthday.jpg";
import royalHeart from "@/assets/glitter-royal-heart.jpg";
import pinkDiamond from "@/assets/glitter-pink-diamond.jpg";

const WHATSAPP_BASE = "https://wa.me/94750447986";

const glitterProducts = [
  {
    name: "Blushing Romance Bunch",
    description: "Pink and white 12 glitter flower bunch with love you card",
    price: "Rs.2600/=",
    image: blushingRomance,
  },
  {
    name: "Black Gold Sparkle Flower Bunch",
    description: "Black and White color 12 glitter flower bunch",
    price: "Rs.2600/=",
    image: blackGold,
  },
  {
    name: "Love You Flower Bunch",
    description: "Pink glitter flower bunch with love you card and cute bows",
    price: "Rs.2600/=",
    image: loveYou,
  },
  {
    name: "Gilded Romance Bunch",
    description: "Hot pink color 12 glitter flower bunch with butterfly, baby's breath, and love you card",
    price: "Rs.2900/=",
    image: gildedRomance,
  },
  {
    name: "Happy Birthday Flower Bunch",
    description: "Purple color 25 glitter flower bunch with happy birthday ribbon",
    price: "Rs.4600/=",
    image: happyBirthday,
  },
  {
    name: "Royal Crimson Flower Bunch",
    description: "Red color 12 glitter flower bunch",
    price: "Rs.2500/=",
    image: royalCrimson,
  },
  {
    name: "Majestic Birthday Flower Bunch",
    description: "Pink 12 glitter flower bunch with happy birthday card",
    price: "Rs.2600/=",
    image: majesticBirthday,
  },
  {
    name: "Royal Heart Flower Bunch",
    description: "Blue 25 glitter flower bunch",
    price: "Rs.4600/=",
    image: royalHeart,
  },
  {
    name: "Pink Diamond Flower Bunch",
    description: "Hot pink and white color 12 glitter flower bunch with happy birthday ribbon",
    price: "Rs.2600/=",
    image: pinkDiamond,
  },
];

const ALLOWED_QUANTITIES = [1, 3, 6, 7, 11, 12, 26, 30, 50, 100];

const AVAILABLE_COLORS = [
  { name: "Red", value: "#DC2626" },
  { name: "Pink", value: "#EC4899" },
  { name: "Hot Pink", value: "#DB2777" },
  { name: "Purple", value: "#9333EA" },
  { name: "Blue", value: "#2563EB" },
  { name: "Gold", value: "#D4A574" },
  { name: "Black", value: "#1F2937" },
  { name: "White", value: "#F9FAFB" },
  { name: "Silver", value: "#9CA3AF" },
  { name: "Orange", value: "#EA580C" },
  { name: "Yellow", value: "#EAB308" },
  { name: "Green", value: "#16A34A" },
];

export default function GlitterRoseCollection() {
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedQuantity, setSelectedQuantity] = useState<number | null>(null);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const getWhatsAppLink = (productName: string) => {
    const message = encodeURIComponent(`Hi, I am interested in the ${productName} from the Glitter Rose Collection`);
    return `${WHATSAPP_BASE}?text=${message}`;
  };

  const handleColorToggle = (colorName: string) => {
    if (selectedColors.includes(colorName)) {
      setSelectedColors(selectedColors.filter((c) => c !== colorName));
    } else if (selectedColors.length < 5) {
      setSelectedColors([...selectedColors, colorName]);
    }
  };

  const handleSendCustomOrder = () => {
    const colorsText = selectedColors.join(", ");
    const message = encodeURIComponent(
      `Hi, I'd like to place a custom Glitter Rose order:\n\n🌹 Quantity: ${selectedQuantity} flowers\n🎨 Colors: ${colorsText}\n\nPlease let me know the price and availability.`
    );
    window.open(`${WHATSAPP_BASE}?text=${message}`, "_blank");
    resetCustomModal();
  };

  const resetCustomModal = () => {
    setIsCustomModalOpen(false);
    setStep(1);
    setSelectedQuantity(null);
    setSelectedColors([]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <div className="text-center">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Glitter Rose <span className="text-gradient-gold">Collection</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Discover our stunning handcrafted glitter rose bouquets, perfect for any occasion. Each piece sparkles with elegance.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {glitterProducts.map((product, index) => (
              <div
                key={product.name}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover-lift animate-fade-up flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
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
                  <p className="text-muted-foreground text-sm mb-3 flex-1">
                    {product.description}
                  </p>
                  <p className="text-primary font-semibold mb-4">
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
              className="group bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl overflow-hidden shadow-card hover-lift animate-fade-up border-2 border-dashed border-primary/30 cursor-pointer"
              style={{ animationDelay: "900ms" }}
              onClick={() => setIsCustomModalOpen(true)}
            >
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                  <Sparkles className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-3 text-foreground">
                  Customize Your Own Bouquet
                </h3>
                <p className="text-muted-foreground mb-6">
                  Create a unique arrangement with your choice of quantity and colors
                </p>
                <Button variant="gold" size="lg">
                  <Sparkles className="h-4 w-4" />
                  Start Customizing
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Order Modal */}
      <Dialog open={isCustomModalOpen} onOpenChange={resetCustomModal}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">
              {step === 1 ? "Step 1: Select Quantity" : "Step 2: Choose Colors"}
            </DialogTitle>
          </DialogHeader>

          {step === 1 ? (
            <div className="space-y-6">
              <p className="text-muted-foreground">
                How many glitter flowers would you like in your bouquet?
              </p>
              <div className="grid grid-cols-5 gap-3">
                {ALLOWED_QUANTITIES.map((qty) => (
                  <button
                    key={qty}
                    onClick={() => setSelectedQuantity(qty)}
                    className={`p-4 rounded-xl border-2 font-semibold transition-all ${
                      selectedQuantity === qty
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border hover:border-primary/50 text-foreground"
                    }`}
                  >
                    {qty}
                  </button>
                ))}
              </div>
              <Button
                variant="gold"
                size="lg"
                className="w-full"
                disabled={!selectedQuantity}
                onClick={() => setStep(2)}
              >
                Next: Choose Colors
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Select up to 5 colors for your bouquet ({selectedColors.length}/5 selected)
              </p>
              <div className="grid grid-cols-4 gap-3">
                {AVAILABLE_COLORS.map((color) => {
                  const isSelected = selectedColors.includes(color.name);
                  return (
                    <button
                      key={color.name}
                      onClick={() => handleColorToggle(color.name)}
                      disabled={!isSelected && selectedColors.length >= 5}
                      className={`relative p-3 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
                        isSelected
                          ? "border-primary bg-primary/10"
                          : selectedColors.length >= 5
                          ? "opacity-50 cursor-not-allowed border-border"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div
                        className="w-8 h-8 rounded-full border-2 border-border/50"
                        style={{ backgroundColor: color.value }}
                      />
                      <span className="text-xs font-medium text-foreground">{color.name}</span>
                      {isSelected && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-xs text-primary-foreground font-bold">✓</span>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1"
                  onClick={() => setStep(1)}
                >
                  Back
                </Button>
                <Button
                  variant="whatsapp"
                  size="lg"
                  className="flex-1"
                  disabled={selectedColors.length === 0}
                  onClick={handleSendCustomOrder}
                >
                  <MessageCircle className="h-4 w-4" />
                  Send Custom Order
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
