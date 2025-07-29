import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Brain, Zap, MessageSquare, Workflow, BarChart3 } from "lucide-react";
import aiInnovationImage from "@/assets/ai-innovation.jpg";

const AIInnovation = () => {
  const aiSolutions = [
    {
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      title: "AI Chatbots",
      description: "Intelligent conversational agents that provide 24/7 customer support and engagement.",
      features: ["Natural Language Processing", "Multi-language Support", "CRM Integration", "Analytics Dashboard"]
    },
    {
      icon: <Workflow className="w-8 h-8 text-accent" />,
      title: "Process Automation",
      description: "Streamline operations with intelligent automation that reduces costs and errors.",
      features: ["Workflow Automation", "Data Processing", "Report Generation", "Task Scheduling"]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-secondary" />,
      title: "Predictive Analytics",
      description: "Harness the power of data to make informed decisions and predict future trends.",
      features: ["Sales Forecasting", "Customer Insights", "Market Analysis", "Risk Assessment"]
    }
  ];

  const benefits = [
    { icon: <Zap className="w-6 h-6" />, text: "Increase efficiency by up to 70%" },
    { icon: <Brain className="w-6 h-6" />, text: "Reduce operational costs significantly" },
    { icon: <Bot className="w-6 h-6" />, text: "Improve customer satisfaction" },
    { icon: <BarChart3 className="w-6 h-6" />, text: "Make data-driven decisions" }
  ];

  return (
    <section id="ai-innovation" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        {/* Neural Network Pattern */}
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {[...Array(30)].map((_, i) => (
            <g key={i}>
              <circle
                cx={`${(i % 6) * 20 + 10}%`}
                cy={`${Math.floor(i / 6) * 20 + 10}%`}
                r="2"
                fill="hsl(210 100% 60%)"
                className="animate-glow-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
              {i < 24 && (
                <line
                  x1={`${(i % 6) * 20 + 10}%`}
                  y1={`${Math.floor(i / 6) * 20 + 10}%`}
                  x2={`${((i + 1) % 6) * 20 + 10}%`}
                  y2={`${Math.floor((i + 1) / 6) * 20 + 10}%`}
                  stroke="hsl(280 100% 65%)"
                  strokeWidth="1"
                  className="animate-circuit-flow"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              )}
            </g>
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI Innovation</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Intelligent Solutions
            </span>
            <br />
            <span className="text-foreground">for Tomorrow</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Leverage the power of artificial intelligence to automate processes, enhance customer 
            experiences, and unlock new opportunities for growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={aiInnovationImage} 
              alt="AI Innovation" 
              className="w-full h-auto rounded-2xl shadow-float"
            />
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                Transform Your Business with AI
              </h3>
              <p className="text-muted-foreground mb-6">
                Our AI solutions are designed to seamlessly integrate with your existing systems, 
                providing immediate value while preparing your business for the future of technology.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-card/30 backdrop-blur-sm rounded-lg border border-card-border/50">
                  <div className="text-primary">
                    {benefit.icon}
                  </div>
                  <span className="text-sm text-foreground">{benefit.text}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" className="w-full sm:w-auto">
              <Bot className="w-5 h-5 mr-2" />
              Explore AI Solutions
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {aiSolutions.map((solution, index) => (
            <Card key={index} className="group hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="mb-4 group-hover:animate-glow-pulse">
                  <div className="p-3 bg-card-border/20 rounded-lg w-fit">
                    {solution.icon}
                  </div>
                </div>
                <CardTitle className="text-xl">{solution.title}</CardTitle>
                <CardDescription>{solution.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full group-hover:border-primary/40">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIInnovation;