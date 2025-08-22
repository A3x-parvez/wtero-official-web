import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { url } from "inspector";
import { Mail, MapPin, ArrowUp, Github, Instagram, Linkedin, Twitter, MessageCircle, Facebook } from "lucide-react";
import { URL } from "url";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Website Development",
    "E-Commerce Solutions",
    "AI Integration",
    "Mobile Development",
    "Digital Marketing",
    "Branding & Design"
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-background-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, hsl(210 100% 60%) 1px, transparent 1px),
                             radial-gradient(circle at 80% 20%, hsl(280 100% 65%) 1px, transparent 1px),
                             radial-gradient(circle at 40% 40%, hsl(160 100% 50%) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <h3 className="text-3xl font-bold font-poppins bg-gradient-primary bg-clip-text text-transparent mb-4">
                Wtero
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Transforming businesses with cutting-edge technology solutions. 
                Your imagination, our code.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">contact@wtero.com</span>
                </div>
                {/* <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">+1 (555) 123-4567</span>
                </div> */}
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">Kolkata-West Bengal, India</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection("#services")}
                      className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300 cursor-pointer"
                    >
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Stay Updated</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Subscribe to our newsletter for the latest tech insights and updates.
              </p>
              <form action="https://formsubmit.co/rijwanoolkarim143r@gmail.com" method="POST" className="space-y-3">
              <input type="hidden" name="_subject" value="Newsletter Subscription" />
              <input type="hidden" name="_next" value="https://www.wtero.com" />
              <input type="hidden" name="_captcha" value="false" />

              <Input 
                type="email" 
                name="email"
                placeholder="Enter your email" 
                className="bg-background/50"
                required
              />
              <Button type="submit" variant="cta" className="w-full">
                Subscribe
              </Button>
              </form>

            {/* Social Links */}
            <div className="mt-6">
              <p className="text-sm text-muted-foreground mb-3">Follow us on:</p>
                <div className="flex gap-3">
                  {[
                    { name: "LinkedIn", url: "https://www.linkedin.com/company/wtero-tech/", icon: <Linkedin className="w-6 h-6" /> },
                    { name: "Whatsapp", url: "https://www.whatsapp.com/channel/0029Vb6tHAc0wajyJV4Wfu1s", icon: <MessageCircle className="w-6 h-6" /> },
                    { name: "Facebook", url: "https://www.facebook.com/share/1CsFxqg4YD/", icon: <Facebook className="w-6 h-6" /> },
                    { name: "Instagram", url: "https://www.instagram.com/wteroofficial/", icon: <Instagram className="w-6 h-6" /> }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-card border border-card-border rounded-lg flex items-center justify-center hover:border-primary/40 hover:scale-110 transition-all duration-300 hover:shadow-neon"
                    >
                      <span className="text-lg">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-card-border py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 Wtero. All rights reserved. Built with ❤️ for innovation.
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>

            {/* Back to Top Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="hover:scale-110 transition-transform duration-300"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;