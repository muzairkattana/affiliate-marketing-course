import { Loader2 } from "lucide-react";

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
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6", 
    lg: "w-8 h-8"
  };

  const textClasses = {
    sm: "text-xs",
    md: "text-sm", 
    lg: "text-base"
  };

  return (
    <div className={`flex flex-col items-center justify-center gap-2 sm:gap-3 ${className}`} role="status" aria-live="polite">
      <Loader2 className={`animate-spin ${sizeClasses[size]}`} />
      {text && <span className={`${textClasses[size]} text-gray-600 text-center px-4`}>{text}</span>}
    </div>
  );
};
