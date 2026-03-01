import { Card } from "@/components/ui/card";
import { FileText, AlertCircle, CheckCircle, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Terms() {
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
              <FileText className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Last updated: March 1, 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-[#2C3E50] mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#27AE60]" />
              Acceptance of Terms
            </h2>
            <div className="text-gray-700">
              <p>
                By accessing and using the Daraz Affiliate Marketing Guide Pakistan, you accept and agree 
                to be bound by these terms and conditions. This guide is provided for educational purposes 
                to help Pakistani entrepreneurs learn about affiliate marketing.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold text-[#2C3E50] mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-[#FF6B35]" />
              Important Disclaimers
            </h2>
            <div className="space-y-3 text-gray-700">
              <p><strong>Educational Content Only:</strong> This guide provides educational information about affiliate marketing strategies.</p>
              <p><strong>No Income Guarantees:</strong> Success in affiliate marketing depends on individual effort, market conditions, and other factors.</p>
              <p><strong>Market Risks:</strong> E-commerce and affiliate marketing involve financial risks.</p>
              <p><strong>Third-Party Platforms:</strong> Daraz's affiliate program terms may change independently.</p>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold text-[#2C3E50] mb-4 flex items-center gap-2">
              <Scale className="w-5 h-5 text-[#FF6B35]" />
              User Responsibilities
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>As a user of this guide, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use the information for legitimate educational purposes</li>
                <li>Follow Daraz's affiliate program terms and conditions</li>
                <li>Comply with Pakistani laws and regulations</li>
                <li>Practice ethical marketing and transparent disclosure</li>
                <li>Not reproduce or redistribute copyrighted content without permission</li>
              </ul>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold text-[#2C3E50] mb-4">Intellectual Property</h2>
            <div className="text-gray-700">
              <p>
                All content in this guide, including text, images, tools, and design elements, 
                is owned by Daraz Affiliate Marketing Guide Pakistan and protected by copyright laws. 
                You may use the information for personal learning but may not reproduce or distribute 
                it without explicit permission.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold text-[#2C3E50] mb-4">Limitation of Liability</h2>
            <div className="text-gray-700">
              <p>
                The Daraz Affiliate Marketing Guide Pakistan and its creators shall not be liable for 
                any direct, indirect, or consequential damages arising from the use of this guide or 
                participation in affiliate marketing activities. Users assume full responsibility for 
                their business decisions and outcomes.
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-[#F8F9FA]">
            <h2 className="text-xl font-semibold text-[#2C3E50] mb-4">Contact Information</h2>
            <div className="text-gray-700">
              <p>
                For questions about these Terms of Service or to report violations, 
                please use the contact methods provided in our guide materials.
              </p>
              <p className="mt-3">
                These terms are effective as of March 1, 2026, and may be updated periodically 
                to reflect changes in our services or applicable laws.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
