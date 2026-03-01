import { Card } from "@/components/ui/card";
import { Shield, Eye, Lock, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Privacy() {
  const navigateBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={navigateBack}
          className="mb-6 gap-2 hover:bg-gray-100"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-[#FF6B35] to-[#2C3E50] rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Last updated: March 1, 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-[#2C3E50] mb-4 flex items-center gap-2">
              <Eye className="w-5 h-5 text-[#FF6B35]" />
              Information We Collect
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                We collect minimal information necessary to provide you with the best Daraz affiliate marketing guidance:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Usage data through our analytics tools (anonymized)</li>
                <li>Device and browser information for optimization</li>
                <li>Interaction data with our interactive tools</li>
                <li>Download history for guide materials</li>
              </ul>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold text-[#2C3E50] mb-4 flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#FF6B35]" />
              How We Protect Your Data
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                Your privacy is our priority. We implement industry-standard security measures:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>No personal identification required to use our guide</li>
                <li>All analytics data is anonymized and aggregated</li>
                <li>No data sharing with third parties for marketing</li>
                <li>Secure HTTPS encryption for all connections</li>
                <li>Regular security audits and updates</li>
              </ul>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold text-[#2C3E50] mb-4 flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-[#FF6B35]" />
              Your Rights
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>As a user of our Daraz Affiliate Guide, you have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access our guide without providing personal information</li>
                <li>Opt-out of analytics tracking</li>
                <li>Request data deletion (though we collect minimal data)</li>
                <li>Understand how our tools process information</li>
              </ul>
            </div>
          </Card>

          <Card className="p-6 bg-[#F8F9FA]">
            <h2 className="text-xl font-semibold text-[#2C3E50] mb-4">Contact Us</h2>
            <div className="text-gray-700">
              <p>
                If you have questions about this Privacy Policy or how we handle your data, 
                please reach out through our platform channels mentioned in the guide.
              </p>
              <p className="mt-3">
                We're committed to transparency and will respond to privacy concerns within 7 business days.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
