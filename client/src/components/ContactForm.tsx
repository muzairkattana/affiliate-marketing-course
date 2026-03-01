import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MessageSquare, Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError("");
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError("Name is required");
      return false;
    }
    if (!formData.email.trim()) {
      setError("Email is required");
      return false;
    }
    if (!formData.message.trim()) {
      setError("Message is required");
      return false;
    }
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError("Please enter a valid email address");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setError("");

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real app, you would send the data to your backend
      console.log("Form submitted:", formData);
      
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const subjects = [
    "General Inquiry",
    "Technical Support",
    "Partnership",
    "Feedback",
    "Report Issue"
  ];

  if (isSubmitted) {
    return (
      <Card className="p-6 sm:p-8 text-center bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-2">Message Sent Successfully!</h3>
        <p className="text-green-600 mb-6 text-sm sm:text-base">
          Thank you for contacting us. We'll get back to you within 24 hours.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base"
        >
          Send Another Message
        </Button>
      </Card>
    );
  }

  return (
    <Card className="p-4 sm:p-6 bg-gradient-to-br from-white to-gray-50">
      <div className="flex items-center gap-3 mb-4 sm:mb-6">
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[#FF6B35] to-[#2C3E50] rounded-lg flex items-center justify-center text-white">
          <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">Get in Touch</h3>
          <p className="text-xs sm:text-sm text-gray-600">We'd love to hear from you</p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="flex items-center gap-2 sm:gap-3 p-3 bg-gray-50 rounded-lg">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF6B35]/10 rounded-full flex items-center justify-center">
            <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-[#FF6B35]" />
          </div>
          <div className="min-w-0">
            <p className="text-xs sm:text-sm font-medium text-gray-900">Email</p>
            <p className="text-xs text-gray-600 truncate">info@darazguide.com</p>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 p-3 bg-gray-50 rounded-lg">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF6B35]/10 rounded-full flex items-center justify-center">
            <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-[#FF6B35]" />
          </div>
          <div className="min-w-0">
            <p className="text-xs sm:text-sm font-medium text-gray-900">Phone</p>
            <p className="text-xs text-gray-600 truncate">+92 300 1234567</p>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 p-3 bg-gray-50 rounded-lg">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF6B35]/10 rounded-full flex items-center justify-center">
            <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 text-[#FF6B35]" />
          </div>
          <div className="min-w-0">
            <p className="text-xs sm:text-sm font-medium text-gray-900">Response Time</p>
            <p className="text-xs text-gray-600 truncate">Within 24 hours</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <Label htmlFor="name" className="text-xs sm:text-sm font-medium text-gray-700">
              Name *
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your full name"
              className="mt-1 text-sm sm:text-base"
              required
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-xs sm:text-sm font-medium text-gray-700">
              Email *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your@email.com"
              className="mt-1 text-sm sm:text-base"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <Label htmlFor="phone" className="text-xs sm:text-sm font-medium text-gray-700">
              Phone
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+92 300 1234567"
              className="mt-1 text-sm sm:text-base"
            />
          </div>
          <div>
            <Label htmlFor="subject" className="text-xs sm:text-sm font-medium text-gray-700">
              Subject
            </Label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent text-sm sm:text-base"
            >
              <option value="">Select a subject</option>
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <Label htmlFor="message" className="text-xs sm:text-sm font-medium text-gray-700">
            Message *
          </Label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Tell us how we can help you..."
            rows={4}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent resize-none text-sm sm:text-base"
            required
          />
        </div>

        {/* Error Display */}
        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-500" />
            <span className="text-sm text-red-600">{error}</span>
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-[#FF6B35] to-[#2C3E50] hover:from-[#E55A2B] hover:to-[#34495E] text-white font-semibold py-3 sm:py-4 text-sm sm:text-base touch-manipulation-adjustment"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent border-b-transparent animate-spin rounded-full"></div>
              <span className="text-sm sm:text-base">Sending...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2">
              <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">Send Message</span>
            </div>
          )}
        </Button>
      </form>

      {/* Privacy Note */}
      <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
        <p className="text-xs text-gray-500 text-center">
          We respect your privacy. Your information will never be shared with third parties.
        </p>
      </div>
    </Card>
  );
}
