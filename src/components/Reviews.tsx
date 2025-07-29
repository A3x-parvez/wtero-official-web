import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      name: "Sarah Johnson",
      company: "TechStart Innovations",
      role: "CEO",
      rating: 5,
      text: "Wtero transformed our digital presence completely. Their AI chatbot solution increased our customer engagement by 300% and their website redesign doubled our conversion rates.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      company: "EcoMarket Solutions",
      role: "Founder",
      rating: 5,
      text: "The e-commerce platform Wtero built for us is phenomenal. The integration of AI recommendations has boosted our average order value by 45%. Exceptional work!",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Agency Plus",
      role: "Creative Director",
      rating: 5,
      text: "Working with Wtero was a game-changer. Their attention to detail and innovative approach to our branding project exceeded all expectations. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "David Thompson",
      company: "FinanceFlow Corp",
      role: "CTO",
      rating: 5,
      text: "The automation solutions Wtero implemented saved us 60 hours per week. Their technical expertise and customer service are unmatched in the industry.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Lisa Wang",
      company: "Health & Wellness Hub",
      role: "Operations Manager",
      rating: 5,
      text: "From concept to launch, Wtero delivered beyond our expectations. Their mobile app development and backend integration are top-notch. Five stars!",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section id="reviews" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          >
            <Star className="w-4 h-4 text-primary" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Client Reviews</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              What Our Clients
            </span>
            <br />
            <span className="text-foreground">Are Saying</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say 
            about their experience working with Wtero.
          </p>
        </div>

        {/* Main Review Carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-card/30 backdrop-blur-md border-primary/20 shadow-float">
            <CardContent className="p-8 md:p-12 text-center">
              <Quote className="w-12 h-12 text-primary mx-auto mb-6 opacity-60" />
              
              <div className="mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-primary fill-current inline-block mx-1" />
                ))}
              </div>

              <p className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed italic">
                "{reviews[currentReview].text}"
              </p>

              <div className="flex items-center justify-center gap-4">
                <img 
                  src={reviews[currentReview].avatar} 
                  alt={reviews[currentReview].name}
                  className="w-16 h-16 rounded-full shadow-card"
                />
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-foreground">
                    {reviews[currentReview].name}
                  </h4>
                  <p className="text-muted-foreground">
                    {reviews[currentReview].role} at {reviews[currentReview].company}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentReview 
                    ? 'bg-primary shadow-neon' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Review Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reviews.slice(0, 3).map((review, index) => (
            <Card key={index} className="group hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-current" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  "{review.text}"
                </p>
                
                <div className="flex items-center gap-3">
                  <img 
                    src={review.avatar} 
                    alt={review.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">{review.name}</h4>
                    <p className="text-xs text-muted-foreground">{review.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "98%", label: "Client Satisfaction" },
            { number: "50+", label: "Projects Completed" },
            { number: "24/7", label: "Support Available" },
            { number: "100%", label: "On-Time Delivery" },
          ].map((stat, index) => (
            <div key={index} className="group">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2 group-hover:animate-glow-pulse">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;