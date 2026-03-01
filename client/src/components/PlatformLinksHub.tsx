import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Play, BookOpen, Users, ShoppingBag, Video, Music, FileText, MessageSquare, TrendingUp, Zap } from "lucide-react";

const platformCategories = [
  {
    category: "Essential Platforms",
    description: "Must-have platforms to start your affiliate journey",
    icon: <Zap className="w-6 h-6" />,
    color: "bg-red-500",
    platforms: [
      {
        name: "Daraz Pakistan",
        description: "Main affiliate platform - register and apply here",
        link: "https://www.daraz.pk/",
        affiliateLink: "https://www.daraz.pk/affiliate-program",
        type: "Primary Platform",
        difficulty: "Easy",
        urgency: "Critical",
        tutorial: "Complete Daraz setup guide"
      },
      {
        name: "YouTube",
        description: "Best platform for product reviews and long-form content",
        link: "https://www.youtube.com/",
        affiliateLink: "https://www.youtube.com/create_channel",
        type: "Content Platform",
        difficulty: "Medium",
        urgency: "Critical",
        tutorial: "YouTube channel setup tutorial"
      },
      {
        name: "Facebook",
        description: "Build community and promote through pages and groups",
        link: "https://www.facebook.com/",
        affiliateLink: "https://www.facebook.com/pages/create",
        type: "Social Platform",
        difficulty: "Easy",
        urgency: "High",
        tutorial: "Facebook marketing strategies"
      },
      {
        name: "TikTok",
        description: "Short-form content with viral potential",
        link: "https://www.tiktok.com/",
        affiliateLink: "https://www.tiktok.com/signup",
        type: "Content Platform",
        difficulty: "Easy",
        urgency: "High",
        tutorial: "TikTok affiliate marketing"
      }
    ]
  },
  {
    category: "Content Creation Tools",
    description: "Essential tools for creating professional content",
    icon: <Video className="w-6 h-6" />,
    color: "bg-blue-500",
    platforms: [
      {
        name: "Canva",
        description: "Design thumbnails, social media posts, and promotional materials",
        link: "https://www.canva.com/",
        affiliateLink: "https://www.canva.com/signup",
        type: "Design Tool",
        difficulty: "Easy",
        urgency: "High",
        tutorial: "Canva for affiliate marketers"
      },
      {
        name: "CapCut",
        description: "Free video editor perfect for YouTube and TikTok content",
        link: "https://www.capcut.com/",
        affiliateLink: "https://www.capcut.com/mobile",
        type: "Video Editor",
        difficulty: "Easy",
        urgency: "High",
        tutorial: "CapCut editing tutorial"
      },
      {
        name: "Unsplash",
        description: "Free high-quality images for your content",
        link: "https://unsplash.com/",
        affiliateLink: "https://unsplash.com/",
        type: "Image Library",
        difficulty: "Easy",
        urgency: "Medium",
        tutorial: "How to use stock photos"
      },
      {
        name: "Pexels",
        description: "Free stock videos and images for content creation",
        link: "https://www.pexels.com/",
        affiliateLink: "https://www.pexels.com/",
        type: "Media Library",
        difficulty: "Easy",
        urgency: "Medium",
        tutorial: "Pexels content creation guide"
      }
    ]
  },
  {
    category: "Research & Analytics",
    description: "Tools to find trends and track performance",
    icon: <TrendingUp className="w-6 h-6" />,
    color: "bg-green-500",
    platforms: [
      {
        name: "Google Trends",
        description: "Find trending products and search patterns in Pakistan",
        link: "https://trends.google.com/",
        affiliateLink: "https://trends.google.com/trends/",
        type: "Research Tool",
        difficulty: "Easy",
        urgency: "High",
        tutorial: "Google Trends for product research"
      },
      {
        name: "Google Analytics",
        description: "Track your website traffic and user behavior",
        link: "https://analytics.google.com/",
        affiliateLink: "https://analytics.google.com/",
        type: "Analytics Tool",
        difficulty: "Medium",
        urgency: "Medium",
        tutorial: "Analytics setup guide"
      },
      {
        name: "Daraz Seller Center",
        description: "Research product prices and competition",
        link: "https://sellercenter.daraz.pk/",
        affiliateLink: "https://sellercenter.daraz.pk/",
        type: "Research Tool",
        difficulty: "Medium",
        urgency: "Medium",
        tutorial: "Product research on Daraz"
      },
      {
        name: "AnswerThePublic",
        description: "Find what people are searching for in your niche",
        link: "https://answerthepublic.com/",
        affiliateLink: "https://answerthepublic.com/",
        type: "Research Tool",
        difficulty: "Easy",
        urgency: "Low",
        tutorial: "Content idea generation"
      }
    ]
  },
  {
    category: "Advanced Platforms",
    description: "Expand your reach with these additional platforms",
    icon: <Users className="w-6 h-6" />,
    color: "bg-purple-500",
    platforms: [
      {
        name: "Instagram",
        description: "Visual content platform for product showcases",
        link: "https://www.instagram.com/",
        affiliateLink: "https://www.instagram.com/accounts/create/",
        type: "Social Platform",
        difficulty: "Medium",
        urgency: "Medium",
        tutorial: "Instagram affiliate marketing"
      },
      {
        name: "Pinterest",
        description: "Visual discovery engine with high purchase intent",
        link: "https://www.pinterest.com/",
        affiliateLink: "https://www.pinterest.com/business/create/",
        type: "Social Platform",
        difficulty: "Medium",
        urgency: "Low",
        tutorial: "Pinterest affiliate strategy"
      },
      {
        name: "LinkedIn",
        description: "Professional networking for B2B affiliate opportunities",
        link: "https://www.linkedin.com/",
        affiliateLink: "https://www.linkedin.com/signup",
        type: "Professional Platform",
        difficulty: "Medium",
        urgency: "Low",
        tutorial: "LinkedIn for affiliates"
      },
      {
        name: "Twitter",
        description: "Real-time updates and community engagement",
        link: "https://twitter.com/",
        affiliateLink: "https://twitter.com/signup",
        type: "Social Platform",
        difficulty: "Easy",
        urgency: "Low",
        tutorial: "Twitter affiliate marketing"
      }
    ]
  }
];

const quickStartLinks = [
  {
    title: "🚀 Start in 15 Minutes",
    description: "Absolute minimum to begin your journey",
    links: [
      { name: "Create Daraz Account", url: "https://www.daraz.pk/", time: "5 min" },
      { name: "Apply for Affiliate", url: "https://www.daraz.pk/affiliate-program", time: "10 min" }
    ]
  },
  {
    title: "⚡ Setup in 1 Hour",
    description: "Complete basic setup for your first platform",
    links: [
      { name: "Create YouTube Channel", url: "https://www.youtube.com/create_channel", time: "15 min" },
      { name: "Setup Facebook Page", url: "https://www.facebook.com/pages/create", time: "10 min" },
      { name: "Join TikTok", url: "https://www.tiktok.com/signup", time: "5 min" },
      { name: "Install Canva", url: "https://www.canva.com/signup", time: "10 min" },
      { name: "Setup CapCut", url: "https://www.capcut.com/mobile", time: "5 min" }
    ]
  },
  {
    title: "🎯 Ready in 24 Hours",
    description: "Full setup to start earning commissions",
    links: [
      { name: "Research Products", url: "https://trends.google.com/", time: "2 hours" },
      { name: "Create First Content", url: "#content-creation", time: "3 hours" },
      { name: "Setup Analytics", url: "https://analytics.google.com/", time: "30 min" },
      { name: "Join Facebook Groups", url: "#facebook-groups", time: "1 hour" }
    ]
  }
];

export default function PlatformLinksHub() {
  const getUrgencyColor = (urgency: string) => {
    switch(urgency) {
      case "Critical": return "bg-red-100 text-red-800";
      case "High": return "bg-orange-100 text-orange-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case "Easy": return "bg-green-100 text-green-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Hard": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-8">
      {/* Quick Start Section */}
      <Card className="p-6 bg-gradient-to-r from-[#FF6B35] to-[#2C3E50] text-white">
        <h3 className="text-2xl font-bold mb-4">⚡ Quick Start Guide</h3>
        <p className="text-white/90 mb-6">Get started immediately with these time-based action plans</p>
        
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
          {quickStartLinks.map((plan, idx) => (
            <Card key={idx} className="p-4 bg-white/10 backdrop-blur border border-white/20">
              <h4 className="font-bold text-lg mb-2">{plan.title}</h4>
              <p className="text-sm text-white/80 mb-3">{plan.description}</p>
              <div className="space-y-2">
                {plan.links.map((link, linkIdx) => (
                  <div key={linkIdx} className="flex items-center justify-between">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-white hover:bg-white/20 p-1 h-auto"
                      asChild
                    >
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        {link.name}
                      </a>
                    </Button>
                    <span className="text-xs text-white/70">{link.time}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Platform Categories */}
      {platformCategories.map((category, catIdx) => (
        <Card key={catIdx} className="p-6 border-l-4 border-l-[#FF6B35]">
          <div className="flex items-center gap-3 mb-6">
            <div className={`p-3 rounded-lg text-white ${category.color}`}>
              {category.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#2C3E50]">{category.category}</h3>
              <p className="text-gray-600">{category.description}</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
            {category.platforms.map((platform, idx) => (
              <Card key={idx} className="p-4 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-[#2C3E50]">{platform.name}</h4>
                    <Badge variant="outline" className="text-xs mt-1">{platform.type}</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Badge className={getUrgencyColor(platform.urgency)}>
                      {platform.urgency}
                    </Badge>
                    <Badge className={getDifficultyColor(platform.difficulty)}>
                      {platform.difficulty}
                    </Badge>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4">{platform.description}</p>

                <div className="space-y-2">
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white flex-1" asChild>
                      <a href={platform.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Visit Platform
                      </a>
                    </Button>
                    {platform.affiliateLink !== platform.link && (
                      <Button size="sm" variant="outline" className="flex-1" asChild>
                        <a href={platform.affiliateLink} target="_blank" rel="noopener noreferrer">
                          <Zap className="w-3 h-3 mr-1" />
                          Quick Setup
                        </a>
                      </Button>
                    )}
                  </div>
                  
                  <Button size="sm" variant="ghost" className="w-full text-[#2C3E50] hover:bg-gray-100" asChild>
                    <a href="#tutorials">
                      <Play className="w-3 h-3 mr-1" />
                      {platform.tutorial}
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Card>
      ))}

      {/* Important Notes */}
      <Card className="p-6 bg-yellow-50 border-l-4 border-l-yellow-400">
        <h3 className="text-lg font-bold text-[#2C3E50] mb-3">📋 Important Notes for Beginners</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-semibold mb-2 text-red-600">Start Here (Priority Order):</h4>
            <ol className="space-y-1 list-decimal list-inside">
              <li>1. Create Daraz account and apply for affiliate program</li>
              <li>2. Set up YouTube channel (primary platform)</li>
              <li>3. Install Canva and CapCut (essential tools)</li>
              <li>4. Create Facebook page (secondary platform)</li>
              <li>5. Join TikTok for viral content opportunities</li>
            </ol>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-green-600">Success Tips:</h4>
            <ul className="space-y-1">
              <li>• Focus on ONE platform first (YouTube recommended)</li>
              <li>• Don't upgrade to paid tools initially</li>
              <li>• Complete setup before creating content</li>
              <li>• Join Pakistani Facebook groups for networking</li>
              <li>• Use Google Trends for product research</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Platform Comparison */}
      <Card className="p-6 border-l-4 border-l-[#27AE60]">
        <h3 className="text-xl font-bold text-[#2C3E50] mb-4">🏆 Platform Comparison for Beginners</h3>
        <div className="overflow-x-auto -mx-4 px-4">
          <div className="min-w-[640px]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Platform</th>
                  <th className="text-center p-2">Setup Time</th>
                  <th className="text-center p-2">Content Type</th>
                  <th className="text-center p-2">Earning Potential</th>
                  <th className="text-center p-2">Competition</th>
                  <th className="text-center p-2">Recommendation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-2 font-semibold">YouTube</td>
                  <td className="text-center p-2">30 min</td>
                  <td className="text-center p-2">Video Reviews</td>
                  <td className="text-center p-2">⭐⭐⭐⭐⭐</td>
                  <td className="text-center p-2">Medium</td>
                  <td className="text-center p-2"><Badge className="bg-green-100 text-green-800">Start Here</Badge></td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-2 font-semibold">Facebook</td>
                  <td className="text-center p-2">15 min</td>
                  <td className="text-center p-2">Mixed Content</td>
                  <td className="text-center p-2">⭐⭐⭐⭐</td>
                  <td className="text-center p-2">High</td>
                  <td className="text-center p-2"><Badge className="bg-blue-100 text-blue-800">Secondary</Badge></td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-2 font-semibold">TikTok</td>
                  <td className="text-center p-2">10 min</td>
                  <td className="text-center p-2">Short Videos</td>
                  <td className="text-center p-2">⭐⭐⭐⭐</td>
                  <td className="text-center p-2">Low</td>
                  <td className="text-center p-2"><Badge className="bg-purple-100 text-purple-800">Growth</Badge></td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-2 font-semibold">Instagram</td>
                  <td className="text-center p-2">20 min</td>
                  <td className="text-center p-2">Visual</td>
                  <td className="text-center p-2">⭐⭐⭐</td>
                  <td className="text-center p-2">High</td>
                  <td className="text-center p-2"><Badge className="bg-gray-100 text-gray-800">Later</Badge></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    </div>
  );
}
