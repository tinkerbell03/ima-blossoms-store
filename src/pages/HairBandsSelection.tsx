import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle, Palette, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import hairband1 from "@/assets/hairband-1.png";
import hairband2 from "@/assets/hairband-2.png";
import hairband3 from "@/assets/hairband-3.png";
import hairband4 from "@/assets/hairband-4.png";
import hairband5 from "@/assets/hairband-5.png";

const WHATSAPP_BASE = "https://wa.me/94750447986";

const products = [
  { id: 1, name: "Pink Blossom Band", price: "Rs. 300/=", image: hairband1 },
  { id: 2, name: "Blue Petal Band", price: "Rs. 300/=", image: hairband2 },
  { id: 3, name: "Red Rose Band", price: "Rs. 300/=", image: hairband3 },
  { id: 4, name: "Rainbow Crown Band", price: "Rs. 300/=", image: hairband4 },
  { id: 5, name: "Earth Tone Band", price: "Rs. 300/=", image: hairband5 },
];

const availableColors = [
  { name: "Red", hex: "#E53E3E" },
  { name: "Pink", hex: "#ED64A6" },
  { name: "Hot Pink", hex: "#D53F8C" },
  { name: "Purple", hex: "#805AD5" },
  { name: "Blue", hex: "#3182CE" },
  { name: "Light Blue", hex: "#63B3ED" },
  { name: "Teal", hex: "#38B2AC" },
  { name: "Green", hex: "#38A169" },
  { name: "Yellow", hex: "#ECC94B" },
  { name: "Orange", hex: "#ED8936" },
  { name: "Brown", hex: "#8B4513" },
  { name: "White", hex: "#FFFFFF" },
];

export default function HairBandsSelection() {
  const [showCustomize, setShowCustomize] = useState(false);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const getWhatsAppLink = (productName: string) => {
    const message = encodeURIComponent(`Hi, I am interested in the ${productName} Hair Band`);
    return `${WHATSAPP_BASE}?text=${message}`;
  };

  const getCustomWhatsAppLink = () => {
    const colorNames = selectedColors
      .map((hex) => availableColors.find((c) => c.hex === hex)?.name)
      .join(", ");
    const message = encodeURIComponent(
      `Hi, I'd like to order a custom Pipe Cleaner Hair Band with these colors: ${colorNames}`
    );
    return `${WHATSAPP_BASE}?text=${message}`;
  };

  const toggleColor = (hex: string) => {
    if (selectedColors.includes(hex)) {
      setSelectedColors(selectedColors.filter((c) => c !== hex));
    } else if (selectedColors.length < 5) {
      setSelectedColors([...selectedColors, hex]);
    }
  };

  if (showCustomize) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4 max-w-2xl">
            {/* Back Button */}
            <Button
              variant="ghost"
              className="mb-6"
              onClick={() => {
                setShowCustomize(false);
                setSelectedColors([]);
              }}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Selection
            </Button>

            {/* Customization Header */}
            <div className="text-center mb-8 animate-fade-up">
              <h1 className="font-display text-3xl sm:text-4xl font-bold mb-4">
                Design Your <span className="text-gradient-gold">Hair Band</span>
              </h1>
              <p className="text-muted-foreground">
                Choose up to 5 colors for your custom hair band
              </p>
            </div>

            {/* Color Selection */}
            <div className="bg-card rounded-2xl p-6 shadow-card animate-fade-up">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-xl font-semibold">Select Colors</h2>
                <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                  Selected: {selectedColors.length}/5
                </span>
              </div>

              {/* Color Grid */}
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-3 mb-6">
                {availableColors.map((color) => {
                  const isSelected = selectedColors.includes(color.hex);
                  const isDisabled = !isSelected && selectedColors.length >= 5;

                  return (
                    <button
                      key={color.hex}
                      onClick={() => toggleColor(color.hex)}
                      disabled={isDisabled}
                      className={`relative aspect-square rounded-xl transition-all duration-200 ${
                        isSelected
                          ? "ring-2 ring-primary ring-offset-2 ring-offset-background scale-95"
                          : isDisabled
                          ? "opacity-40 cursor-not-allowed"
                          : "hover:scale-105 hover:shadow-lg"
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    >
                      {isSelected && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Check
                            className={`h-6 w-6 ${
                              color.hex === "#FFFFFF" ? "text-gray-800" : "text-white"
                            }`}
                          />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Selected Colors Preview */}
              {selectedColors.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-muted-foreground mb-3">
                    Your Selection:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedColors.map((hex) => {
                      const color = availableColors.find((c) => c.hex === hex);
                      return (
                        <div
                          key={hex}
                          className="flex items-center gap-2 bg-secondary px-3 py-1.5 rounded-full"
                        >
                          <div
                            className="w-4 h-4 rounded-full border border-border"
                            style={{ backgroundColor: hex }}
                          />
                          <span className="text-sm">{color?.name}</span>
                          <button
                            onClick={() => toggleColor(hex)}
                            className="text-muted-foreground hover:text-foreground"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Price */}
              <div className="text-center py-4 border-t border-border">
                <p className="text-2xl font-display font-bold text-primary">Rs. 300/=</p>
              </div>

              {/* Order Button */}
              <Button
                variant="whatsapp"
                size="lg"
                className="w-full"
                disabled={selectedColors.length === 0}
                asChild={selectedColors.length > 0}
              >
                {selectedColors.length > 0 ? (
                  <a
                    href={getCustomWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Order on WhatsApp
                  </a>
                ) : (
                  <span>Select at least 1 color</span>
                )}
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Button variant="ghost" className="mb-6" asChild>
            <Link to="/#products">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Link>
          </Button>

          {/* Header */}
          <div className="text-center mb-12 animate-fade-up">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Choose Your <span className="text-gradient-gold">Hair Band</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Select a ready-made design or customize your own with your favorite colors
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover-lift animate-fade-up"
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
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold mb-1 text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-primary font-bold text-lg mb-4">{product.price}</p>
                  <Button variant="whatsapp" className="w-full" asChild>
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

            {/* Customize Card */}
            <div
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover-lift animate-fade-up border-2 border-dashed border-primary/30"
              style={{ animationDelay: `${products.length * 100}ms` }}
            >
              {/* Custom Visual */}
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-primary/10 via-secondary to-primary/5 flex items-center justify-center">
                <div className="text-center">
                  <Palette className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground text-sm px-4">
                    Mix your favorite colors
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold mb-1 text-foreground group-hover:text-primary transition-colors">
                  Customize Your Own
                </h3>
                <p className="text-primary font-bold text-lg mb-4">Starting at Rs. 300/=</p>
                <Button
                  variant="gold"
                  className="w-full"
                  onClick={() => setShowCustomize(true)}
                >
                  <Palette className="h-4 w-4" />
                  Design Now
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
