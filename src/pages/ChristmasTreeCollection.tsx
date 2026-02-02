import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle, Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import christmasTree1 from "@/assets/christmas-tree-1.jpg";
import christmasTree2 from "@/assets/christmas-tree-2.jpg";
import christmasTree3 from "@/assets/christmas-tree-3.jpg";

const products = [
  {
    id: 1,
    name: "Classic Small Tree",
    size: "Small",
    price: 900,
    image: christmasTree1,
  },
  {
    id: 2,
    name: "Festive Medium Tree",
    size: "Medium",
    price: 1400,
    image: christmasTree2,
  },
  {
    id: 3,
    name: "Grand Large Tree",
    size: "Large",
    price: 1800,
    image: christmasTree3,
  },
];

const bandColors = [
  { name: "Red", value: "#DC2626" },
  { name: "Green", value: "#16A34A" },
  { name: "Gold", value: "#EAB308" },
  { name: "Silver", value: "#94A3B8" },
  { name: "Blue", value: "#2563EB" },
  { name: "Pink", value: "#EC4899" },
  { name: "Purple", value: "#9333EA" },
  { name: "White", value: "#F8FAFC" },
  { name: "Orange", value: "#EA580C" },
  { name: "Teal", value: "#14B8A6" },
];

const WHATSAPP_BASE = "https://wa.me/94750447986";

export default function ChristmasTreeCollection() {
  const [showCustomizer, setShowCustomizer] = useState(false);
  const [selectedSize, setSelectedSize] = useState<"Small" | "Medium" | "Large">("Small");
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const sizeOptions = [
    { size: "Small" as const, price: 900 },
    { size: "Medium" as const, price: 1400 },
    { size: "Large" as const, price: 1800 },
  ];

  const currentPrice = sizeOptions.find(s => s.size === selectedSize)?.price || 900;

  const handleColorToggle = (colorName: string) => {
    if (selectedColors.includes(colorName)) {
      setSelectedColors(selectedColors.filter(c => c !== colorName));
    } else if (selectedColors.length < 5) {
      setSelectedColors([...selectedColors, colorName]);
    }
  };

  const getWhatsAppLink = (productName: string, price: number) => {
    const message = encodeURIComponent(
      `Hi, I am interested in the ${productName} (Rs. ${price}/=)`
    );
    return `${WHATSAPP_BASE}?text=${message}`;
  };

  const getCustomWhatsAppLink = () => {
    const colorsText = selectedColors.length > 0 
      ? selectedColors.join(", ") 
      : "Not specified";
    const message = encodeURIComponent(
      `Hi, I'd like to order a Custom Pipe Cleaner Christmas Tree:\n\n` +
      `Size: ${selectedSize}\n` +
      `Price: Rs. ${currentPrice}/=\n` +
      `Band Colors: ${colorsText}`
    );
    return `${WHATSAPP_BASE}?text=${message}`;
  };

  if (showCustomizer) {
    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-card border-b border-border">
          <div className="container mx-auto px-4 py-6">
            <button
              onClick={() => setShowCustomizer(false)}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Collection
            </button>
            <h1 className="font-display text-3xl sm:text-4xl font-bold">
              Customize Your <span className="text-gradient-gold">Christmas Tree</span>
            </h1>
          </div>
        </div>

        {/* Customizer Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto">
            {/* Size Selector */}
            <div className="bg-card rounded-2xl p-6 shadow-card mb-8">
              <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Step 1: Select Size
              </h2>
              <div className="grid grid-cols-3 gap-4">
                {sizeOptions.map((option) => (
                  <button
                    key={option.size}
                    onClick={() => setSelectedSize(option.size)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      selectedSize === option.size
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="font-semibold text-foreground">{option.size}</div>
                    <div className="text-sm text-muted-foreground">
                      Rs. {option.price}/=
                    </div>
                  </button>
                ))}
              </div>
              <div className="mt-4 p-4 bg-secondary/50 rounded-xl">
                <div className="text-center">
                  <span className="text-muted-foreground">Current Price: </span>
                  <span className="text-2xl font-bold text-gradient-gold">
                    Rs. {currentPrice}/=
                  </span>
                </div>
              </div>
            </div>

            {/* Color Selector */}
            <div className="bg-card rounded-2xl p-6 shadow-card mb-8">
              <h2 className="font-display text-xl font-semibold mb-2 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Step 2: Select Band Colors
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                Choose up to 5 colors for your tree bands
              </p>
              <div className="flex items-center gap-2 mb-4 text-sm">
                <span className="text-muted-foreground">Selected:</span>
                <span className={`font-semibold ${
                  selectedColors.length === 5 ? "text-primary" : "text-foreground"
                }`}>
                  {selectedColors.length}/5
                </span>
              </div>
              <div className="grid grid-cols-5 gap-3">
                {bandColors.map((color) => {
                  const isSelected = selectedColors.includes(color.name);
                  const isDisabled = !isSelected && selectedColors.length >= 5;
                  return (
                    <button
                      key={color.name}
                      onClick={() => handleColorToggle(color.name)}
                      disabled={isDisabled}
                      className={`relative aspect-square rounded-full border-4 transition-all ${
                        isSelected
                          ? "border-primary scale-110 shadow-lg"
                          : isDisabled
                          ? "border-border opacity-40 cursor-not-allowed"
                          : "border-border hover:border-primary/50 hover:scale-105"
                      }`}
                      style={{ backgroundColor: color.value }}
                      title={color.name}
                    >
                      {isSelected && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Check className="h-5 w-5 text-white drop-shadow-lg" />
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
                      className="px-3 py-1 bg-secondary rounded-full text-sm text-foreground"
                    >
                      {colorName}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Order Button */}
            <Button
              variant="whatsapp"
              size="lg"
              className="w-full"
              asChild
            >
              <a
                href={getCustomWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                Order Custom Tree on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="font-display text-3xl sm:text-4xl font-bold">
            Pipe Cleaner <span className="text-gradient-gold">Christmas Trees</span>
          </h1>
          <p className="text-muted-foreground mt-2">
            Handcrafted festive decorations in Small, Medium & Large sizes
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-foreground">
                  {product.size}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-primary font-bold text-lg mb-4">
                  Rs. {product.price}/=
                </p>
                <Button
                  variant="whatsapp"
                  size="lg"
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
            className="group bg-card rounded-2xl overflow-hidden shadow-card hover-lift animate-fade-up border-2 border-dashed border-primary/50"
            style={{ animationDelay: `${products.length * 100}ms` }}
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-primary/20 via-secondary to-primary/10 flex items-center justify-center">
              <div className="text-center p-6">
                <Sparkles className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Choose your size & colors
                </p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                Customize Your Own
              </h3>
              <p className="text-primary font-bold text-lg mb-4">
                Starting at Rs. 900/=
              </p>
              <Button
                variant="gold"
                size="lg"
                className="w-full"
                onClick={() => setShowCustomizer(true)}
              >
                <Sparkles className="h-4 w-4" />
                Start Customizing
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
