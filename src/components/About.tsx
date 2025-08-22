import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb, Users, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Mission-Driven",
      description: "We're committed to transforming businesses through innovative technology solutions."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-accent" />,
      title: "Innovation First",
      description: "Leveraging cutting-edge AI and emerging technologies to solve complex challenges."
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: "Client-Focused",
      description: "Your success is our priority. We build lasting partnerships through exceptional service."
    },
    {
      icon: <Award className="w-8 h-8 text-primary-glow" />,
      title: "Excellence",
      description: "Delivering premium quality solutions that exceed expectations every time."
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-secondary rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-primary">About Wtero</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Building Tomorrow's
            </span>
            <br />
            <span className="text-foreground">Digital Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Wtero, we're a forward-thinking tech startup dedicated to empowering small businesses 
            with cutting-edge digital solutions. From stunning websites to intelligent AI automation, 
            we transform ideas into powerful digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="text-center group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-card-border/20 rounded-lg group-hover:animate-glow-pulse">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Our Story
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded with a vision to democratize technology for small businesses, Wtero bridges 
                the gap between complex technical solutions and real-world business needs.
              </p>
              <p>
                We believe every business deserves access to enterprise-level technology solutions. 
                Our team combines deep technical expertise with a passion for innovation, creating 
                digital experiences that drive growth and success.
              </p>
              <p>
                From AI-powered chatbots that enhance customer experience to e-commerce platforms 
                that boost sales, we're committed to turning your digital dreams into reality.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-primary p-8 rounded-2xl shadow-float">
              <div className="text-center text-white">
                <h4 className="text-2xl font-bold mb-4">Our Promise</h4>
                <p className="text-lg opacity-90 mb-6">
                  "We don't just build websites – we craft digital experiences that transform businesses 
                  and create lasting impact in the digital world."
                </p>
                {/* <div className="flex justify-center space-x-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm opacity-75">Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm opacity-75">Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">∞</div>
                    <div className="text-sm opacity-75">Innovation</div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;