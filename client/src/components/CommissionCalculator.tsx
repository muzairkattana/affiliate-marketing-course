import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, TrendingUp } from "lucide-react";
import { useState } from "react";

const commissionRates = {
  "electronics": 6,
  "fashion": 5,
  "home-appliances": 8,
  "beauty": 6,
  "books": 4,
  "sports": 5,
  "kitchen": 4,
  "pet-supplies": 5
};

export default function CommissionCalculator() {
  const [productPrice, setProductPrice] = useState<string>("10000");
  const [category, setCategory] = useState<string>("electronics");
  const [monthlySales, setMonthlySales] = useState<string>("10");
  const [conversionRate, setConversionRate] = useState<string>("2");

  const commissionRate = commissionRates[category as keyof typeof commissionRates] || 5;
  const price = parseFloat(productPrice) || 0;
  const sales = parseFloat(monthlySales) || 0;
  const convRate = parseFloat(conversionRate) || 0;

  const commissionPerSale = (price * commissionRate) / 100;
  const monthlyCommission = commissionPerSale * sales;
  const monthlyClicks = sales / (convRate / 100);
  const yearlyCommission = monthlyCommission * 12;

  return (
    <Card className="p-6 bg-gradient-to-br from-white to-[#F8F9FA] border-l-4 border-l-[#FF6B35]">
      <div className="flex items-center gap-3 mb-6">
        <Calculator className="w-6 h-6 text-[#FF6B35]" />
        <h3 className="text-xl font-bold text-[#2C3E50]">Commission Calculator</h3>
      </div>

      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="price" className="text-sm font-medium text-gray-700">
              Product Price (PKR)
            </Label>
            <Input
              id="price"
              type="number"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              className="mt-1 h-11 touch-target"
              placeholder="10000"
            />
          </div>

          <div>
            <Label htmlFor="category" className="text-sm font-medium text-gray-700">
              Product Category
            </Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="mt-1 h-11 touch-target">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="electronics">Electronics (6%)</SelectItem>
                <SelectItem value="fashion">Fashion & Apparel (5%)</SelectItem>
                <SelectItem value="home-appliances">Home Appliances (8%)</SelectItem>
                <SelectItem value="beauty">Beauty & Personal Care (6%)</SelectItem>
                <SelectItem value="books">Books & Education (4%)</SelectItem>
                <SelectItem value="sports">Sports & Fitness (5%)</SelectItem>
                <SelectItem value="kitchen">Kitchen & Dining (4%)</SelectItem>
                <SelectItem value="pet-supplies">Pet Supplies (5%)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="sales" className="text-sm font-medium text-gray-700">
              Monthly Sales (units)
            </Label>
            <Input
              id="sales"
              type="number"
              value={monthlySales}
              onChange={(e) => setMonthlySales(e.target.value)}
              className="mt-1 h-11 touch-target"
              placeholder="10"
            />
          </div>

          <div>
            <Label htmlFor="conversion" className="text-sm font-medium text-gray-700">
              Conversion Rate (%)
            </Label>
            <Input
              id="conversion"
              type="number"
              step="0.1"
              value={conversionRate}
              onChange={(e) => setConversionRate(e.target.value)}
              className="mt-1 h-11 touch-target"
              placeholder="2"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-[#E8F5E8] p-3 sm:p-4 rounded-lg">
            <p className="text-xs sm:text-sm text-gray-600 mb-1">Commission per Sale</p>
            <p className="text-lg sm:text-2xl font-bold text-[#27AE60]">
              PKR {commissionPerSale.toLocaleString()}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {commissionRate}% of PKR {price.toLocaleString()}
            </p>
          </div>

          <div className="bg-[#FFF3E0] p-3 sm:p-4 rounded-lg">
            <p className="text-xs sm:text-sm text-gray-600 mb-1">Monthly Commission</p>
            <p className="text-lg sm:text-2xl font-bold text-[#FF6B35]">
              PKR {monthlyCommission.toLocaleString()}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              From {sales} sales at {convRate}% conversion
            </p>
          </div>

          <div className="bg-[#E3F2FD] p-3 sm:p-4 rounded-lg">
            <p className="text-xs sm:text-sm text-gray-600 mb-1">Required Monthly Clicks</p>
            <p className="text-lg sm:text-2xl font-bold text-[#2C3E50]">
              {Math.round(monthlyClicks).toLocaleString()}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Based on {convRate}% conversion rate
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#2C3E50] to-[#FF6B35] p-3 sm:p-4 rounded-lg text-white">
            <p className="text-xs sm:text-sm text-white/90 mb-1">Yearly Projection</p>
            <p className="text-lg sm:text-2xl font-bold">
              PKR {yearlyCommission.toLocaleString()}
            </p>
            <p className="text-xs text-white/80 mt-1">
              Potential annual income
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 p-3 sm:p-4 bg-[#FEF5F5] border-l-4 border-l-[#E74C3C] rounded">
        <p className="text-xs sm:text-sm text-gray-700">
          <strong>Note:</strong> These are estimates. Actual earnings depend on product availability, 
          seasonal demand, and Daraz's commission rate changes. Focus on building consistent traffic 
          and optimizing conversion rates.
        </p>
      </div>
    </Card>
  );
}
