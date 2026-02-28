import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, TrendingUp, Users, BookOpen, AlertCircle, DollarSign, Target, Zap, Rocket, Link2, BarChart3, Calculator, Search } from "lucide-react";
import { useState } from "react";
import CommissionCalculator from "@/components/CommissionCalculator";
import ProductResearchTool from "@/components/ProductResearchTool";
import ProgressTracker from "@/components/ProgressTracker";
import BeginnerSuccessWorkflow from "@/components/BeginnerSuccessWorkflow";
import PlatformLinksHub from "@/components/PlatformLinksHub";
import SuccessMetrics from "@/components/SuccessMetrics";
import { OptimizedImage } from "@/components/OptimizedImage";
import { Logo, LogoIcon } from "@/components/Logo";

/**
 * Design Philosophy: Modern Professional Authority
 * Colors: Deep Orange (#FF6B35) + Slate Blue (#2C3E50) + Emerald Green (#27AE60)
 * Typography: Poppins (headings) + Inter (body)
 * Layout: Asymmetric with progress indicators and card-based modules
 */

export default function Home() {
  const [expandedSection, setExpandedSection] = useState<string | null>("mindset");

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
      <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/header_image.webp)' }}
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
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
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button size="lg" className="bg-[#27AE60] hover:bg-[#229954] text-white mobile-button w-full sm:w-auto">
                  Start Learning
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 mobile-button w-full sm:w-auto">
                  View Roadmap
                </Button>
              </div>
            </div>
            <div className="order-first lg:order-last">
              <OptimizedImage
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031784585/WuvUW3qG3XmmJ6Nv6CQMWh/hero-banner-main-EbBfucga35nBb7yNT54xk8.webp"
                alt="Daraz Affiliate Marketing Hero"
                className="w-full rounded-lg shadow-2xl"
                priority={true}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="bg-white py-8 sm:py-12 px-4 border-b border-border">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FF6B35] mb-2">11</div>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">Comprehensive Sections</p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#27AE60] mb-2">5</div>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">Traffic Platforms</p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C3E50] mb-2">100%</div>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">Pakistan Focused</p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F39C12] mb-2">∞</div>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">Scalable Income</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-12 sm:py-16 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 text-[#2C3E50]">
            Complete Training Modules
          </h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-12 text-base sm:text-lg px-4">
            Master each aspect of Daraz affiliate marketing with detailed, actionable modules
          </p>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {sections.map((section) => (
              <Card
                key={section.id}
                className="p-4 sm:p-6 hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-[#FF6B35] mobile-card"
                onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="text-[#FF6B35] mt-1 flex-shrink-0">{section.icon}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-[#2C3E50] mb-2 line-clamp-2">{section.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-3">{section.description}</p>
                  </div>
                </div>

                {expandedSection === section.id && (
                  <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-border">
                    <div className="space-y-2 sm:space-y-3">
                      {section.subsections.map((subsection, idx) => (
                        <div key={idx} className="flex items-start gap-2 sm:gap-3">
                          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#27AE60] flex-shrink-0 mt-0.5" />
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
      <section className="py-16 px-4 bg-[#F8F9FA]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-[#2C3E50]">
            Interactive Tools & Resources
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Practical tools to accelerate your Daraz affiliate marketing success
          </p>

          <Tabs defaultValue="workflow" className="w-full">
            <TabsList className="grid w-full grid-cols-3 sm:grid-cols-6 mb-6 sm:mb-8 gap-1 sm:gap-2">
              <TabsTrigger value="workflow" className="data-[state=active]:bg-[#FF6B35] data-[state=active]:text-white text-xs sm:text-sm p-2">
                <Rocket className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                <span className="hidden sm:inline">Success Workflow</span>
                <span className="sm:hidden">Workflow</span>
              </TabsTrigger>
              <TabsTrigger value="platforms" className="data-[state=active]:bg-[#FF6B35] data-[state=active]:text-white text-xs sm:text-sm p-2">
                <Link2 className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                <span className="hidden sm:inline">Platform Links</span>
                <span className="sm:hidden">Platforms</span>
              </TabsTrigger>
              <TabsTrigger value="calculator" className="data-[state=active]:bg-[#FF6B35] data-[state=active]:text-white text-xs sm:text-sm p-2">
                <Calculator className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                <span className="hidden sm:inline">Commission Calc</span>
                <span className="sm:hidden">Calc</span>
              </TabsTrigger>
              <TabsTrigger value="research" className="data-[state=active]:bg-[#FF6B35] data-[state=active]:text-white text-xs sm:text-sm p-2">
                <Search className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                <span className="hidden sm:inline">Product Research</span>
                <span className="sm:hidden">Research</span>
              </TabsTrigger>
              <TabsTrigger value="progress" className="data-[state=active]:bg-[#FF6B35] data-[state=active]:text-white text-xs sm:text-sm p-2">
                <Target className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                <span className="hidden sm:inline">Progress Tracker</span>
                <span className="sm:hidden">Progress</span>
              </TabsTrigger>
              <TabsTrigger value="metrics" className="data-[state=active]:bg-[#FF6B35] data-[state=active]:text-white text-xs sm:text-sm p-2">
                <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                <span className="hidden sm:inline">Success Metrics</span>
                <span className="sm:hidden">Metrics</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="workflow">
              <BeginnerSuccessWorkflow />
            </TabsContent>
            
            <TabsContent value="platforms">
              <PlatformLinksHub />
            </TabsContent>
            
            <TabsContent value="calculator">
              <CommissionCalculator />
            </TabsContent>
            
            <TabsContent value="research">
              <ProductResearchTool />
            </TabsContent>
            
            <TabsContent value="progress">
              <ProgressTracker />
            </TabsContent>
            
            <TabsContent value="metrics">
              <SuccessMetrics />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Quick Start Checklist */}
      <section className="py-16 px-4 bg-[#F8F9FA]">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-[#2C3E50]">
            30-Day Quick Start
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Follow this checklist to launch your Daraz affiliate business
          </p>

          <Card className="p-8 border-l-4 border-l-[#27AE60]">
            <div className="space-y-4">
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
                <div key={idx} className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FF6B35] text-white font-bold flex-shrink-0">
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
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-[#2C3E50]">
            Common Mistakes to Avoid
          </h2>

          <div className="space-y-4">
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
              <Card key={idx} className="p-6 border-l-4 border-l-[#E74C3C] bg-[#FEF5F5]">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-[#E74C3C] flex-shrink-0 mt-1" />
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
      <section className="py-12 sm:py-16 px-4 bg-gradient-to-r from-[#2C3E50] to-[#FF6B35]">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Start Your Daraz Affiliate Journey?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            This comprehensive guide covers everything from account setup to scaling to PKR 1,000,000+ monthly income. Start with the 30-day action plan and follow the roadmap.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button size="lg" className="bg-[#27AE60] hover:bg-[#229954] text-white mobile-button w-full sm:w-auto">
              Download Full Guide
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 mobile-button w-full sm:w-auto">
              View Case Study
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-8 sm:py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Guide Sections</h4>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Mindset & Foundation</a></li>
                <li><a href="#" className="hover:text-white">Technical Setup</a></li>
                <li><a href="#" className="hover:text-white">Niche Selection</a></li>
                <li><a href="#" className="hover:text-white">Traffic Methods</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Resources</h4>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Daraz Affiliate Program</a></li>
                <li><a href="#" className="hover:text-white">FBR Guidelines</a></li>
                <li><a href="#" className="hover:text-white">SEO Tools</a></li>
                <li><a href="#" className="hover:text-white">Analytics</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Tools</h4>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Keyword Research</a></li>
                <li><a href="#" className="hover:text-white">Content Calendar</a></li>
                <li><a href="#" className="hover:text-white">Analytics Dashboard</a></li>
                <li><a href="#" className="hover:text-white">Link Tracker</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Legal</h4>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Affiliate Rules</a></li>
                <li><a href="#" className="hover:text-white">Tax Guidelines</a></li>
                <li><a href="#" className="hover:text-white">Disclosure Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 sm:pt-8">
            <p className="text-center text-gray-400 mb-2 text-xs sm:text-sm">
              © 2026 Daraz Affiliate Marketing Guide Pakistan. All rights reserved. | Created for Pakistani entrepreneurs
            </p>
            <p className="text-center text-gray-500 text-xs">
              DEVELOPED AND DESIGN BY UZAIR AI STUDIO
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
