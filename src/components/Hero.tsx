import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBackground from "@/assets/hero-tech-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* AI Neural Network Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-background/95 to-background/90">
        {/* Neural Network Nodes */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={`neuron-${i}`}
              className="absolute w-3 h-3 bg-primary rounded-full animate-glow-pulse"
              style={{
                left: `${15 + (i % 4) * 20}%`,
                top: `${20 + Math.floor(i / 4) * 25}%`,
                animationDelay: `${i * 0.3}s`,
                boxShadow: '0 0 20px hsl(210 100% 60% / 0.8)',
              }}
            />
          ))}
        </div>

        {/* Neural Network Connections */}
        <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(210 100% 60%)" />
              <stop offset="50%" stopColor="hsl(280 100% 65%)" />
              <stop offset="100%" stopColor="hsl(160 100% 50%)" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Neural connections */}
          {[...Array(15)].map((_, i) => {
            const x1 = 15 + ((i % 4) * 20);
            const y1 = 20 + (Math.floor(i / 4) * 25);
            const x2 = 15 + (((i + 1) % 4) * 20);
            const y2 = 20 + (Math.floor((i + 1) / 4) * 25);
            
            return (
              <line
                key={`connection-${i}`}
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke="url(#neural-gradient)"
                strokeWidth="2"
                filter="url(#glow)"
                className="animate-circuit-flow"
                style={{ 
                  animationDelay: `${i * 0.2}s`,
                  strokeDasharray: '5,5'
                }}
              />
            );
          })}
        </svg>

        {/* AI Data Streams */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={`stream-${i}`}
              className="absolute w-1 bg-gradient-to-t from-transparent via-accent to-transparent animate-matrix-rain opacity-60"
              style={{
                left: `${10 + i * 12}%`,
                height: '200px',
                animationDelay: `${i * 0.8}s`,
                animationDuration: '4s',
              }}
            />
          ))}
        </div>

        {/* Floating AI Elements */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`ai-element-${i}`}
            className="absolute opacity-30 animate-float"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
              animationDelay: `${i * 1.2}s`,
              fontSize: '24px',
              color: 'hsl(210 100% 60%)',
            }}
          >
            {['🧠', '⚡', '🔗', '💫', '🔮', '⭐'][i]}
          </div>
        ))}

        {/* Robotic Grid Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" 
               style={{
                 backgroundImage: `
                   linear-gradient(90deg, hsl(210 100% 60% / 0.1) 1px, transparent 1px),
                   linear-gradient(hsl(210 100% 60% / 0.1) 1px, transparent 1px)
                 `,
                 backgroundSize: '50px 50px'
               }}
          />
        </div>
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
            <Button variant="hero" size="xl" className="group">
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
      <div className="fixed bottom-8 right-8 z-50">
        <Button variant="floating" size="lg" className="shadow-2xl">
          <Sparkles className="w-5 h-5 mr-2" />
          Start Project
        </Button>
      </div>
    </section>
  );
};

export default Hero;