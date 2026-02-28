import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle, ExternalLink, Play, BookOpen, Users, Target, TrendingUp, Zap, DollarSign, Award } from "lucide-react";
import { useState } from "react";

const workflowSteps = [
  {
    phase: "Day 1-7: Foundation Setup",
    icon: <Zap className="w-6 h-6" />,
    color: "bg-blue-500",
    tasks: [
      {
        title: "Create Daraz Account",
        description: "Register on Daraz with valid Pakistani email and phone number",
        action: "Visit Daraz",
        link: "https://www.daraz.pk/",
        difficulty: "Easy",
        time: "15 minutes",
        completed: false
      },
      {
        title: "Apply for Affiliate Program",
        description: "Complete the affiliate application with your marketing channels",
        action: "Apply Now",
        link: "https://www.daraz.pk/affiliate-program",
        difficulty: "Easy", 
        time: "30 minutes",
        completed: false
      },
      {
        title: "Choose Your Niche",
        description: "Select one micro-niche based on market demand and your interest",
        action: "Research Niches",
        link: "#niche-selection",
        difficulty: "Medium",
        time: "2 hours",
        completed: false
      },
      {
        title: "Set Up Payment Method",
        description: "Add bank account or Easypaisa for commission withdrawals",
        action: "Setup Guide",
        link: "#payment-setup",
        difficulty: "Easy",
        time: "20 minutes",
        completed: false
      }
    ]
  },
  {
    phase: "Day 8-21: Platform Setup",
    icon: <Target className="w-6 h-6" />,
    color: "bg-green-500",
    tasks: [
      {
        title: "Create YouTube Channel",
        description: "Set up your channel with proper branding and optimization",
        action: "Create Channel",
        link: "https://www.youtube.com/create_channel",
        difficulty: "Medium",
        time: "1 hour",
        completed: false
      },
      {
        title: "Set Up Facebook Page",
        description: "Create business page for your affiliate content",
        action: "Create Page",
        link: "https://www.facebook.com/pages/create",
        difficulty: "Easy",
        time: "30 minutes",
        completed: false
      },
      {
        title: "Create TikTok Account",
        description: "Set up TikTok profile for short-form content",
        action: "Join TikTok",
        link: "https://www.tiktok.com/",
        difficulty: "Easy",
        time: "20 minutes",
        completed: false
      },
      {
        title: "Install Essential Tools",
        description: "Set up video editing, thumbnail creation, and analytics tools",
        action: "Tool List",
        link: "#essential-tools",
        difficulty: "Medium",
        time: "2 hours",
        completed: false
      }
    ]
  },
  {
    phase: "Day 22-30: First Content",
    icon: <BookOpen className="w-6 h-6" />,
    color: "bg-purple-500",
    tasks: [
      {
        title: "Research 10 Products",
        description: "Find high-demand products in your niche with good commission rates",
        action: "Product Research",
        link: "#product-research",
        difficulty: "Medium",
        time: "3 hours",
        completed: false
      },
      {
        title: "Create 3 YouTube Videos",
        description: "Product reviews, comparison, and buying guide videos",
        action: "Video Templates",
        link: "#video-templates",
        difficulty: "Hard",
        time: "6 hours",
        completed: false
      },
      {
        title: "Write 5 Blog Posts",
        description: "Detailed product reviews and comparison articles",
        action: "Blog Templates",
        link: "#blog-templates",
        difficulty: "Medium",
        time: "4 hours",
        completed: false
      },
      {
        title: "Create 10 TikToks",
        description: "Short product reviews and quick tips",
        action: "TikTok Ideas",
        link: "#tiktok-ideas",
        difficulty: "Easy",
        time: "2 hours",
        completed: false
      }
    ]
  },
  {
    phase: "Day 31-60: Growth & Optimization",
    icon: <TrendingUp className="w-6 h-6" />,
    color: "bg-orange-500",
    tasks: [
      {
        title: "Analyze Performance",
        description: "Review analytics to identify what content performs best",
        action: "Analytics Guide",
        link: "#analytics",
        difficulty: "Medium",
        time: "2 hours",
        completed: false
      },
      {
        title: "Build Email List",
        description: "Set up email capture and start building your subscriber list",
        action: "Email Setup",
        link: "#email-marketing",
        difficulty: "Hard",
        time: "3 hours",
        completed: false
      },
      {
        title: "Scale Content Production",
        description: "Double your content output based on what works",
        action: "Content Strategy",
        link: "#content-scaling",
        difficulty: "Medium",
        time: "5 hours",
        completed: false
      },
      {
        title: "Join Facebook Groups",
        description: "Participate in relevant groups to build authority",
        action: "Group List",
        link: "#facebook-groups",
        difficulty: "Easy",
        time: "1 hour",
        completed: false
      }
    ]
  },
  {
    phase: "Day 61-90: Advanced Strategies",
    icon: <DollarSign className="w-6 h-6" />,
    color: "bg-red-500",
    tasks: [
      {
        title: "Start Paid Ads",
        description: "Run Facebook ads to promote your best content",
        action: "Ads Guide",
        link: "#paid-ads",
        difficulty: "Hard",
        time: "4 hours",
        completed: false
      },
      {
        title: "Create Sales Funnels",
        description: "Build automated systems for lead generation",
        action: "Funnel Templates",
        link: "#sales-funnels",
        difficulty: "Hard",
        time: "6 hours",
        completed: false
      },
      {
        title: "Expand to New Platforms",
        description: "Add Instagram, Pinterest, or other platforms",
        action: "Platform Guide",
        link: "#platform-expansion",
        difficulty: "Medium",
        time: "3 hours",
        completed: false
      },
      {
        title: "Hire Virtual Assistant",
        description: "Outsource repetitive tasks to scale faster",
        action: "Hiring Guide",
        link: "#outsourcing",
        difficulty: "Medium",
        time: "2 hours",
        completed: false
      }
    ]
  }
];

const essentialTools = [
  {
    name: "Canva",
    category: "Design",
    description: "Create thumbnails, social media graphics, and promotional materials",
    link: "https://www.canva.com/",
    price: "Free/Paid",
    essential: true
  },
  {
    name: "CapCut",
    category: "Video Editing",
    description: "Edit videos for YouTube, TikTok, and Reels",
    link: "https://www.capcut.com/",
    price: "Free/Paid",
    essential: true
  },
  {
    name: "Google Trends",
    category: "Research",
    description: "Find trending products and topics in Pakistan",
    link: "https://trends.google.com/",
    price: "Free",
    essential: true
  },
  {
    name: "Mailchimp",
    category: "Email Marketing",
    description: "Build and manage your email list",
    link: "https://mailchimp.com/",
    price: "Free/Paid",
    essential: false
  },
  {
    name: "Google Analytics",
    category: "Analytics",
    description: "Track website traffic and user behavior",
    link: "https://analytics.google.com/",
    price: "Free",
    essential: true
  },
  {
    name: "Buffer",
    category: "Social Media",
    description: "Schedule posts across multiple platforms",
    link: "https://buffer.com/",
    price: "Free/Paid",
    essential: false
  }
];

export default function BeginnerSuccessWorkflow() {
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(new Set());
  const [expandedPhase, setExpandedPhase] = useState<string | null>("Day 1-7: Foundation Setup");

  const toggleTask = (taskId: string) => {
    const newCompleted = new Set(completedTasks);
    if (newCompleted.has(taskId)) {
      newCompleted.delete(taskId);
    } else {
      newCompleted.add(taskId);
    }
    setCompletedTasks(newCompleted);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case "Easy": return "bg-green-100 text-green-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Hard": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getPhaseProgress = (phase: any) => {
    const completedInPhase = phase.tasks.filter((task: any, idx: number) => 
      completedTasks.has(`${phase.phase}-${idx}`)
    ).length;
    return (completedInPhase / phase.tasks.length) * 100;
  };

  const totalTasks = workflowSteps.reduce((acc, phase) => acc + phase.tasks.length, 0);
  const overallProgress = (completedTasks.size / totalTasks) * 100;

  return (
    <div className="space-y-8">
      {/* Overall Progress */}
      <Card className="p-4 sm:p-6 bg-gradient-to-r from-[#FF6B35] to-[#2C3E50] text-white">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Your 90-Day Success Journey</h3>
            <p className="text-white/90 text-sm sm:text-base">Follow this exact workflow to reach PKR 50,000+ monthly income</p>
          </div>
          <div className="text-center sm:text-right">
            <div className="text-2xl sm:text-3xl font-bold">{Math.round(overallProgress)}%</div>
            <div className="text-sm text-white/80">{completedTasks.size}/{totalTasks} completed</div>
          </div>
        </div>
        <div className="w-full bg-white/20 rounded-full h-2 sm:h-3">
          <div 
            className="bg-white h-2 sm:h-3 rounded-full transition-all duration-300"
            style={{ width: `${overallProgress}%` }}
          />
        </div>
      </Card>

      {/* Workflow Phases */}
      <div className="space-y-6">
        {workflowSteps.map((phase, phaseIdx) => {
          const phaseProgress = getPhaseProgress(phase);
          const isExpanded = expandedPhase === phase.phase;
          
          return (
            <Card key={phaseIdx} className="overflow-hidden border-l-4 border-l-[#FF6B35]">
              <div 
                className="p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => setExpandedPhase(isExpanded ? null : phase.phase)}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className={`p-2 sm:p-3 rounded-lg text-white ${phase.color} flex-shrink-0`}>
                      <div className="w-4 h-4 sm:w-6 sm:h-6">{phase.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#2C3E50]">{phase.phase}</h3>
                      <p className="text-gray-600 text-sm">
                        {phase.tasks.filter((_, idx) => completedTasks.has(`${phase.phase}-${idx}`)).length} of {phase.tasks.length} tasks completed
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="text-sm font-semibold text-[#27AE60]">{Math.round(phaseProgress)}%</div>
                      <div className="w-12 sm:w-16 bg-gray-200 rounded-full h-1.5 sm:h-2">
                        <div 
                          className="bg-[#27AE60] h-1.5 sm:h-2 rounded-full transition-all duration-300"
                          style={{ width: `${phaseProgress}%` }}
                        />
                      </div>
                    </div>
                    <Award className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${isExpanded ? 'rotate-180' : ''} text-gray-400`} />
                  </div>
                </div>
              </div>

              {isExpanded && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-gray-100">
                  <div className="space-y-3 sm:space-y-4 mt-4">
                    {phase.tasks.map((task, taskIdx) => {
                      const taskId = `${phase.phase}-${taskIdx}`;
                      const isCompleted = completedTasks.has(taskId);
                      
                      return (
                        <Card key={taskIdx} className={`p-3 sm:p-4 ${isCompleted ? 'bg-green-50 border-green-200' : 'bg-white'}`}>
                          <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleTask(taskId);
                              }}
                              className="mt-1 touch-target"
                            >
                              {isCompleted ? (
                                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
                              ) : (
                                <Circle className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 hover:text-gray-600" />
                              )}
                            </button>
                            
                            <div className="flex-1">
                              <div className="flex flex-wrap items-center gap-2 mb-2">
                                <h4 className={`font-semibold text-sm sm:text-base ${isCompleted ? 'text-gray-500 line-through' : 'text-[#2C3E50]'}`}>
                                  {task.title}
                                </h4>
                                <Badge className={`${getDifficultyColor(task.difficulty)} text-xs`}>
                                  {task.difficulty}
                                </Badge>
                                <Badge variant="outline" className="text-blue-600 border-blue-600 text-xs">
                                  {task.time}
                                </Badge>
                              </div>
                              
                              <p className="text-gray-600 text-sm mb-3">{task.description}</p>
                              
                              <div className="flex flex-wrap sm:flex-nowrap items-center gap-2">
                                <Button 
                                  size="sm" 
                                  className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white mobile-button text-xs"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <ExternalLink className="w-3 h-3 mr-1" />
                                  {task.action}
                                </Button>
                                <Button 
                                  size="sm" 
                                  variant="outline"
                                  onClick={(e) => e.stopPropagation()}
                                  className="text-xs"
                                >
                                  <Play className="w-3 h-3 mr-1" />
                                  Tutorial
                                </Button>
                              </div>
                            </div>
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              )}
            </Card>
          );
        })}
      </div>

      {/* Essential Tools Section */}
      <Card className="p-4 sm:p-6 border-l-4 border-l-[#27AE60]">
        <h3 className="text-lg sm:text-xl font-bold text-[#2C3E50] mb-4">Essential Tools for Success</h3>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
          {essentialTools.map((tool, idx) => (
            <Card key={idx} className="p-3 sm:p-4 border border-gray-200">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-semibold text-[#2C3E50] text-sm sm:text-base">{tool.name}</h4>
                  <Badge variant="outline" className="text-xs">{tool.category}</Badge>
                </div>
                {tool.essential && (
                  <Badge className="bg-red-100 text-red-800 text-xs">Essential</Badge>
                )}
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mb-3">{tool.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{tool.price}</span>
                <Button size="sm" variant="outline" asChild className="text-xs">
                  <a href={tool.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Visit
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Success Tips */}
      <Card className="p-4 sm:p-6 bg-gradient-to-r from-[#27AE60] to-[#2C3E50] text-white">
        <h3 className="text-lg sm:text-xl font-bold mb-4">🎯 Success Tips for Beginners</h3>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2 text-sm sm:text-base">Do This:</h4>
            <ul className="space-y-1 text-xs sm:text-sm">
              <li>✅ Complete one phase before starting the next</li>
              <li>✅ Focus on ONE platform first (YouTube recommended)</li>
              <li>✅ Create content consistently (minimum 3x per week)</li>
              <li>✅ Build your email list from day one</li>
              <li>✅ Track everything - clicks, conversions, earnings</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-sm sm:text-base">Avoid This:</h4>
            <ul className="space-y-1 text-xs sm:text-sm">
              <li>❌ Don't promote everything - stay in your niche</li>
              <li>❌ Don't buy expensive equipment initially</li>
              <li>❌ Don't expect overnight success</li>
              <li>❌ Don't ignore analytics and data</li>
              <li>❌ Don't give up before 90 days</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
