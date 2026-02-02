import { ArrowRight } from "lucide-react";
import categoryFlowers from "@/assets/category-flowers.jpg";
import categoryChocolate from "@/assets/category-chocolate.jpg";
import categoryGiftbox from "@/assets/category-giftbox.jpg";
import categoryHair from "@/assets/category-hair.jpg";

const categories = [
  {
    title: "Everlasting Flowers",
    description: "Ribbon roses, Glitter roses & Pipe Cleaner Sunflowers",
    image: categoryFlowers,
    color: "from-primary/80 to-primary/40",
  },
  {
    title: "Chocolate Bunches",
    description: "Bouquets mixing chocolates with satin roses",
    image: categoryChocolate,
    color: "from-gold/80 to-gold/40",
  },
  {
    title: "The Ultimate Gift Boxes",
    description: "Curated boxes with makeup, jewelry, teddy bears & chocolates",
    image: categoryGiftbox,
    color: "from-rose-gold/80 to-rose-gold/40",
  },
  {
    title: "Hair Boutique",
    description: "Satin scrunchies, pearl bows & fuzzy winter bows",
    image: categoryHair,
    color: "from-hot-pink-light/80 to-hot-pink-light/40",
  },
];

export function Categories() {
  return (
    <section id="categories" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Shop by <span className="text-gradient-gold">Category</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Discover our handcrafted collections, each piece made with love and attention to detail.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <a
              key={category.title}
              href="#products"
              className="group relative rounded-2xl overflow-hidden shadow-card hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60 group-hover:opacity-70 transition-opacity`} />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="font-display text-xl font-semibold mb-2 group-hover:translate-x-2 transition-transform">
                  {category.title}
                </h3>
                <p className="text-white/90 text-sm mb-4">
                  {category.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                  <span>Browse Collection</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>

              {/* Gold border on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold rounded-2xl transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
