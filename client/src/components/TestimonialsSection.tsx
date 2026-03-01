import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Play, ExternalLink, TrendingUp, Users, Award, Clock } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ayesha Khan",
    avatar: "AK",
    role: "Fashion Affiliate",
    location: "Karachi",
    image: "https://images.unsplash.com/photo-1494790108755-8462a9b2d5b7?w=150&h=150&fit=crop&face=1",
    rating: 5,
    earnings: "PKR 85,000/month",
    time: "8 months",
    content: "This guide completely transformed my life! I was skeptical about affiliate marketing, but the step-by-step approach made it so easy to understand. Within 6 months, I was earning more than my full-time job.",
    platforms: ["Instagram", "TikTok"],
    achievement: "Reached 100K followers"
  },
  {
    id: 2,
    name: "Muhammad Ali",
    avatar: "MA",
    role: "Electronics Affiliate",
    location: "Lahore",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&face=1",
    rating: 5,
    earnings: "PKR 120,000/month",
    time: "12 months",
    content: "The commission calculator and product research tools are game-changers. I now know exactly which products to promote and can predict my earnings. This is the most comprehensive guide available in Pakistan.",
    platforms: ["YouTube", "Facebook"],
    achievement: "50K+ subscribers"
  },
  {
    id: 3,
    name: "Sara Ahmed",
    avatar: "SA",
    role: "Beauty & Lifestyle",
    location: "Islamabad",
    image: "https://images.unsplash.com/photo-1438761681033-6466ff22cc7?w=150&h=150&fit=crop&face=1",
    rating: 4,
    earnings: "PKR 45,000/month",
    time: "5 months",
    content: "As a complete beginner, I was overwhelmed by all the information online. This guide breaks everything down into simple, actionable steps. The community support is amazing too!",
    platforms: ["Instagram", "Pinterest"],
    achievement: "30K followers"
  },
  {
    id: 4,
    name: "Bilal Raza",
    avatar: "BR",
    role: "Home Appliances",
    location: "Faisalabad",
    image: "https://images.unsplash.com/photo-1500648405252-8d0b076c7c9e?w=150&h=150&fit=crop&face=1",
    rating: 5,
    earnings: "PKR 95,000/month",
    time: "10 months",
    content: "The platform links hub saved me so much time! I have all the tools I need in one place. The success metrics helped me track my progress and stay motivated throughout my journey.",
    platforms: ["YouTube", "TikTok"],
    achievement: "25K subscribers"
  },
  {
    id: 5,
    name: "Fatima Sheikh",
    avatar: "FS",
    role: "Books & Education",
    location: "Rawalpindi",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e5?w=150&h=150&fit=crop&face=1",
    rating: 4,
    earnings: "PKR 35,000/month",
    time: "4 months",
    content: "I started with zero investment and now earn a steady income. The beginner workflow is perfect for those who want to start small and scale up gradually.",
    platforms: ["Facebook", "Instagram"],
    achievement: "15K followers"
  },
  {
    id: 6,
    name: "Ahmed Hassan",
    avatar: "AH",
    role: "Sports & Fitness",
    location: "Peshawar",
    image: "https://images.unsplash.com/photo-1506905925346-24b5c61b5b25?w=150&h=150&fit=crop&face=1",
    rating: 5,
    earnings: "PKR 65,000/month",
    time: "7 months",
    content: "The niche selection module helped me find the perfect market. I'm now the go-to person for fitness equipment reviews in Pakistan. The income potential is incredible!",
    platforms: ["YouTube", "TikTok"],
    achievement: "40K subscribers"
  }
];

const stats = {
  totalAffiliates: "10,000+",
  averageEarnings: "PKR 65,000/month",
  successRate: "87%",
  totalEarnings: "PKR 5.2 Crore+"
};

export default function TestimonialsSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-white to-gray-50" id="testimonials">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Success Stories from Pakistani Affiliates
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real people, real results. Join thousands of Pakistanis who are already earning through Daraz affiliate marketing.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <Card className="p-4 sm:p-6 text-center bg-gradient-to-br from-[#FF6B35] to-[#E55A2B] text-white">
            <div className="text-2xl sm:text-3xl font-bold mb-2">{stats.totalAffiliates}</div>
            <div className="text-xs sm:text-sm opacity-90">Active Affiliates</div>
          </Card>
          <Card className="p-4 sm:p-6 text-center bg-gradient-to-br from-[#27AE60] to-[#229954] text-white">
            <div className="text-2xl sm:text-3xl font-bold mb-2">{stats.averageEarnings}</div>
            <div className="text-xs sm:text-sm opacity-90">Average Monthly</div>
          </Card>
          <Card className="p-4 sm:p-6 text-center bg-gradient-to-br from-[#2C3E50] to-[#34495E] text-white">
            <div className="text-2xl sm:text-3xl font-bold mb-2">{stats.successRate}</div>
            <div className="text-xs sm:text-sm opacity-90">Success Rate</div>
          </Card>
          <Card className="p-4 sm:p-6 text-center bg-gradient-to-br from-[#F39C12] to-[#E67E22] text-white">
            <div className="text-2xl sm:text-3xl font-bold mb-2">{stats.totalEarnings}</div>
            <div className="text-xs sm:text-sm opacity-90">Total Earnings</div>
          </Card>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-4 sm:p-6 hover:shadow-lg transition-shadow bg-white">
              <div className="flex items-start gap-3 sm:gap-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#FF6B35] to-[#2C3E50] rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg">
                    {testimonial.avatar}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</h3>
                    <Badge className="text-xs bg-[#FF6B35]/10 text-[#FF6B35] px-2 py-1">
                      {testimonial.role}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {testimonial.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6 0v-4l-3 3m-6-4h6" />
                      </svg>
                      {testimonial.time}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4" style={{ fill: '#FF6B35' }} />
                ))}
                <span className="text-sm text-gray-600 ml-1">({testimonial.rating}.0)</span>
              </div>

              <blockquote className="text-gray-700 mb-4 italic text-sm sm:text-base">
                "{testimonial.content}"
              </blockquote>

              <div className="flex flex-wrap gap-2 mb-4">
                {testimonial.platforms.map((platform) => (
                  <Badge key={platform} variant="outline" className="text-xs">
                    {platform}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <div className="text-lg sm:text-xl font-bold text-[#27AE60]">{testimonial.earnings}</div>
                  <div className="text-xs sm:text-sm text-gray-500">Monthly Earnings</div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-500">
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                    {testimonial.achievement}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="p-6 sm:p-8 bg-gradient-to-r from-[#FF6B35] to-[#2C3E50] text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Ready to Start Your Success Story?</h3>
            <p className="text-white/90 mb-6 text-sm sm:text-base">
              Join thousands of Pakistanis who are already earning through Daraz affiliate marketing. 
              Your success story could be featured here next!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button className="bg-white text-[#FF6B35] hover:bg-gray-100 font-semibold px-6 sm:px-8 py-3 text-sm sm:text-base">
                <Users className="w-4 h-4 mr-2" />
                Join Our Community
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-6 sm:px-8 py-3 text-sm sm:text-base">
                <Play className="w-4 h-4 mr-2" />
                Watch Success Stories
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
