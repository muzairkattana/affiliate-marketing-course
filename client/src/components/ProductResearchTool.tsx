import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, TrendingUp, Star, Package } from "lucide-react";
import { useState } from "react";

const trendingProducts = [
  {
    name: "Wireless Earbuds T500",
    category: "Electronics",
    price: "2,499",
    commission: "6%",
    demand: "High",
    rating: 4.5,
    trend: "↑ 25%"
  },
  {
    name: "Smart Watch W12",
    category: "Electronics", 
    price: "8,999",
    commission: "6%",
    demand: "Very High",
    rating: 4.7,
    trend: "↑ 40%"
  },
  {
    name: "Air Fryer 5L",
    category: "Home Appliances",
    price: "12,499",
    commission: "8%",
    demand: "High",
    rating: 4.6,
    trend: "↑ 15%"
  },
  {
    name: "Yoga Mat Premium",
    category: "Sports",
    price: "1,899",
    commission: "5%",
    demand: "Medium",
    rating: 4.4,
    trend: "↑ 10%"
  },
  {
    name: "Skincare Set Vitamin C",
    category: "Beauty",
    price: "3,499",
    commission: "6%",
    demand: "Very High",
    rating: 4.8,
    trend: "↑ 35%"
  }
];

const categories = [
  "All Categories",
  "Electronics",
  "Fashion",
  "Home Appliances", 
  "Beauty",
  "Sports",
  "Kitchen",
  "Books"
];

export default function ProductResearchTool() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All Categories");
  const [priceRange, setPriceRange] = useState<string>("all");

  const filteredProducts = trendingProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || product.category === selectedCategory;
    
    let matchesPrice = true;
    if (priceRange === "low") matchesPrice = parseFloat(product.price.replace(",", "")) < 5000;
    else if (priceRange === "medium") matchesPrice = parseFloat(product.price.replace(",", "")) >= 5000 && parseFloat(product.price.replace(",", "")) < 15000;
    else if (priceRange === "high") matchesPrice = parseFloat(product.price.replace(",", "")) >= 15000;
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const getDemandColor = (demand: string) => {
    switch(demand) {
      case "Very High": return "bg-red-100 text-red-800";
      case "High": return "bg-orange-100 text-orange-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const calculateCommission = (price: string, commission: string) => {
    const priceNum = parseFloat(price.replace(",", ""));
    const commissionRate = parseFloat(commission.replace("%", ""));
    return (priceNum * commissionRate / 100).toLocaleString();
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-white to-[#F8F9FA] border-l-4 border-l-[#27AE60]">
      <div className="flex items-center gap-3 mb-6">
        <Search className="w-6 h-6 text-[#27AE60]" />
        <h3 className="text-xl font-bold text-[#2C3E50]">Product Research Tool</h3>
      </div>

      <div className="grid sm:grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
        <div className="lg:col-span-2">
          <Label htmlFor="search" className="text-sm font-medium text-gray-700">
            Search Products
          </Label>
          <div className="relative mt-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              id="search"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-11 touch-target"
              placeholder="Search for products..."
            />
          </div>
        </div>

        <div>
          <Label htmlFor="category" className="text-sm font-medium text-gray-700">
            Category
          </Label>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="mt-1 h-11 touch-target">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="price" className="text-sm font-medium text-gray-700">
            Price Range
          </Label>
          <Select value={priceRange} onValueChange={setPriceRange}>
            <SelectTrigger className="mt-1 h-11 touch-target">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Prices</SelectItem>
              <SelectItem value="low">Under PKR 5,000</SelectItem>
              <SelectItem value="medium">PKR 5,000-15,000</SelectItem>
              <SelectItem value="high">Above PKR 15,000</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-3">
        {filteredProducts.map((product, idx) => (
          <Card key={idx} className="p-3 sm:p-4 hover:shadow-md transition-shadow border border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <Package className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6B35] flex-shrink-0" />
                  <h4 className="font-semibold text-[#2C3E50] text-sm sm:text-base line-clamp-2">{product.name}</h4>
                </div>
                <div className="mb-2">
                  <Badge className={`${getDemandColor(product.demand)} text-xs`}>
                    {product.demand} Demand
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
                  <div>
                    <span className="text-gray-500">Price:</span>
                    <p className="font-semibold text-gray-900">PKR {product.price}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Commission:</span>
                    <p className="font-semibold text-[#27AE60]">{product.commission}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Per Sale:</span>
                    <p className="font-semibold text-[#FF6B35]">PKR {calculateCommission(product.price, product.commission)}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Rating:</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current" />
                      <span className="font-semibold">{product.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex sm:flex-col items-center sm:items-end gap-2 sm:gap-0 sm:text-right">
                <div className="flex items-center gap-1 text-green-600 font-semibold text-xs sm:text-sm">
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{product.trend}</span>
                </div>
                <Button size="sm" className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white mobile-button text-xs sm:text-sm">
                  View Details
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-6 p-3 sm:p-4 bg-blue-50 border-l-4 border-l-blue-400 rounded">
        <p className="text-xs sm:text-sm text-gray-700">
          <strong>Pro Tip:</strong> Focus on products with "Very High" demand and upward trends. 
          These typically have higher conversion rates and better customer satisfaction. 
          Update your research weekly to stay ahead of market trends.
        </p>
      </div>
    </Card>
  );
}
