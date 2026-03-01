import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, TrendingUp, Users, BookOpen, AlertCircle, DollarSign, Target, Zap, Rocket, Link2, BarChart3, Calculator, Search, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import CommissionCalculator from "@/components/CommissionCalculator";
import ProductResearchTool from "@/components/ProductResearchTool";
import ProgressTracker from "@/components/ProgressTracker";
import BeginnerSuccessWorkflow from "@/components/BeginnerSuccessWorkflow";
import PlatformLinksHub from "@/components/PlatformLinksHub";
import SuccessMetrics from "@/components/SuccessMetrics";
import { OptimizedImage } from "@/components/OptimizedImage";
import { Logo, LogoIcon } from "@/components/Logo";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SearchComponent from "@/components/SearchComponent";
import { LoadingSpinner } from "@/components/LoadingSpinner";

/**
 * Design Philosophy: Modern Professional Authority
 * Colors: Deep Orange (#FF6B35) + Slate Blue (#2C3E50) + Emerald Green (#27AE60)
 * Typography: Poppins (headings) + Inter (body)
 * Layout: Asymmetric with progress indicators and card-based modules
 */

export default function Home() {
  const [expandedSection, setExpandedSection] = useState<string | null>("mindset");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sections = [
    {
      id: "mindset",
      title: "Mindset & Foundation",
      icon: <BookOpen className="w-6 h-6" />,
      description: "Understand affiliate marketing fundamentals and realistic expectations",
      subsections: [
        "What Affiliate Marketing Really Is",
        "How Daraz Affiliate Works",
        "Commission Structure in Pakistan",
        "Realistic Income Expectations",
        "Common Beginner Mistakes",
        "Required Skills to Develop"
      ]
    },
    {
      id: "technical",
      title: "Technical Setup",
      icon: <Zap className="w-6 h-6" />,
      description: "Step-by-step account creation and dashboard setup",
      subsections: [
        "Creating Your Daraz Account",
        "Applying for the Program",
        "Approval Process",
        "Understanding the Dashboard",
        "Tracking & Cookies",
        "Payment Methods & Withdrawal",
        "Tax Considerations"
      ]
    },
    {
      id: "niche",
      title: "Niche Selection",
      icon: <Target className="w-6 h-6" />,
      description: "Strategic niche selection for Pakistan market",
      subsections: [
        "High-Demand Categories",
        "Low-Competition Research",
        "Trending Products Method",
        "Daraz Sales Events Strategy",
        "Seasonal Planning",
        "Micro-Niche Strategy"
      ]
    },
    {
      id: "traffic",
      title: "Traffic Methods",
      icon: <TrendingUp className="w-6 h-6" />,
      description: "Comprehensive traffic generation strategies",
      subsections: [
        "YouTube Strategy (Face & Faceless)",
        "Facebook Marketing",
        "TikTok Strategy",
        "Instagram Reels & Stories",
        "Blog/Website Strategy"
      ]
    },
    {
      id: "content",
      title: "Content Creation",
      icon: <Users className="w-6 h-6" />,
      description: "Ethical content creation and copywriting",
      subsections: [
        "Reviewing Without Buying",
        "Ethical Promotion",
        "Comparison Content",
        "Problem-Solving Content",
        "Product Demonstrations",
        "Sales Psychology",
        "Copywriting Formulas"
      ]
    },
    {
      id: "conversion",
      title: "Conversion Optimization",
      icon: <DollarSign className="w-6 h-6" />,
      description: "Maximize clicks and conversions",
      subsections: [
        "Increasing Click-Through Rate",
        "Emotional Triggers",
        "Scarcity & Urgency",
        "Trust Building",
        "Call-to-Action Examples"
      ]
    }
  ];

  const roadmap = [
    {
      phase: "30-Day Beginner",
      earnings: "PKR 0-5,000",
      clicks: "0-50",
      sales: "0-2",
      tasks: [
        "Choose micro-niche",
        "Create Daraz account",
        "Set up first platform",
        "Create 3 pieces of content"
      ]
    },
    {
      phase: "90-Day Growth",
      earnings: "PKR 10,000-50,000",
      clicks: "500-2,000",
      sales: "5-20",
      tasks: [
        "Double content output",
        "Expand to 2nd platform",
        "Build email list (100+)",
        "Test paid ads"
      ]
    },
    {
      phase: "6-Month Scale",
      earnings: "PKR 100,000-500,000",
      clicks: "5,000-20,000",
      sales: "50-200",
      tasks: [
        "Consistent posting",
        "Email list (2,000+)",
        "Scale paid ads",
        "Create advanced content"
      ]
    },
    {
      phase: "1-Year Authority",
      earnings: "PKR 500,000-2,000,000",
      clicks: "20,000-100,000",
      sales: "200-1,000",
      tasks: [
        "Establish authority",
        "Email list (5,000+)",
        "Sponsorships",
        "Digital products"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 sm:pt-20 md:pt-24 py-8 sm:py-12 md:py-16 px-4" id="hero" role="banner">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/header_image.webp)' }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true" />
        <div className="relative z-10 container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="mb-6">
                <div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 leading-tight">
                    Daraz Affiliate Pro
                  </h1>
                  <p className="text-lg sm:text-xl text-white/90">Master Affiliate Marketing in Pakistan</p>
                </div>
              </div>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8">
                Complete A-to-Z guide for beginners to advanced marketers. Learn to build sustainable income from home.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 flex-wrap">
                <Button 
                  size="lg" 
                  className="bg-[#27AE60] hover:bg-[#229954] text-white flex-1 sm:flex-initial min-w-0 focus:outline-none focus:ring-4 focus:ring-[#27AE60]/50"
                  aria-label="Start learning Daraz affiliate marketing"
                >
                  <span className="truncate">Start Learning</span>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 flex-1 sm:flex-initial min-w-0 focus:outline-none focus:ring-4 focus:ring-white/50"
                  aria-label="View income roadmap"
                >
                  <span className="truncate">View Roadmap</span>
                </Button>
              </div>
            </div>
            <div className="order-first lg:order-last">
              <OptimizedImage
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031784585/WuvUW3qG3XmmJ6Nv6CQMWh/hero-banner-main-EbBfucga35nBb7yNT54xk8.webp"
                alt="Daraz Affiliate Marketing Hero Banner showing success metrics and earnings potential"
                className="w-full rounded-lg shadow-2xl"
                priority={true}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="bg-white py-8 sm:py-12 px-4 border-b border-border" id="statistics" role="region" aria-labelledby="stats-heading">
        <div className="container mx-auto">
          <h2 id="stats-heading" className="sr-only">Key Statistics</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FF6B35] mb-2" aria-label="11 comprehensive sections">11</div>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">Comprehensive Sections</p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#27AE60] mb-2" aria-label="5 traffic platforms">5</div>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">Traffic Platforms</p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C3E50] mb-2" aria-label="100 percent Pakistan focused">100%</div>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">Pakistan Focused</p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F39C12] mb-2" aria-label="Unlimited scalable income">∞</div>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">Scalable Income</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-12 sm:py-16 px-4 bg-background" id="modules" role="region" aria-labelledby="modules-heading">
        <div className="container mx-auto">
          <h2 id="modules-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 text-[#2C3E50]">
            Complete Training Modules
          </h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-12 text-base sm:text-lg px-4">
            Master each aspect of Daraz affiliate marketing with detailed, actionable modules
          </p>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {sections.map((section) => (
              <Card
                key={section.id}
                className="p-4 sm:p-6 hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-[#FF6B35] mobile-card focus:outline-none focus:ring-2 focus:ring-[#FF6B35] rounded"
                onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                role="button"
                tabIndex={0}
                aria-expanded={expandedSection === section.id}
                aria-controls={`section-${section.id}-content`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setExpandedSection(expandedSection === section.id ? null : section.id);
                  }
                }}
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="text-[#FF6B35] mt-1 flex-shrink-0" aria-hidden="true">{section.icon}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-[#2C3E50] mb-2 line-clamp-2">{section.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-3">{section.description}</p>
                  </div>
                </div>

                {expandedSection === section.id && (
                  <div 
                    id={`section-${section.id}-content`}
                    className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-border"
                    role="region"
                    aria-labelledby={`section-${section.id}-title`}
                  >
                    <div className="space-y-2 sm:space-y-3">
                      {section.subsections.map((subsection, idx) => (
                        <div key={idx} className="flex items-start gap-2 sm:gap-3">
                          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#27AE60] flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <span className="text-gray-700 text-sm">{subsection}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Income Roadmap */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 text-[#2C3E50]">
            Income Scaling Roadmap
          </h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-12 text-base sm:text-lg px-4">
            Realistic progression from beginner to authority in one year
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {roadmap.map((phase, idx) => (
              <Card key={idx} className="p-4 sm:p-6 bg-gradient-to-br from-white to-[#F8F9FA] border-t-4 border-t-[#FF6B35] mobile-card">
                <h3 className="text-base sm:text-lg font-bold text-[#2C3E50] mb-3 sm:mb-4">{phase.phase}</h3>

                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">Expected Earnings</p>
                    <p className="text-lg sm:text-xl font-bold text-[#27AE60]">{phase.earnings}</p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">Monthly Clicks</p>
                    <p className="text-lg sm:text-xl font-bold text-[#FF6B35]">{phase.clicks}</p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">Sales</p>
                    <p className="text-lg sm:text-xl font-bold text-[#2C3E50]">{phase.sales}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-3">Key Tasks:</p>
                  {phase.tasks.map((task, taskIdx) => (
                    <div key={taskIdx} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#FF6B35] rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-600">{task}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tools Section */}
      <section className="py-16 px-4 bg-[#F8F9FA]" id="tools" role="region" aria-labelledby="tools-heading">
        <div className="container mx-auto">
          <h2 id="tools-heading" className="text-4xl font-bold text-center mb-4 text-[#2C3E50]">
            Interactive Tools & Resources
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Practical tools to accelerate your Daraz affiliate marketing success
          </p>

          <Tabs defaultValue="workflow" className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-6 mb-6 sm:mb-8 gap-1 sm:gap-2" role="tablist">
              <TabsTrigger 
                value="workflow" 
                className="data-[state=active]:bg-[#FF6B35] data-[state=active]:text-white text-xs sm:text-sm p-2 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] rounded"
                role="tab"
                aria-selected="false"
              >
                <Rocket className="w-3 h-3 sm:w-4 sm:h-4 mr-1" aria-hidden="true" />
                <span className="hidden sm:inline truncate max-w-[80px]">Success Workflow</span>
                <span className="sm:hidden truncate">Workflow</span>
              </TabsTrigger>
              <TabsTrigger 
                value="platforms" 
                className="data-[state=active]:bg-[#FF6B35] data-[state=active]:text-white text-xs sm:text-sm p-2 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] rounded"
                role="tab"
                aria-selected="false"
              >
                <Link2 className="w-3 h-3 sm:w-4 sm:h-4 mr-1" aria-hidden="true" />
                <span className="hidden sm:inline truncate max-w-[80px]">Platform Links</span>
                <span className="sm:hidden truncate">Platforms</span>
              </TabsTrigger>
              <TabsTrigger 
                value="calculator" 
                className="data-[state=active]:bg-[#FF6B35] data-[state=active]:text-white text-xs sm:text-sm p-2 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] rounded"
                role="tab"
                aria-selected="false"
              >
                <Calculator className="w-3 h-3 sm:w-4 sm:h-4 mr-1" aria-hidden="true" />
                <span className="hidden sm:inline truncate max-w-[80px]">Commission Calc</span>
                <span className="sm:hidden truncate">Calc</span>
              </TabsTrigger>
              <TabsTrigger 
                value="research" 
                className="data-[state=active]:bg-[#FF6B35] data-[state=active]:text-white text-xs sm:text-sm p-2 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] rounded"
                role="tab"
                aria-selected="false"
              >
                <Search className="w-3 h-3 sm:w-4 sm:h-4 mr-1" aria-hidden="true" />
                <span className="hidden sm:inline truncate max-w-[80px]">Product Research</span>
                <span className="sm:hidden truncate">Research</span>
              </TabsTrigger>
              <TabsTrigger 
                value="progress" 
                className="data-[state=active]:bg-[#FF6B35] data-[state=active]:text-white text-xs sm:text-sm p-2 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] rounded"
                role="tab"
                aria-selected="false"
              >
                <Target className="w-3 h-3 sm:w-4 sm:h-4 mr-1" aria-hidden="true" />
                <span className="hidden sm:inline truncate max-w-[80px]">Progress Tracker</span>
                <span className="sm:hidden truncate">Progress</span>
              </TabsTrigger>
              <TabsTrigger 
                value="metrics" 
                className="data-[state=active]:bg-[#FF6B35] data-[state=active]:text-white text-xs sm:text-sm p-2 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] rounded"
                role="tab"
                aria-selected="false"
              >
                <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 mr-1" aria-hidden="true" />
                <span className="hidden sm:inline truncate max-w-[80px]">Success Metrics</span>
                <span className="sm:hidden truncate">Metrics</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="workflow" role="tabpanel">
              <BeginnerSuccessWorkflow />
            </TabsContent>
            
            <TabsContent value="platforms" role="tabpanel">
              <PlatformLinksHub />
            </TabsContent>
            
            <TabsContent value="calculator" role="tabpanel">
              <CommissionCalculator />
            </TabsContent>
            
            <TabsContent value="research" role="tabpanel">
              <ProductResearchTool />
            </TabsContent>
            
            <TabsContent value="progress" role="tabpanel">
              <ProgressTracker />
            </TabsContent>
            
            <TabsContent value="metrics" role="tabpanel">
              <SuccessMetrics />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Quick Start Checklist */}
      <section className="py-16 px-4 bg-[#F8F9FA]" id="checklist" role="region" aria-labelledby="checklist-heading">
        <div className="container mx-auto max-w-2xl">
          <h2 id="checklist-heading" className="text-4xl font-bold text-center mb-4 text-[#2C3E50]">
            30-Day Quick Start
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Follow this checklist to launch your Daraz affiliate business
          </p>

          <Card className="p-8 border-l-4 border-l-[#27AE60] focus:outline-none focus:ring-2 focus:ring-[#27AE60] rounded">
            <div className="space-y-4" role="list">
              {[
                "Choose your micro-niche based on market demand",
                "Create your Daraz affiliate account",
                "Set up your first content platform (YouTube/TikTok/Blog)",
                "Research 5-10 high-demand products in your niche",
                "Create your first 3 pieces of content",
                "Optimize content for SEO and platform algorithms",
                "Share across all available platforms",
                "Begin engaging with your audience",
                "Analyze performance data",
                "Create content based on what's working",
                "Start building your email list",
                "Research and promote trending products"
              ].map((task, idx) => (
                <div key={idx} className="flex items-start gap-4" role="listitem">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FF6B35] text-white font-bold flex-shrink-0" aria-hidden="true">
                    {idx + 1}
                  </div>
                  <span className="text-gray-700 pt-1">{task}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Key Warnings */}
      <section className="py-16 px-4 bg-white" id="mistakes" role="region" aria-labelledby="mistakes-heading">
        <div className="container mx-auto max-w-2xl">
          <h2 id="mistakes-heading" className="text-4xl font-bold text-center mb-4 text-[#2C3E50]">
            Common Mistakes to Avoid
          </h2>

          <div className="space-y-4" role="list">
            {[
              {
                title: "Promoting Everything",
                desc: "Focus on one niche. Random product promotion destroys trust and conversions."
              },
              {
                title: "Aggressive Hard-Selling",
                desc: "Pakistani audiences respond to value-first approach. Provide 80% value, 20% promotion."
              },
              {
                title: "Ignoring Analytics",
                desc: "Track everything. Without data, you're marketing blind. Know your conversion rates."
              },
              {
                title: "Not Building Email List",
                desc: "Email is your most valuable asset. Start building from day one. Own your audience."
              },
              {
                title: "Wrong Niche Selection",
                desc: "Choose based on market demand, not personal interest. Low demand = low income."
              },
              {
                title: "Inconsistent Content",
                desc: "Algorithms reward consistency. Post regularly or don't post at all. Choose a schedule you can maintain."
              }
            ].map((mistake, idx) => (
              <Card key={idx} className="p-6 border-l-4 border-l-[#E74C3C] bg-[#FEF5F5] focus:outline-none focus:ring-2 focus:ring-[#E74C3C] rounded" role="listitem">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-[#E74C3C] flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-bold text-[#2C3E50] mb-2">{mistake.title}</h4>
                    <p className="text-gray-700">{mistake.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 bg-gradient-to-r from-[#2C3E50] to-[#FF6B35]" id="cta" role="region" aria-labelledby="cta-heading">
        <div className="container mx-auto text-center">
          <h2 id="cta-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Start Your Daraz Affiliate Journey?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            This comprehensive guide covers everything from account setup to scaling to PKR 1,000,000+ monthly income. Start with the 30-day action plan and follow the roadmap.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center px-4 flex-wrap">
            <Button 
              size="lg" 
              className="bg-[#27AE60] hover:bg-[#229954] text-white flex-1 sm:flex-initial min-w-0 focus:outline-none focus:ring-4 focus:ring-[#27AE60]/50"
              aria-label="Download full Daraz affiliate guide"
            >
              <span className="truncate">Download Full Guide</span>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 flex-1 sm:flex-initial min-w-0 focus:outline-none focus:ring-4 focus:ring-white/50"
              aria-label="View case study"
            >
              <span className="truncate">View Case Study</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-8 sm:py-12 px-4 relative z-20" role="contentinfo">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base" id="guide-sections">Guide Sections</h4>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-400" aria-labelledby="guide-sections">
                <li><a href="#hero" className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] rounded block py-1">Home</a></li>
                <li><a href="#modules" className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] rounded block py-1">Training Modules</a></li>
                <li><a href="#tools" className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] rounded block py-1">Interactive Tools</a></li>
                <li><a href="#checklist" className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] rounded block py-1">Quick Start</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base" id="resources">Resources</h4>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-400" aria-labelledby="resources">
                <li><a href="https://www.daraz.pk/affiliate" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] rounded block py-1">Daraz Affiliate Program</a></li>
                <li><a href="#statistics" className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] rounded block py-1">Key Statistics</a></li>
                <li><a href="#mistakes" className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] rounded block py-1">Common Mistakes</a></li>
                <li><a href="#cta" className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] rounded block py-1">Get Started</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base" id="tools">Tools</h4>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-400" aria-labelledby="tools">
                <li><a href="#tools" onClick={(e) => { e.preventDefault(); const calculatorTab = document.querySelector('[value="calculator"]') as HTMLElement; if(calculatorTab) calculatorTab.click(); }} className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] rounded block py-1">Commission Calculator</a></li>
                <li><a href="#tools" onClick={(e) => { e.preventDefault(); const researchTab = document.querySelector('[value="research"]') as HTMLElement; if(researchTab) researchTab.click(); }} className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] rounded block py-1">Product Research</a></li>
                <li><a href="#tools" onClick={(e) => { e.preventDefault(); const progressTab = document.querySelector('[value="progress"]') as HTMLElement; if(progressTab) progressTab.click(); }} className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] rounded block py-1">Progress Tracker</a></li>
                <li><a href="#tools" onClick={(e) => { e.preventDefault(); const metricsTab = document.querySelector('[value="metrics"]') as HTMLElement; if(metricsTab) metricsTab.click(); }} className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] rounded block py-1">Success Metrics</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base" id="legal">Legal</h4>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-400" aria-labelledby="legal">
                <li><a href="#privacy" className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] rounded block py-1">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] rounded block py-1">Terms of Service</a></li>
                <li><a href="#disclosure" className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] rounded block py-1">Disclosure Policy</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] rounded block py-1">Contact Us</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-center sm:text-left">
                <p className="text-gray-400 text-sm mb-2">
                  © 2026 Daraz Affiliate Marketing Guide Pakistan. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs">
                  Empowering Pakistani entrepreneurs with professional affiliate marketing education and sustainable income strategies.
                </p>
              </div>
            </div>
            <div className="text-center pt-6 border-t border-gray-800">
              <p className="text-gray-500 text-xs">
                <span className="inline-flex items-center gap-2">
                  <svg className="w-3 h-3 text-[#FF6B35]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs sm:text-sm">Crafted with precision by</span>
                  <a href="https://uzair-ai-studio.com" target="_blank" rel="noopener noreferrer" className="text-[#FF6B35] hover:text-white transition-colors duration-200 font-medium text-xs sm:text-sm">
                    Uzair AI Studio
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-50 bg-[#FF6B35] hover:bg-[#E55A2B] text-white p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#FF6B35]/50"
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
