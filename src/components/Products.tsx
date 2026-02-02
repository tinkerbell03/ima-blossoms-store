import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import productGlitterRose from "@/assets/product-glitter-rose.jpg";
import productScrunchie from "@/assets/product-scrunchie.jpg";
import productHamper from "@/assets/product-hamper.jpg";
import productPearlBow from "@/assets/product-pearl-bow.jpg";
import productSunflower from "@/assets/product-sunflower.jpg";
import productRedRoses from "@/assets/product-red-roses.jpg";
import productChocolateBunch from "@/assets/product-chocolate-bunch.jpg";
import productChristmasTree from "@/assets/product-christmas-tree.jpg";
import productHairband from "@/assets/product-hairband.jpg";

const products = [
  {
    name: "Glitter Rose Bouquet",
    price: "Starting from Rs. 400",
    image: productGlitterRose,
    category: "Everlasting Flowers",
  },
  {
    name: "Scrunchie & Hair Collection",
    price: "Starting from Rs. 200",
    image: productScrunchie,
    category: "Hair Boutique",
  },
  {
    name: "Custom Birthday Hamper",
    price: "Starting from Rs. 2,500",
    image: productHamper,
    category: "Gift Boxes",
  },
  {
    name: "Pearl Bow Hair Clip",
    price: "Starting from Rs. 350",
    image: productPearlBow,
    category: "Hair Boutique",
  },
  {
    name: "Pipe Cleaner Flowers",
    price: "Starting from Rs. 300",
    image: productSunflower,
    category: "Everlasting Flowers",
  },
  {
    name: "Ribbon Rose Bouquet",
    price: "Starting from Rs. 300",
    image: productRedRoses,
    category: "Everlasting Flowers",
  },
  {
    name: "Chocolate Bunch",
    price: "Starting from Rs. 2,500",
    image: productChocolateBunch,
    category: "Chocolate Bunches",
  },
  {
    name: "Pipe Cleaner Christmas Trees",
    price: "Starting from Rs. 900",
    image: productChristmasTree,
    category: "Seasonal Decor",
  },
  {
    name: "Pipe Cleaner Hair Band",
    price: "Starting from Rs. 300",
    image: productHairband,
    category: "Hair Boutique",
  },
];

const WHATSAPP_BASE = "https://wa.me/94750447986";

export function Products() {
  const getWhatsAppLink = (productName: string) => {
    const message = encodeURIComponent(`Hi, I am interested in the ${productName}`);
    return `${WHATSAPP_BASE}?text=${message}`;
  };

  return (
    <section id="products" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient-gold">Products</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Each piece is lovingly handcrafted. Click to order via WhatsApp.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Category badge */}
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-foreground">
                  {product.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {product.price}
                </p>
                {product.name === "Glitter Rose Bouquet" ? (
                  <Button
                    variant="gold"
                    size="lg"
                    className="w-full"
                    asChild
                  >
                    <Link to="/glitter-rose-collection">
                      View Collection
                    </Link>
                  </Button>
                ) : product.name === "Scrunchie & Hair Collection" ? (
                  <Button
                    variant="gold"
                    size="lg"
                    className="w-full"
                    asChild
                  >
                    <Link to="/scrunchie-variations">
                      View Collection
                    </Link>
                  </Button>
                ) : product.name === "Pipe Cleaner Flowers" ? (
                  <Button
                    variant="gold"
                    size="lg"
                    className="w-full"
                    asChild
                  >
                    <Link to="/pipe-cleaner-products">
                      View Collection
                    </Link>
                  </Button>
                ) : product.name === "Pipe Cleaner Hair Band" ? (
                  <Button
                    variant="gold"
                    size="lg"
                    className="w-full"
                    asChild
                  >
                    <Link to="/hair-bands-selection">
                      View Collection
                    </Link>
                  </Button>
                ) : product.name === "Ribbon Rose Bouquet" ? (
                  <Button
                    variant="gold"
                    size="lg"
                    className="w-full"
                    asChild
                  >
                    <Link to="/ribbon-rose-selection">
                      View Collection
                    </Link>
                  </Button>
                ) : product.name === "Pipe Cleaner Christmas Trees" ? (
                  <Button
                    variant="gold"
                    size="lg"
                    className="w-full"
                    asChild
                  >
                    <Link to="/christmas-tree-collection">
                      View Collection
                    </Link>
                  </Button>
                ) : (
                  <Button
                    variant="whatsapp"
                    size="lg"
                    className="w-full"
                    asChild
                  >
                    <a
                      href={getWhatsAppLink(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Order on WhatsApp
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-up">
          <p className="text-muted-foreground mb-4">
            Don't see what you're looking for? We create custom pieces!
          </p>
          <Button variant="gold" size="lg" asChild>
            <a
              href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Hi, I'd like to discuss a custom order")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-4 w-4" />
              Request Custom Order
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
