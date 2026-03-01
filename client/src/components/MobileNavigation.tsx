import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Menu, 
  X, 
  Home, 
  Calculator, 
  Search, 
  Target, 
  BarChart3, 
  Rocket,
  Link2
} from 'lucide-react';
import { Logo, LogoIcon } from '@/components/Logo';

interface MobileNavigationProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export const MobileNavigation = ({ activeTab = 'home', onTabChange }: MobileNavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Home, description: 'Go to homepage' },
    { id: 'workflow', label: 'Workflow', icon: Rocket, description: 'View success workflow' },
    { id: 'platforms', label: 'Platforms', icon: Link2, description: 'Platform links hub' },
    { id: 'calculator', label: 'Calculator', icon: Calculator, description: 'Commission calculator' },
    { id: 'research', label: 'Research', icon: Search, description: 'Product research tool' },
  ];

  const handleTabChange = (tabId: string) => {
    onTabChange?.(tabId);
    setIsOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200" role="navigation" aria-label="Mobile navigation">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-[#FF6B35] to-[#2C3E50] rounded-lg flex items-center justify-center" aria-hidden="true">
              <Home className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-gray-900">Daraz Guide</span>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] rounded"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-40 bg-black/50" 
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation Menu */}
      <div 
        className={`lg:hidden fixed top-14 left-0 right-0 z-50 bg-white border-b border-gray-200 transition-transform duration-300 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
        onKeyDown={handleKeyDown}
      >
        <div className="max-h-[70vh] overflow-y-auto">
          {/* Quick Actions */}
          <div className="p-4 border-b border-gray-100">
            <h3 id="mobile-menu-title" className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-2">
              {navigationItems.slice(0, 4).map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.id}
                    variant={activeTab === item.id ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => handleTabChange(item.id)}
                    className="justify-start gap-2 h-10 text-xs focus:outline-none focus:ring-2 focus:ring-[#FF6B35] rounded"
                    aria-label={item.description}
                  >
                    <Icon className="w-3 h-3" />
                    {item.label}
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="p-4">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Sections</h3>
            <div className="space-y-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection('hero')}
                className="w-full justify-start text-left h-8 text-xs"
              >
                🏠 Home
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection('modules')}
                className="w-full justify-start text-left h-8 text-xs"
              >
                📚 Training Modules
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection('roadmap')}
                className="w-full justify-start text-left h-8 text-xs"
              >
                🗺️ Income Roadmap
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection('tools')}
                className="w-full justify-start text-left h-8 text-xs"
              >
                🛠️ Tools & Resources
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection('checklist')}
                className="w-full justify-start text-left h-8 text-xs"
              >
                ✅ Quick Start
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection('mistakes')}
                className="w-full justify-start text-left h-8 text-xs"
              >
                ⚠️ Common Mistakes
              </Button>
            </div>
          </div>

          {/* Additional Tools */}
          <div className="p-4 border-t border-gray-100">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">More Tools</h3>
            <div className="space-y-1">
              {navigationItems.slice(4).map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.id}
                    variant={activeTab === item.id ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => handleTabChange(item.id)}
                    className="w-full justify-start gap-2 h-8 text-xs"
                  >
                    <Icon className="w-3 h-3" />
                    {item.label}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200" role="navigation" aria-label="Bottom navigation">
        <div className="grid grid-cols-5 gap-1 px-1 py-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => handleTabChange(item.id)}
                className={`flex flex-col items-center gap-1 h-12 w-full rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF6B35] rounded ${
                  isActive 
                    ? 'bg-[#FF6B35] text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                aria-label={item.description}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon className="w-4 h-4" />
                <span className="text-xs leading-none">{item.label}</span>
              </Button>
            );
          })}
        </div>
      </nav>

      {/* Mobile Content Padding */}
      <div className="lg:hidden">
        <div className="h-14" /> {/* Header padding */}
        <div className="h-20" /> {/* Bottom nav padding - increased for footer visibility */}
      </div>
    </>
  );
};
