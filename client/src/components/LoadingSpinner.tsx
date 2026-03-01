import { Loader2, TrendingUp, BookOpen, Target } from "lucide-react";
import { useState, useEffect } from "react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  text?: string;
}

export const LoadingSpinner = ({ 
  size = "md", 
  className = "", 
  text = "Loading..." 
}: LoadingSpinnerProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const loadingSteps = [
    { icon: BookOpen, text: "Preparing your learning journey" },
    { icon: Target, text: "Analyzing market opportunities" },
    { icon: TrendingUp, text: "Optimizing success strategies" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % loadingSteps.length);
    }, 600);

    return () => clearInterval(interval);
  }, []);

  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6", 
    lg: "w-10 h-10"
  };

  const textSizeClasses = {
    sm: "text-xs",
    md: "text-sm", 
    lg: "text-lg"
  };

  const iconSizeClasses = {
    sm: "w-3 h-3",
    md: "w-5 h-5", 
    lg: "w-8 h-8"
  };

  const CurrentIcon = loadingSteps[currentStep].icon;

  return (
    <div className={`flex flex-col items-center justify-center gap-4 ${className}`} role="status" aria-live="polite">
      {/* Main Loading Spinner */}
      <div className="relative">
        <Loader2 className={`animate-spin ${sizeClasses[size]} text-[#FF6B35]`} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </div>
      
      {/* Dynamic Loading Text */}
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-2">
          <CurrentIcon className={`${iconSizeClasses[size]} text-[#2C3E50] animate-pulse`} />
          <span className={`${textSizeClasses[size]} text-[#2C3E50] font-medium text-center px-4`}>
            {loadingSteps[currentStep].text}
          </span>
        </div>
        
        {/* Progress Dots */}
        <div className="flex gap-1.5">
          {loadingSteps.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                index === currentStep 
                  ? "bg-[#FF6B35] w-4" 
                  : "bg-gray-300"
              }`}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
      
      {/* Professional Tagline */}
      <div className="text-center mt-2">
        <p className="text-xs text-gray-500 font-light">
          Daraz Affiliate Marketing Guide Pakistan
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Professional Education for Digital Entrepreneurs
        </p>
      </div>
    </div>
  );
};
