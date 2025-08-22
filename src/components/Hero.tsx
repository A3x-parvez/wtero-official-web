import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBackground from "@/assets/hero-tech-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Tech AI background with data streams and circuits" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/60"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full animate-particle-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}

        {/* Circuit Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(210 100% 60%)" />
              <stop offset="100%" stopColor="hsl(280 100% 65%)" />
            </linearGradient>
          </defs>
          {[...Array(5)].map((_, i) => (
            <path
              key={i}
              d={`M${i * 200},0 L${i * 200},${window.innerHeight} M0,${i * 150} L${window.innerWidth},${i * 150}`}
              stroke="url(#circuit-gradient)"
              strokeWidth="1"
              fill="none"
              className="animate-circuit-flow"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
          ))}
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center z-20 relative">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-8 animate-float">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Innovation</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-6 leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Your Imagination,
            </span>
            <br />
            <span className="text-foreground">Our Code</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Transforming businesses with cutting-edge websites, e-commerce solutions, and AI-powered innovations. 
            Building the future of digital experiences, one line of code at a time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="hero"
              size="xl"
              className="group"
              onClick={() => {
                const el = document.getElementById('contact-form');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
          >
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
            <Button variant="outline" size="xl">
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { number: "100+", label: "Projects Delivered" },
              { number: "50+", label: "Happy Clients" },
              { number: "24/7", label: "Support" },
              { number: "AI", label: "Powered Solutions" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating CTA Button */}
      {/* <div className="fixed bottom-8 right-8 z-50">
        <Button variant="floating" size="lg" className="shadow-2xl">
          <Sparkles className="w-5 h-5 mr-2" />
          Start Project
        </Button>
      </div> */}
    </section>
  );
};

export default Hero;