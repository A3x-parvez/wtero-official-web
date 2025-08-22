import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send, MessageSquare, Clock, Linkedin, Twitter, Github, Instagram, Facebook } from "lucide-react";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    projectType: 'Website Development',
    message: ''
  });
  const [status, setStatus] = useState({ success: false, error: false, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Note: The name in the template params should match your EmailJS template.
    // For example, if your template uses {{from_name}}, your parameter should be from_name.
    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      to_name: 'Wtero Team', // Or any name you prefer
      from_email: formData.email,
      company: formData.company,
      project_type: formData.projectType,
      message: formData.message,
    };

    emailjs.send(
      'service_09e572i',   // Your EmailJS service ID
      'template_cjzyqw5',  // Your EmailJS template ID
      templateParams,
      'RcqWeZ65a53l4rjhC'     // Your EmailJS Public Key
    )
    .then((result) => {
        console.log('Email sent successfully:', result.text);
        setStatus({ success: true, error: false, message: "✅ Message sent successfully! We'll get back to you soon." });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          projectType: 'Website Development',
          message: ''
        });
        setTimeout(() => setStatus({ success: false, error: false, message: '' }), 4000);
    })
    .catch((error) => {
        console.error('Error sending email:', error.text);
        setStatus({ success: false, error: true, message: '❌ Something went wrong. Please try again.' });
        setTimeout(() => setStatus({ success: false, error: false, message: '' }), 4000);
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email Us",
      content: "contact@wtero.com",
      description: "Send us an email anytime"
    },
  ];

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/company/wtero-tech/", icon: <Linkedin className="w-6 h-6" /> },
    { name: "Whatsapp", url: "https://www.whatsapp.com/channel/0029Vb6tHAc0wajyJV4Wfu1s", icon: <MessageSquare className="w-6 h-6" /> },
    { name: "Facebook", url: " https://www.facebook.com/share/1CsFxqg4YD/", icon: <Facebook className="w-6 h-6" /> },
    { name: "Instagram", url: "https://www.instagram.com/wteroofficial/", icon: <Instagram className="w-6 h-6" /> }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="contact-gradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(210 100% 60%)" />
              <stop offset="100%" stopColor="hsl(280 100% 65%)" />
            </radialGradient>
          </defs>
          <circle cx="20%" cy="20%" r="100" fill="url(#contact-gradient)" className="animate-float" />
          <circle cx="80%" cy="80%" r="150" fill="url(#contact-gradient)" style={{ animationDelay: "3s" }} />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Let's Build Something
            </span>
            <br />
            <span className="text-foreground">Amazing Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with cutting-edge technology? Get in touch with our team
            and let's discuss how we can bring your vision to life.
          </p>
        </div>

        <div id="contact-form" className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="shadow-float">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a message</CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                      <Input name="firstName" placeholder="John" className="bg-background/50" value={formData.firstName} onChange={handleInputChange} required />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                      <Input name="lastName" placeholder="Doe" className="bg-background/50" value={formData.lastName} onChange={handleInputChange} required />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                    <Input name="email" type="email" placeholder="john@example.com" className="bg-background/50" value={formData.email} onChange={handleInputChange} required />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Company</label>
                    <Input name="company" placeholder="Your Company Name" className="bg-background/50" value={formData.company} onChange={handleInputChange} />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Project Type</label>
                    <select name="projectType" className="w-full p-3 rounded-lg border border-input bg-background/50 text-foreground" value={formData.projectType} onChange={handleInputChange} required>
                      <option value="Website Development">Website Development</option>
                      <option value="E-Commerce Solution">E-Commerce Solution</option>
                      <option value="AI Integration">AI Integration</option>
                      <option value="Mobile App">Mobile App</option>
                      <option value="Digital Transformation">Digital Transformation</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                    <Textarea 
                      name="message"
                      placeholder="Tell us about your project..." 
                      rows={4}
                      className="bg-background/50"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {status.message && (
                    <div className={`${status.success ? 'bg-green-100 border-green-400 text-green-700' : 'bg-red-100 border-red-400 text-red-700'} px-4 py-3 rounded`}>
                      {status.message}
                    </div>
                  )}
                  
                  <Button type="submit" variant="hero" className="w-full group">
                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                Get in Touch
              </h3>
              <p className="text-muted-foreground mb-8">
                We're here to help you succeed. Whether you have a question about our services, 
                need a quote, or want to discuss your next project, we'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="group hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-card-border/20 rounded-lg group-hover:animate-glow-pulse">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        <p className="text-lg text-foreground mb-1">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Business Hours */}
            <Card className="bg-gradient-primary text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6" />
                  <h4 className="text-xl font-semibold">Business Hours</h4>
                </div>
                <div className="space-y-2 text-white/90">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday - Sunday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Follow Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="w-12 h-12 bg-card border border-card-border rounded-lg flex items-center justify-center text-2xl hover:border-primary/40 hover:scale-110 transition-all duration-300 hover:shadow-neon"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;