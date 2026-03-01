import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, X, Filter, TrendingUp, BookOpen, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  link: string;
  type: 'content' | 'tool' | 'section';
}

const searchDatabase: SearchResult[] = [
  // Content Sections
  {
    id: 'hero',
    title: 'Home - Hero Section',
    description: 'Main landing page with introduction and call-to-action buttons',
    category: 'Content',
    link: '#hero',
    type: 'content'
  },
  {
    id: 'modules',
    title: 'Training Modules',
    description: '11 comprehensive training modules covering mindset, technical setup, niche selection, and more',
    category: 'Content',
    link: '#modules',
    type: 'content'
  },
  {
    id: 'tools',
    title: 'Interactive Tools',
    description: 'Commission calculator, product research, progress tracker, success metrics, and more tools',
    category: 'Content',
    link: '#tools',
    type: 'content'
  },
  {
    id: 'checklist',
    title: 'Quick Start Guide',
    description: '30-day action plan to launch your Daraz affiliate business',
    category: 'Content',
    link: '#checklist',
    type: 'content'
  },
  {
    id: 'mistakes',
    title: 'Common Mistakes',
    description: 'Common mistakes to avoid in affiliate marketing',
    category: 'Content',
    link: '#mistakes',
    type: 'content'
  },
  {
    id: 'cta',
    title: 'Get Started',
    description: 'Call-to-action section to begin your journey',
    category: 'Content',
    link: '#cta',
    type: 'content'
  },
  {
    id: 'faq',
    title: 'FAQ Section',
    description: 'Frequently asked questions about Daraz affiliate marketing',
    category: 'Content',
    link: '#faq',
    type: 'content'
  },
  // Tools
  {
    id: 'calculator',
    title: 'Commission Calculator',
    description: 'Calculate potential earnings based on product category and sales volume',
    category: 'Tool',
    link: '#tools',
    type: 'tool'
  },
  {
    id: 'research',
    title: 'Product Research Tool',
    description: 'Find trending products with high commission rates and demand',
    category: 'Tool',
    link: '#tools',
    type: 'tool'
  },
  {
    id: 'progress',
    title: 'Progress Tracker',
    description: 'Track your learning progress and milestones',
    category: 'Tool',
    link: '#tools',
    type: 'tool'
  },
  {
    id: 'metrics',
    title: 'Success Metrics',
    description: 'Income projections and success milestones',
    category: 'tool',
    link: '#tools',
    type: 'tool'
  },
  {
    id: 'workflow',
    title: 'Success Workflow',
    description: 'Step-by-step guide for beginners',
    category: 'Tool',
    link: '#tools',
    type: 'tool'
  },
  {
    id: 'platforms',
    title: 'Platform Links Hub',
    description: 'Essential platforms and resources for affiliates',
    category: 'Tool',
    link: '#tools',
    type: 'tool'
  }
];

export default function SearchComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (searchQuery: string) => {
    setIsSearching(true);
    const filteredResults = searchDatabase.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    // Simulate search delay
    setTimeout(() => {
      setResults(filteredResults);
      setIsSearching(false);
    }, 300);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    if (value.trim()) {
      handleSearch(value);
    } else {
      setResults([]);
    }
  };

  const handleResultClick = (result: SearchResult) => {
    // Close search and navigate to the result
    setIsOpen(false);
    setQuery("");
    setResults([]);
    
    // Navigate to the section
    const element = document.getElementById(result.link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const clearSearch = () => {
    setQuery("");
    setResults([]);
  };

  const popularSearches = [
    "commission calculator",
    "product research",
    "beginner guide",
    "success stories",
    "FAQ",
    "niche selection"
  ];

  return (
    <div className="relative">
      {/* Search Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-4 z-50 bg-[#FF6B35] hover:bg-[#E55A2B] text-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/50 touch-manipulation-adjustment"
        aria-label="Search"
      >
        <Search className="w-5 h-5 sm:w-6 sm:h-6" />
      </Button>

      {/* Search Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
          <div className="fixed inset-4 sm:inset-8 md:inset-12 md:max-w-2xl bg-white rounded-xl shadow-2xl" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[#FF6B35] to-[#2C3E50] rounded-lg flex items-center justify-center text-white">
                  <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">Search Guide</h2>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg touch-manipulation-adjustment"
                aria-label="Close search"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>

            {/* Search Input */}
            <div className="p-4 sm:p-6 border-b border-gray-200">
              <div className="relative">
                <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <Input
                  type="text"
                  placeholder="Search for modules, tools, or topics..."
                  value={query}
                  onChange={handleInputChange}
                  className="pl-10 sm:pl-12 pr-4 sm:pr-4 py-3 text-sm sm:text-base"
                  autoFocus
                  aria-label="Search"
                />
                {query && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearSearch}
                    className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded touch-manipulation-adjustment"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                )}
              </div>

              {/* Popular Searches */}
              {!query && (
                <div className="flex flex-wrap gap-2 pt-3 sm:pt-4">
                  {popularSearches.map((term) => (
                    <Button
                      key={term}
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setQuery(term);
                        handleSearch(term);
                      }}
                      className="text-xs sm:text-sm px-3 py-1.5 touch-manipulation-adjustment"
                    >
                      {term}
                    </Button>
                  ))}
                </div>
              )}
            </div>

            {/* Search Results */}
            <div className="max-h-64 sm:max-h-96 overflow-y-auto p-4 sm:p-6">
              {isSearching ? (
                <div className="flex flex-col items-center justify-center py-8">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 border-4 border-[#FF6B35] border-t-transparent border-b-transparent animate-spin rounded-full"></div>
                  <p className="text-gray-500 mt-4 text-sm sm:text-base">Searching...</p>
                </div>
              ) : results.length > 0 ? (
                <div className="space-y-3 sm:space-y-4">
                  {results.map((result) => (
                    <Card
                      key={result.id}
                      className="p-3 sm:p-4 hover:bg-gray-50 cursor-pointer transition-colors touch-manipulation-adjustment"
                      onClick={() => handleResultClick(result)}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          {result.type === 'content' && <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />}
                          {result.type === 'tool' && <Target className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />}
                          {result.type === 'section' && <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-gray-900 text-sm sm:text-base line-clamp-1">{result.title}</h3>
                            <Badge variant="outline" className="text-xs">
                              {result.category}
                            </Badge>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">{result.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : query && (
                <div className="text-center py-8">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <Search className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
                  </div>
                  <p className="text-gray-500 text-sm sm:text-base">No results found for "{query}"</p>
                  <p className="text-xs sm:text-sm text-gray-400 mt-2">
                    Try searching for: {popularSearches.join(", ")}
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-3 sm:p-4 border-t border-gray-200 bg-gray-50">
              <p className="text-center text-xs sm:text-sm text-gray-600">
                Press <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">ESC</kbd> to close • 
                Use arrow keys to navigate
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
