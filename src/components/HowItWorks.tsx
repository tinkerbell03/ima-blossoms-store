import { Search, Palette, MessageCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Browse",
    description: "Choose your favorite handcrafted item from our beautiful collection.",
    step: "01",
  },
  {
    icon: Palette,
    title: "Customize",
    description: "Pick your colors (Pink, Red, Blue, etc.) and set your budget.",
    step: "02",
  },
  {
    icon: MessageCircle,
    title: "Order",
    description: "Click to chat with us on WhatsApp to finalize your delivery.",
    step: "03",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            How It <span className="text-gradient-pink">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Getting your perfect handcrafted gift is simple and personal.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative text-center group animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-gold to-primary/30" />
              )}

              {/* Icon container */}
              <div className="relative inline-flex">
                <div className="w-32 h-32 rounded-full bg-gradient-blush border-2 border-gold flex items-center justify-center group-hover:shadow-gold transition-shadow">
                  <step.icon className="h-12 w-12 text-primary" />
                </div>
                {/* Step number */}
                <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center text-white font-bold text-sm shadow-gold">
                  {step.step}
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl font-semibold mt-6 mb-3 text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
