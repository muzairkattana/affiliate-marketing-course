import { LucideProps } from "lucide-react";

export const Logo = ({ className, ...props }: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    className={className}
    {...props}
  >
    {/* Background Circle */}
    <circle cx="16" cy="16" r="16" fill="url(#gradient)" />
    
    {/* Daraz-inspired Shopping Bag */}
    <path
      d="M8 12h16l-1 10c0 1.1-.9 2-2 2H11c-1.1 0-2-.9-2-2l-1-10z"
      fill="white"
      stroke="white"
      strokeWidth="0.5"
    />
    
    {/* Bag Handle */}
    <path
      d="M10 12c0-3.3 2.7-6 6-6s6 2.7 6 6"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
    
    {/* Affiliate Symbol (Percent Sign) */}
    <circle cx="12" cy="18" r="1.5" fill="#FF6B35" />
    <circle cx="20" cy="18" r="1.5" fill="#FF6B35" />
    <path
      d="M13 17l6 2"
      stroke="#FF6B35"
      strokeWidth="2"
      strokeLinecap="round"
    />
    
    {/* Gradient Definition */}
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF6B35" />
        <stop offset="100%" stopColor="#2C3E50" />
      </linearGradient>
    </defs>
  </svg>
);

export const LogoIcon = ({ className, ...props }: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}
  >
    <circle cx="12" cy="12" r="12" fill="url(#gradient-small)" />
    <path
      d="M6 9h12l-0.75 7.5c0 0.825-.675 1.5-1.5 1.5H8.25c-0.825 0-1.5-.675-1.5-1.5L6 9z"
      fill="white"
    />
    <path
      d="M7.5 9c0-2.475 2.025-4.5 4.5-4.5s4.5 2.025 4.5 4.5"
      fill="none"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="9" cy="13.5" r="1.125" fill="#FF6B35" />
    <circle cx="15" cy="13.5" r="1.125" fill="#FF6B35" />
    <path
      d="M9.75 12.75l4.5 1.5"
      stroke="#FF6B35"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <defs>
      <linearGradient id="gradient-small" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF6B35" />
        <stop offset="100%" stopColor="#2C3E50" />
      </linearGradient>
    </defs>
  </svg>
);
