import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TrendingUp, TrendingDown, Target, DollarSign, Users, MousePointer, ShoppingCart, Calendar, Award, AlertCircle } from "lucide-react";
import { useState } from "react";

const milestones = [
  {
    level: "Beginner",
    targetEarnings: "PKR 0-5,000",
    timeframe: "Month 1",
    icon: "🌱",
    color: "bg-green-500",
    requirements: {
      clicks: "0-50/day",
      sales: "0-2/month",
      content: "3 pieces",
      platforms: "1 platform"
    },
    tips: [
      "Focus on learning, not earning",
      "Create your first 3 pieces of content",
      "Understand your platform's algorithm",
      "Research 10 products in your niche"
    ]
  },
  {
    level: "Growth",
    targetEarnings: "PKR 10,000-50,000",
    timeframe: "Month 2-3",
    icon: "📈",
    color: "bg-blue-500",
    requirements: {
      clicks: "50-200/day",
      sales: "5-20/month",
      content: "15 pieces",
      platforms: "2 platforms"
    },
    tips: [
      "Double your content output",
      "Expand to second platform",
      "Build email list (100+ subscribers)",
      "Analyze what content performs best"
    ]
  },
  {
    level: "Advanced",
    targetEarnings: "PKR 100,000-500,000",
    timeframe: "Month 4-6",
    icon: "🚀",
    color: "bg-purple-500",
    requirements: {
      clicks: "200-1000/day",
      sales: "50-200/month",
      content: "50+ pieces",
      platforms: "3+ platforms"
    },
    tips: [
      "Scale paid advertising",
      "Build automated systems",
      "Hire virtual assistant",
      "Create advanced content strategies"
    ]
  },
  {
    level: "Authority",
    targetEarnings: "PKR 500,000-2,000,000+",
    timeframe: "Month 7-12",
    icon: "👑",
    color: "bg-red-500",
    requirements: {
      clicks: "1000-5000/day",
      sales: "200-1000+/month",
      content: "100+ pieces",
      platforms: "Multiple platforms"
    },
    tips: [
      "Diversify income streams",
      "Create digital products",
      "Build agency/team",
      "Become industry thought leader"
    ]
  }
];

const kpiCalculators = [
  {
    name: "Conversion Rate",
    description: "Percentage of clicks that convert to sales",
    inputs: [
      { label: "Total Clicks", key: "clicks", type: "number", placeholder: "1000" },
      { label: "Total Sales", key: "sales", type: "number", placeholder: "20" }
    ],
    formula: "(Sales / Clicks) × 100",
    goodTarget: "2-5%",
    excellentTarget: "5-10%"
  },
  {
    name: "Average Order Value",
    description: "Average amount earned per sale",
    inputs: [
      { label: "Total Revenue (PKR)", key: "revenue", type: "number", placeholder: "50000" },
      { label: "Total Sales", key: "sales", type: "number", placeholder: "20" }
    ],
    formula: "Revenue / Sales",
    goodTarget: "PKR 2,000-5,000",
    excellentTarget: "PKR 5,000+"
  },
  {
    name: "Click-Through Rate",
    description: "Percentage of viewers who click your links",
    inputs: [
      { label: "Link Clicks", key: "clicks", type: "number", placeholder: "500" },
      { label: "Total Views", key: "views", type: "number", placeholder: "10000" }
    ],
    formula: "(Clicks / Views) × 100",
    goodTarget: "3-8%",
    excellentTarget: "8-15%"
  },
  {
    name: "Earnings Per Click",
    description: "Revenue generated per click",
    inputs: [
      { label: "Total Revenue (PKR)", key: "revenue", type: "number", placeholder: "50000" },
      { label: "Total Clicks", key: "clicks", type: "number", placeholder: "1000" }
    ],
    formula: "Revenue / Clicks",
    goodTarget: "PKR 20-50",
    excellentTarget: "PKR 50+"
  }
];

export default function SuccessMetrics() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [calculatorData, setCalculatorData] = useState<any>({});
  const [userMetrics, setUserMetrics] = useState({
    monthlyEarnings: "",
    dailyClicks: "",
    monthlySales: "",
    contentPieces: "",
    platformsUsed: ""
  });

  const calculateKPI = (calculator: any) => {
    const data = calculatorData[calculator.name] || {};
    
    switch(calculator.name) {
      case "Conversion Rate":
        if (data.clicks && data.sales) {
          return ((data.sales / data.clicks) * 100).toFixed(2) + "%";
        }
        break;
      case "Average Order Value":
        if (data.revenue && data.sales) {
          return "PKR " + (data.revenue / data.sales).toLocaleString();
        }
        break;
      case "Click-Through Rate":
        if (data.clicks && data.views) {
          return ((data.clicks / data.views) * 100).toFixed(2) + "%";
        }
        break;
      case "Earnings Per Click":
        if (data.revenue && data.clicks) {
          return "PKR " + (data.revenue / data.clicks).toFixed(2);
        }
        break;
    }
    return "Enter data to calculate";
  };

  const getUserLevel = () => {
    const earnings = parseFloat(userMetrics.monthlyEarnings) || 0;
    
    if (earnings >= 500000) return 3; // Authority
    if (earnings >= 100000) return 2; // Advanced
    if (earnings >= 10000) return 1; // Growth
    return 0; // Beginner
  };

  const getProgressToNextLevel = () => {
    const userLvl = getUserLevel();
    if (userLvl >= 3) return 100;
    
    const currentEarnings = parseFloat(userMetrics.monthlyEarnings) || 0;
    const currentMilestone = milestones[userLvl];
    const nextMilestone = milestones[userLvl + 1];
    
    if (!currentMilestone || !nextMilestone) return 0;
    
    const currentMin = parseFloat(currentMilestone.targetEarnings.split("-")[0].replace("PKR ", "").replace(",", "")) || 0;
    const nextMin = parseFloat(nextMilestone.targetEarnings.split("-")[0].replace("PKR ", "").replace(",", "")) || 0;
    
    const progress = ((currentEarnings - currentMin) / (nextMin - currentMin)) * 100;
    return Math.max(0, Math.min(100, progress));
  };

  return (
    <div className="space-y-8">
      {/* Current Level Status */}
      <Card className="p-6 bg-gradient-to-r from-[#FF6B35] to-[#2C3E50] text-white">
        <h3 className="text-2xl font-bold mb-4">🎯 Your Current Success Level</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="mb-4">
              <Label className="text-white text-sm">Monthly Earnings (PKR)</Label>
              <Input
                type="number"
                value={userMetrics.monthlyEarnings}
                onChange={(e) => setUserMetrics({...userMetrics, monthlyEarnings: e.target.value})}
                className="mt-1 bg-white/20 border-white/30 text-white placeholder-white/60"
                placeholder="50000"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Current Level:</span>
                <span className="font-bold">{milestones[getUserLevel()].icon} {milestones[getUserLevel()].level}</span>
              </div>
              <div className="flex justify-between">
                <span>Target Range:</span>
                <span className="font-bold">{milestones[getUserLevel()].targetEarnings}</span>
              </div>
              <div className="flex justify-between">
                <span>Timeframe:</span>
                <span className="font-bold">{milestones[getUserLevel()].timeframe}</span>
              </div>
            </div>
          </div>
          
          <div>
            <div className="mb-2 text-sm text-white/80">Progress to Next Level</div>
            <div className="text-2xl font-bold mb-2">{Math.round(getProgressToNextLevel())}%</div>
            <Progress value={getProgressToNextLevel()} className="h-3 bg-white/20" />
            <div className="mt-2 text-sm text-white/80">
              {getUserLevel() < 3 ? `Next: ${milestones[getUserLevel() + 1].level}` : "Maximum level reached!"}
            </div>
          </div>
        </div>
      </Card>

      {/* All Milestones */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {milestones.map((milestone, idx) => {
          const isCurrentLevel = getUserLevel() === idx;
          const isCompleted = getUserLevel() > idx;
          
          return (
            <Card key={idx} className={`p-4 ${isCurrentLevel ? 'border-2 border-[#FF6B35] bg-orange-50' : isCompleted ? 'bg-green-50 border-green-200' : 'border-gray-200'}`}>
              <div className="text-center mb-3">
                <div className="text-3xl mb-2">{milestone.icon}</div>
                <h4 className="font-bold text-[#2C3E50]">{milestone.level}</h4>
                <Badge className={isCurrentLevel ? "bg-[#FF6B35]" : isCompleted ? "bg-green-500" : "bg-gray-400"}>
                  {isCurrentLevel ? "Current" : isCompleted ? "Completed" : "Next"}
                </Badge>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Earnings:</span>
                  <span className="font-semibold">{milestone.targetEarnings}</span>
                </div>
                <div className="flex justify-between">
                  <span>Time:</span>
                  <span className="font-semibold">{milestone.timeframe}</span>
                </div>
              </div>
              
              <div className="mt-3 pt-3 border-t border-gray-200">
                <div className="text-xs font-semibold mb-1">Requirements:</div>
                <div className="space-y-1 text-xs">
                  {Object.entries(milestone.requirements).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="capitalize">{key}:</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* KPI Calculators */}
      <Card className="p-6 border-l-4 border-l-[#27AE60]">
        <h3 className="text-xl font-bold text-[#2C3E50] mb-4">📊 Performance Calculators</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {kpiCalculators.map((calculator, idx) => (
            <Card key={idx} className="p-4 border border-gray-200">
              <h4 className="font-semibold text-[#2C3E50] mb-2">{calculator.name}</h4>
              <p className="text-sm text-gray-600 mb-4">{calculator.description}</p>
              
              <div className="space-y-3 mb-4">
                {calculator.inputs.map((input) => (
                  <div key={input.key}>
                    <Label className="text-sm">{input.label}</Label>
                    <Input
                      type={input.type}
                      placeholder={input.placeholder}
                      value={calculatorData[calculator.name]?.[input.key] || ""}
                      onChange={(e) => {
                        const newData = {...calculatorData};
                        if (!newData[calculator.name]) newData[calculator.name] = {};
                        newData[calculator.name][input.key] = parseFloat(e.target.value) || 0;
                        setCalculatorData(newData);
                      }}
                      className="mt-1"
                    />
                  </div>
                ))}
              </div>
              
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Result:</div>
                <div className="text-xl font-bold text-[#FF6B35]">{calculateKPI(calculator)}</div>
                <div className="text-xs text-gray-500 mt-1">{calculator.formula}</div>
              </div>
              
              <div className="mt-3 flex gap-2">
                <Badge className="bg-blue-100 text-blue-800 text-xs">Good: {calculator.goodTarget}</Badge>
                <Badge className="bg-green-100 text-green-800 text-xs">Excellent: {calculator.excellentTarget}</Badge>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Success Tips for Current Level */}
      <Card className="p-6 bg-gradient-to-r from-[#27AE60] to-[#2C3E50] text-white">
        <h3 className="text-xl font-bold mb-4">💡 Success Tips for Your Level</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3">{milestones[getUserLevel()].icon} {milestones[getUserLevel()].level} Focus Areas</h4>
            <ul className="space-y-2">
              {milestones[getUserLevel()].tips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Target className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">🎯 Immediate Action Items</h4>
            <div className="space-y-2">
              {getUserLevel() === 0 && (
                <>
                  <div className="p-2 bg-white/20 rounded text-sm">✅ Create your first YouTube video</div>
                  <div className="p-2 bg-white/20 rounded text-sm">✅ Research 10 products in your niche</div>
                  <div className="p-2 bg-white/20 rounded text-sm">✅ Join 5 relevant Facebook groups</div>
                </>
              )}
              {getUserLevel() === 1 && (
                <>
                  <div className="p-2 bg-white/20 rounded text-sm">📈 Double your content output</div>
                  <div className="p-2 bg-white/20 rounded text-sm">📈 Set up email capture system</div>
                  <div className="p-2 bg-white/20 rounded text-sm">📈 Analyze your best performing content</div>
                </>
              )}
              {getUserLevel() === 2 && (
                <>
                  <div className="p-2 bg-white/20 rounded text-sm">🚀 Start with Facebook ads (PKR 500/day)</div>
                  <div className="p-2 bg-white/20 rounded text-sm">🚀 Hire virtual assistant for content</div>
                  <div className="p-2 bg-white/20 rounded text-sm">🚀 Build automated sales funnels</div>
                </>
              )}
              {getUserLevel() === 3 && (
                <>
                  <div className="p-2 bg-white/20 rounded text-sm">👑 Create your own digital products</div>
                  <div className="p-2 bg-white/20 rounded text-sm">👑 Build an agency/team</div>
                  <div className="p-2 bg-white/20 rounded text-sm">👑 Diversify into other affiliate programs</div>
                </>
              )}
            </div>
          </div>
        </div>
      </Card>

      {/* Warning/Alert Section */}
      {getUserLevel() === 0 && (
        <Card className="p-4 bg-yellow-50 border-l-4 border-l-yellow-400">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-yellow-800 mb-1">Beginner's Reality Check</h4>
              <p className="text-sm text-yellow-700">
                Most beginners earn PKR 0-5,000 in their first month. This is completely normal! 
                Focus on learning and creating consistent content rather than immediate earnings. 
                Success in affiliate marketing takes 3-6 months of consistent effort.
              </p>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
