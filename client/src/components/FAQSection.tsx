import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, HelpCircle, DollarSign, Users, Target, Clock, Shield, TrendingUp } from "lucide-react";
import { useState } from "react";

const faqCategories = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: <HelpCircle className="w-5 h-5" />,
    color: "bg-blue-500",
    questions: [
      {
        q: "How much money can I really make with Daraz affiliate marketing?",
        a: "Realistically, beginners can earn PKR 5,000-15,000 per month within 3-6 months. With consistent effort, experienced affiliates can reach PKR 50,000-100,000+ monthly. Success depends on your niche, content quality, and marketing consistency."
      },
      {
        q: "Do I need money to start Daraz affiliate marketing?",
        a: "No! You can start with zero investment. All you need is a smartphone and internet connection. We recommend starting with free platforms like TikTok and Instagram, then investing in better equipment as you start earning."
      },
      {
        q: "How long does it take to get approved for Daraz affiliate program?",
        a: "Usually 2-7 business days. Make sure to provide accurate information about your marketing channels (YouTube, Instagram, TikTok, etc.) and have some basic content ready to show."
      },
      {
        q: "What's the minimum age to become a Daraz affiliate?",
        a: "You must be at least 18 years old. If you're under 18, you can still learn and prepare content, but you'll need a parent or guardian to manage the affiliate account and payments."
      }
    ]
  },
  {
    id: "earnings-payments",
    title: "Earnings & Payments",
    icon: <DollarSign className="w-5 h-5" />,
    color: "bg-green-500",
    questions: [
      {
        q: "How and when does Daraz pay commissions?",
        a: "Daraz pays monthly via bank transfer or EasyPaisa/JazzCash. Payments are processed within 30 days after the month ends. Minimum payout is PKR 2,000 for bank transfer and PKR 500 for mobile wallets."
      },
      {
        q: "What's the average commission rate on Daraz?",
        a: "Commission rates vary by category: Electronics (6%), Fashion (5%), Home Appliances (8%), Beauty (6%), Books (4%), Sports (5%), Kitchen (4%), and Pet Supplies (5%). Some categories offer up to 12% during special campaigns."
      },
      {
        q: "Do I pay taxes on affiliate earnings?",
        a: "Yes, affiliate income is taxable in Pakistan. You'll need to register for NTN (National Tax Number) if your annual income exceeds PKR 600,000. Keep detailed records of all earnings and expenses."
      },
      {
        q: "Can I track my sales and earnings in real-time?",
        a: "Yes! The Daraz affiliate dashboard provides real-time tracking of clicks, conversions, commissions, and payment status. You can see detailed analytics for each product and campaign."
      }
    ]
  },
  {
    id: "content-strategy",
    title: "Content Strategy",
    icon: <TrendingUp className="w-5 h-5" />,
    color: "bg-purple-500",
    questions: [
      {
        q: "Which platform is best for beginners in Pakistan?",
        a: "TikTok is excellent for beginners due to its viral potential and low entry barrier. YouTube offers better long-term income but requires more effort. Instagram is great for visual products. Start with one platform and master it before expanding."
      },
      {
        q: "How often should I post content?",
        a: "Consistency is key! For TikTok: 1-3 times daily. For YouTube: 2-4 times weekly. For Instagram: 1-2 times daily. Quality matters more than quantity - focus on creating valuable, engaging content."
      },
      {
        q: "What type of content converts best for affiliate marketing?",
        a: "Product reviews, tutorials, comparison videos, and 'how-to' guides perform best. Pakistani audiences respond well to authentic, honest reviews showing real product usage rather than overly promotional content."
      },
      {
        q: "Do I need to buy products to review them?",
        a: "Not necessarily! Many affiliates succeed without buying products. Focus on researching products thoroughly, reading customer reviews, and creating content based on available information. You can buy products once you start earning."
      }
    ]
  },
  {
    id: "technical-issues",
    title: "Technical Issues",
    icon: <Shield className="w-5 h-5" />,
    color: "bg-orange-500",
    questions: [
      {
        q: "My affiliate links aren't working, what should I do?",
        a: "First, ensure your links are properly formatted. Check if you're using the correct affiliate link format. Clear your browser cache and cookies. If issues persist, contact Daraz affiliate support with screenshots of the problem."
      },
      {
        q: "Why are my sales not being tracked?",
        a: "Common issues include: customers using ad-blockers, cookie issues, customers clicking multiple affiliate links, or technical problems with the tracking system. Always test your links and ensure proper disclosure."
      },
      {
        q: "Can I use affiliate links on multiple platforms?",
        a: "Yes! You can and should use your affiliate links across all your platforms. However, avoid posting the same content everywhere - adapt your content for each platform's audience and format."
      },
      {
        q: "What happens if a customer returns a product?",
        a: "If a customer returns a product, the commission for that sale will be deducted from your earnings. This is standard practice in affiliate marketing to ensure fair business practices."
      }
    ]
  }
];

export default function FAQSection() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>("getting-started");
  const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(new Set());

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const toggleQuestion = (questionId: string) => {
    const newExpanded = new Set(expandedQuestions);
    if (newExpanded.has(questionId)) {
      newExpanded.delete(questionId);
    } else {
      newExpanded.add(questionId);
    }
    setExpandedQuestions(newExpanded);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100" id="faq">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Everything you need to know about starting and succeeding with Daraz affiliate marketing in Pakistan
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto px-4">
          {faqCategories.map((category) => (
            <Card key={category.id} className="overflow-hidden">
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full p-4 sm:p-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF6B35] rounded-lg touch-manipulation-adjustment"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center text-white`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                    <p className="text-sm text-gray-500">{category.questions.length} questions</p>
                  </div>
                </div>
                {expandedCategory === category.id ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>

              {expandedCategory === category.id && (
                <div className="px-6 pb-6 space-y-4">
                  {category.questions.map((faq, index) => {
                    const questionId = `${category.id}-${index}`;
                    const isExpanded = expandedQuestions.has(questionId);
                    
                    return (
                      <div key={questionId} className="border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() => toggleQuestion(questionId)}
                          className="w-full p-4 sm:p-6 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF6B35] rounded-lg touch-manipulation-adjustment"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-gray-900 mb-1 line-clamp-2">{faq.q}</h4>
                            </div>
                            {isExpanded ? (
                              <ChevronUp className="w-4 h-4 text-gray-500 flex-shrink-0 mt-1" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0 mt-1" />
                            )}
                          </div>
                        </button>
                        {isExpanded && (
                          <div className="px-4 pb-4 text-gray-600 leading-relaxed border-t border-gray-100">
                            <p className="text-sm">{faq.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="p-6 bg-gradient-to-r from-[#FF6B35] to-[#2C3E50] text-white max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Target className="w-6 h-6" />
              <h3 className="text-xl font-bold">Still have questions?</h3>
            </div>
            <p className="mb-6 text-white/90">
              Can't find the answer you're looking for? We're here to help you succeed in your affiliate marketing journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="bg-white text-[#FF6B35] hover:bg-gray-100 font-medium">
                <Users className="w-4 h-4 mr-2" />
                Join Our Community
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 font-medium">
                <Clock className="w-4 h-4 mr-2" />
                Schedule a Call
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
