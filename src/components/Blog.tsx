import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of AI in Small Business Automation",
      excerpt: "Discover how artificial intelligence is revolutionizing small business operations and what trends to watch in 2024.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      category: "AI & Technology",
      readTime: "5 min read",
      date: "Dec 15, 2023",
      featured: true
    },
    {
      title: "E-Commerce Trends That Will Dominate 2024",
      excerpt: "From AI-powered personalization to voice commerce, explore the latest trends shaping the e-commerce landscape.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      category: "E-Commerce",
      readTime: "7 min read",
      date: "Dec 12, 2023",
      featured: false
    },
    {
      title: "Building Responsive Websites in 2024",
      excerpt: "Best practices for creating mobile-first, responsive websites that deliver exceptional user experiences.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcbf8?w=600&h=400&fit=crop",
      category: "Web Development",
      readTime: "6 min read",
      date: "Dec 10, 2023",
      featured: false
    },
    {
      title: "SEO Strategies for Modern Businesses",
      excerpt: "Learn the latest SEO techniques that actually work in 2024 and how to improve your search rankings.",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop",
      category: "Digital Marketing",
      readTime: "8 min read",
      date: "Dec 8, 2023",
      featured: false
    },
    {
      title: "The Rise of No-Code Development",
      excerpt: "How no-code platforms are changing the development landscape and when to choose traditional coding.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
      category: "Development",
      readTime: "4 min read",
      date: "Dec 5, 2023",
      featured: false
    },
    {
      title: "Cybersecurity Best Practices for SMBs",
      excerpt: "Essential security measures every small and medium business should implement to protect their data.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
      category: "Security",
      readTime: "6 min read",
      date: "Dec 3, 2023",
      featured: false
    }
  ];

  const categories = ["All", "AI & Technology", "E-Commerce", "Web Development", "Digital Marketing", "Security"];

  return (
    <section id="blog" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" 
          style={{
            backgroundImage: `linear-gradient(90deg, hsl(210 100% 60% / 0.1) 1px, transparent 1px),
                             linear-gradient(hsl(280 100% 65% / 0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-primary">Latest Insights</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Tech Insights &
            </span>
            <br />
            <span className="text-foreground">Industry News</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay ahead of the curve with our latest articles on technology trends, 
            development best practices, and business insights.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <Button 
              key={index}
              variant={index === 0 ? "default" : "outline"}
              size="sm"
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <Card className="overflow-hidden group hover:scale-[1.02] transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover min-h-[300px] group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Tag className="w-4 h-4" />
                    <span>{blogPosts[0].category}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  {blogPosts[0].title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <Button variant="outline" className="w-fit group">
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.slice(1).map((post, index) => (
            <Card key={index} className="group hover:scale-105 transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-card/80 backdrop-blur-sm text-foreground px-2 py-1 rounded text-xs">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <Button variant="ghost" className="w-full justify-between group-hover:bg-card-border/20">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        {/* <div className="bg-gradient-primary p-8 md:p-12 rounded-2xl shadow-float text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Tech Trends
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest insights on AI, web development, 
            and digital transformation delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-3 rounded-lg border-0 bg-white/90 text-background placeholder:text-muted-foreground flex-1"
            />
            <Button variant="outline" className="bg-white text-primary hover:bg-white/90">
              Subscribe
            </Button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Blog;