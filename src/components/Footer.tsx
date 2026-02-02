import { Heart, Phone, Instagram, MessageCircle, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

// TikTok icon (not in lucide-react)
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/imablossoms", label: "Instagram" },
  { icon: TikTokIcon, href: "https://www.tiktok.com/@ima_blossms", label: "TikTok" },
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61575171537108", label: "Facebook" },
  { icon: MessageCircle, href: "https://wa.me/94750447986", label: "WhatsApp" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <img src={logo} alt="Ima Blossoms" className="h-20 w-auto mx-auto md:mx-0 mb-4" />
            <p className="text-background/80 flex items-center justify-center md:justify-start gap-2">
              Handcrafted with <Heart className="h-4 w-4 text-primary fill-primary" /> in Sri Lanka
            </p>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h3 className="font-display text-xl font-semibold mb-4">Get in Touch</h3>
            <a
              href="tel:+94750447986"
              className="flex items-center justify-center gap-2 text-background/80 hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              +94 75 044 7986
            </a>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h3 className="font-display text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex items-center justify-center md:justify-end gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <p className="text-center text-background/60 text-sm">
            © 2025 Ima Blossoms. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
