import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, ShoppingCart, Smartphone, Search, Palette, Shield, MessageSquare,Bot } from "lucide-react";
import servicesBackground from "@/assets/services-bg.jpg";
const Services = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Website Development",
      description: "Custom, responsive websites that captivate your audience and drive conversions.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern UI/UX"],
      isAvailable: true
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-accent" />,
      title: "E-Commerce Solutions",
      description: "Powerful online stores that maximize sales and provide seamless shopping experiences.",
      features: ["Payment Integration", "Inventory Management", "Mobile Commerce", "Analytics"],
      isAvailable: true
    },
    {
      icon: <Smartphone className="w-8 h-8 text-secondary" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps that engage users on every device.",
      features: ["iOS & Android", "Cross-Platform", "Push Notifications", "Offline Support"],
      isAvailable: false
    },
    {
      icon: <Search className="w-8 h-8 text-primary-glow" />,
      title: "SEO & Marketing",
      description: "Comprehensive digital marketing strategies that boost your online presence.",
      features: ["Keyword Research", "Content Strategy", "Local SEO", "Performance Tracking"],
      isAvailable: true
    },
    {
      icon: <Palette className="w-8 h-8 text-accent-glow" />,
      title: "Branding & Design",
      description: "Compelling brand identities that resonate with your target audience.",
      features: ["Logo Design", "Brand Guidelines", "UI/UX Design", "Marketing Materials"],
      isAvailable: true
    },
    // {
    //   icon: <Shield className="w-8 h-8 text-secondary-glow" />,
    //   title: "Digital Transformation",
    //   description: "End-to-end digital solutions that modernize your business operations.",
    //   features: ["Process Automation", "Cloud Migration", "Security Audits", "Training & Support"],
    //   isAvailable: false
    // },
    {
      icon: <Bot className="w-8 h-8 text-secondary-glow" />,
      title: "AI Chatbot Solutions",
      description: "Smart AI-powered chatbots for WhatsApp and websites to handle customer support, queries, and automation.",
      features: ["WhatsApp Integration", "24/7 Customer Support", "Train on your data (PDF/Docs/Website)", "Customizable Flows", "Multilingual Support"],
      isAvailable: true
    }


  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={servicesBackground} 
          alt="Services background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background/60"></div>
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" 
          style={{
            backgroundImage: `
              linear-gradient(hsl(210 100% 60% / 0.1) 1px, transparent 1px),
              linear-gradient(90deg, hsl(210 100% 60% / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-primary">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Comprehensive Digital
            </span>
            <br />
            <span className="text-foreground">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From stunning websites to intelligent AI systems, we provide end-to-end digital solutions 
            that transform your business and accelerate your growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:scale-105 transition-all duration-300 h-full flex flex-col rounded-2xl hover:shadow-glow-secondary">
              <CardHeader>
                <div className="mb-4 group-hover:animate-glow-pulse">
                  <div className="p-3 bg-card-border/20 rounded-lg w-fit">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <div className="space-y-2 mb-6 flex-grow">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2">
                  {service.isAvailable ? (
                    <div className="inline-flex items-center justify-center w-full px-3 py-3 text-base font-medium text-center text-green-400 bg-green-900/20 border border-green-700 rounded-md">
                      <span className="w-2 h-2 mr-2 bg-green-400 rounded-full animate-pulse"></span>
                      Service Available
                    </div>
                  ) : (
                    <div className="inline-flex items-center justify-center w-full px-3 py-3 text-base font-medium text-center text-gray-400 bg-gray-900/20 border border-gray-700 rounded-md">
                      <span className="w-2 h-2 mr-2 bg-gray-400 rounded-full"></span>
                      Currently Unavailable
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        {/* <div className="bg-gradient-primary p-8 md:p-12 rounded-2xl shadow-float text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a custom solution that drives real results 
            for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90">
              Schedule Consultation
            </Button>
            <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/10">
              View Portfolio
            </Button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Services;
