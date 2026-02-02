import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle, Palette, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

import ribbonRose1 from "@/assets/ribbon-rose-1.jpg";
import ribbonRose2 from "@/assets/ribbon-rose-2.jpg";
import ribbonRose3 from "@/assets/ribbon-rose-3.jpg";
import ribbonRose4 from "@/assets/ribbon-rose-4.jpg";
import ribbonRose5 from "@/assets/ribbon-rose-5.jpg";
import ribbonRose6 from "@/assets/ribbon-rose-6.jpg";
import ribbonRose7 from "@/assets/ribbon-rose-7.jpg";
import ribbonRose8 from "@/assets/ribbon-rose-8.jpg";
import ribbonRose9 from "@/assets/ribbon-rose-9.jpg";
import ribbonRose10 from "@/assets/ribbon-rose-10.jpg";
import ribbonRose11 from "@/assets/ribbon-rose-11.jpg";
import ribbonRose12 from "@/assets/ribbon-rose-12.jpg";
import ribbonRose13 from "@/assets/ribbon-rose-13.jpg";
import ribbonRose14 from "@/assets/ribbon-rose-14.jpg";
import ribbonRose15 from "@/assets/ribbon-rose-15.jpg";
import ribbonRose16 from "@/assets/ribbon-rose-16.jpg";
import ribbonRose17 from "@/assets/ribbon-rose-17.jpg";
import ribbonRose18 from "@/assets/ribbon-rose-18.jpg";
import ribbonRose19 from "@/assets/ribbon-rose-19.jpg";
import ribbonRose20 from "@/assets/ribbon-rose-20.jpg";
import ribbonRose21 from "@/assets/ribbon-rose-21.jpg";
import ribbonRose22 from "@/assets/ribbon-rose-22.jpg";
import ribbonRose23 from "@/assets/ribbon-rose-23.jpg";
import ribbonRose24 from "@/assets/ribbon-rose-24.jpg";
import ribbonRose25 from "@/assets/ribbon-rose-25.png";

const products = [
  { id: 1, name: "Grand Celebration Bouquet", price: "Rs. 8500/=", image: ribbonRose1 },
  { id: 2, name: "Blue Elegance Bouquet", price: "Rs. 2400/=", image: ribbonRose2 },
  { id: 3, name: "Pink Butterfly Dream", price: "Rs. 4300/=", image: ribbonRose3 },
  { id: 4, name: "Purple Passion Bouquet", price: "Rs. 2400/=", image: ribbonRose4 },
  { id: 5, name: "Royal Blue Bouquet", price: "Rs. 2200/=", image: ribbonRose5 },
  { id: 6, name: "Classic Red & White", price: "Rs. 2200/=", image: ribbonRose6 },
  { id: 7, name: "Pink Blossom Bouquet", price: "Rs. 2400/=", image: ribbonRose7 },
  { id: 8, name: "Mini Red Roses", price: "Rs. 800/=", image: ribbonRose8 },
  { id: 9, name: "Magenta Delight", price: "Rs. 1600/=", image: ribbonRose9 },
  { id: 10, name: "Single Rose Gift", price: "Rs. 900/=", image: ribbonRose10 },
  { id: 11, name: "Pearl Pink Bouquet", price: "Rs. 1600/=", image: ribbonRose11 },
  { id: 12, name: "Sweet Pink Mini", price: "Rs. 1600/=", image: ribbonRose12 },
  { id: 13, name: "Magenta Gift Box", price: "Rs. 1600/=", image: ribbonRose13 },
  { id: 14, name: "Royal Blue Wrapped", price: "Rs. 1600/=", image: ribbonRose14 },
  { id: 15, name: "Peach Butterfly Bouquet", price: "Rs. 1600/=", image: ribbonRose15 },
  { id: 16, name: "Golden Yellow Box", price: "Rs. 1600/=", image: ribbonRose16 },
  { id: 17, name: "Newspaper Wrapped Roses", price: "Rs. 1600/=", image: ribbonRose17 },
  { id: 18, name: "Love You Bouquet", price: "Rs. 2400/=", image: ribbonRose18 },
  { id: 19, name: "Green & Gold Bouquet", price: "Rs. 1600/=", image: ribbonRose19 },
  { id: 20, name: "Blush Pink Classic", price: "Rs. 800/=", image: ribbonRose20 },
  { id: 21, name: "Graduation Blue Bear", price: "Rs. 2900/=", image: ribbonRose21 },
  { id: 22, name: "Graduation Pink Bear", price: "Rs. 2900/=", image: ribbonRose22 },
  { id: 23, name: "Pink & White Elegance", price: "Rs. 2200/=", image: ribbonRose23 },
  { id: 24, name: "Anniversary Red Mini", price: "Rs. 900/=", image: ribbonRose24 },
  { id: 25, name: "Birthday Card Rose", price: "Rs. 300/=", image: ribbonRose25 },
];

const WHATSAPP_BASE = "https://wa.me/94750447986";

const quantityOptions = [1, 3, 6, 7, 11, 12, 26, 30, 50, 100];

const colorPalette = [
  { name: "Red", value: "hsl(0, 85%, 45%)" },
  { name: "Pink", value: "hsl(330, 85%, 60%)" },
  { name: "Hot Pink", value: "hsl(330, 100%, 50%)" },
  { name: "White", value: "hsl(0, 0%, 95%)" },
  { name: "Blue", value: "hsl(220, 85%, 50%)" },
  { name: "Purple", value: "hsl(280, 70%, 45%)" },
  { name: "Yellow", value: "hsl(50, 95%, 55%)" },
  { name: "Orange", value: "hsl(30, 95%, 55%)" },
  { name: "Lavender", value: "hsl(270, 60%, 70%)" },
  { name: "Coral", value: "hsl(15, 85%, 60%)" },
  { name: "Mint", value: "hsl(150, 60%, 70%)" },
  { name: "Peach", value: "hsl(25, 80%, 75%)" },
];

export default function RibbonRoseSelection() {
  const [showCustomize, setShowCustomize] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState<number | null>(null);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const { toast } = useToast();

  const handleColorToggle = (colorName: string) => {
    if (selectedColors.includes(colorName)) {
      setSelectedColors(selectedColors.filter((c) => c !== colorName));
    } else {
      if (selectedColors.length >= 5) {
        toast({
          title: "Maximum colors reached",
          description: "You can select up to 5 colors only.",
          variant: "destructive",
        });
        return;
      }
      setSelectedColors([...selectedColors, colorName]);
    }
  };

  const getWhatsAppLink = (productName: string, price: string) => {
    const message = encodeURIComponent(
      `Hi, I am interested in the ${productName} (${price})`
    );
    return `${WHATSAPP_BASE}?text=${message}`;
  };

  const handleFinalizeOrder = () => {
    if (!selectedQuantity) {
      toast({
        title: "Please select quantity",
        description: "Choose the number of flowers for your bouquet.",
        variant: "destructive",
      });
      return;
    }
    if (selectedColors.length === 0) {
      toast({
        title: "Please select colors",
        description: "Choose at least one color for your bouquet.",
        variant: "destructive",
      });
      return;
    }

    const colorsText = selectedColors.join(", ");
    const message = encodeURIComponent(
      `Hi, I'd like to order a Custom Ribbon Rose Bouquet:\n\n• Number of flowers: ${selectedQuantity}\n• Colors: ${colorsText}\n\nPlease let me know the price and availability.`
    );
    window.open(`${WHATSAPP_BASE}?text=${message}`, "_blank");
  };

  if (showCustomize) {
    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-card border-b border-border sticky top-0 z-10">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowCustomize(false)}
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="font-display text-xl font-bold">
                  Customize Your Bouquet
                </h1>
                <p className="text-sm text-muted-foreground">
                  Design your perfect ribbon rose arrangement
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 max-w-2xl">
          {/* Step 1: Quantity */}
          <div className="bg-card rounded-2xl p-6 shadow-card mb-6">
            <h2 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">
                1
              </span>
              Number of Flowers
            </h2>
            <div className="flex flex-wrap gap-2">
              {quantityOptions.map((qty) => (
                <button
                  key={qty}
                  onClick={() => setSelectedQuantity(qty)}
                  className={`px-4 py-2 rounded-full border-2 transition-all font-medium ${
                    selectedQuantity === qty
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background hover:border-primary/50"
                  }`}
                >
                  {qty}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Colors */}
          <div className="bg-card rounded-2xl p-6 shadow-card mb-6">
            <h2 className="font-display text-lg font-semibold mb-2 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">
                2
              </span>
              Choose Colors
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              Selected: {selectedColors.length}/5 colors
            </p>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
              {colorPalette.map((color) => {
                const isSelected = selectedColors.includes(color.name);
                return (
                  <button
                    key={color.name}
                    onClick={() => handleColorToggle(color.name)}
                    className={`relative aspect-square rounded-xl transition-all ${
                      isSelected
                        ? "ring-2 ring-primary ring-offset-2 scale-105"
                        : "hover:scale-105"
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  >
                    {isSelected && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-xl">
                        <Check className="h-5 w-5 text-white" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
            {selectedColors.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {selectedColors.map((colorName) => (
                  <span
                    key={colorName}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-secondary rounded-full text-sm"
                  >
                    {colorName}
                    <button
                      onClick={() => handleColorToggle(colorName)}
                      className="hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Finalize */}
          <Button
            variant="whatsapp"
            size="lg"
            className="w-full"
            onClick={handleFinalizeOrder}
          >
            <MessageCircle className="h-5 w-5" />
            Finalize Order on WhatsApp
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/#products">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <div>
              <h1 className="font-display text-xl sm:text-2xl font-bold">
                Ribbon Rose Bouquets
              </h1>
              <p className="text-sm text-muted-foreground">
                Select a design or customize your own
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="aspect-[4/5] overflow-hidden bg-secondary">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-display text-sm sm:text-base font-semibold mb-1 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-primary font-bold mb-3">{product.price}</p>
                <Button
                  variant="whatsapp"
                  size="sm"
                  className="w-full"
                  asChild
                >
                  <a
                    href={getWhatsAppLink(product.name, product.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Buy Now
                  </a>
                </Button>
              </div>
            </div>
          ))}

          {/* Customize Card */}
          <div
            onClick={() => setShowCustomize(true)}
            className="group bg-card rounded-2xl overflow-hidden shadow-card hover-lift animate-fade-up cursor-pointer border-2 border-dashed border-primary/30 hover:border-primary transition-colors"
            style={{ animationDelay: `${products.length * 50}ms` }}
          >
            <div className="aspect-[4/5] bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
              <div className="text-center p-4">
                <Palette className="h-12 w-12 mx-auto text-primary mb-3" />
                <p className="text-muted-foreground text-sm">
                  Mix your favorite colors
                </p>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-display text-sm sm:text-base font-semibold mb-1 text-primary">
                Customize Your Own
              </h3>
              <p className="text-muted-foreground text-sm mb-3">
                Starting at Rs. 300/=
              </p>
              <Button variant="gold" size="sm" className="w-full">
                Create Your Design
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
