import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils"; // Make sure to import cn utility

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  // This useEffect hook handles scroll events to update the navbar's appearance
  // and highlight the active section based on the user's scroll position.
  useEffect(() => {
    const handleScroll = () => {
      // Handle navbar background change and shadow
      setIsScrolled(window.scrollY > 50);

      // Handle active section highlighting
      const sections = navItems.map(item => document.querySelector(item.href));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let currentSection = "";
      for (const section of sections) {
        if (section) {
          const sectionTop = (section as HTMLElement).offsetTop;
          const sectionHeight = (section as HTMLElement).offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = `#${section.id}`;
            break;
          }
        }
      }
      // If no section is in view (e.g., at the very top or bottom), default to home or contact
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        currentSection = "#contact";
      } else if (window.scrollY < 200) {
        currentSection = "#home";
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount to set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // navItems is stable, so it's not needed as a dependency

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "AI Innovation", href: "#ai-innovation" },
    { name: "Portfolio", href: "#portfolio" },
    // { name: "Reviews", href: "#reviews" },
    // { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  // Function to smoothly scroll to a section when a nav item is clicked
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 shadow-glow", // Always apply shadow-glow
      isScrolled && "bg-background/80 backdrop-blur-md border-b border-card-border/20" // Add styles on scroll
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('#home')}>
            <img 
              // src="/lovable-uploads/ccf21b99-863e-4886-8f91-869a8332e841.png" 
              src="/uploads/wtero_main.png" 
              alt="Wtero Logo" 
              className="h-9 w-auto"
            />
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent font-orbitron">
              Wtero
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "px-4 py-2 rounded-md text-base font-medium transition-all duration-300 hover:text-primary hover:-translate-y-0.5",
                  activeSection === item.href
                    ? "text-primary drop-shadow-[0_0_8px_hsl(var(--primary))]" // Active link with glow
                    : "text-foreground"
                )}
              >
                {item.name}
              </button>
            ))}
            {/* <Button variant="cta" size="sm">Get Free Consultation</Button> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-primary"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="bg-card/95 backdrop-blur-md border border-card-border rounded-lg mb-4 shadow-float">
            <div className="p-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "block w-full text-left px-4 py-3 rounded-lg text-foreground text-base transition-colors duration-300",
                    activeSection === item.href
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-primary/10"
                  )}
                >
                  {item.name}
                </button>
              ))}
              {/* <div className="pt-2">
                <Button variant="cta" size="sm" className="w-full">Get Free Consultation</Button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
