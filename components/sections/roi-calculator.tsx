"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Calculator, TrendingUp, DollarSign } from "lucide-react"

export function ROICalculator() {
  const [monthlySpend, setMonthlySpend] = useState(10000)
  const [currentConversionRate, setCurrentConversionRate] = useState(2.5)
  const [averageOrderValue, setAverageOrderValue] = useState(500)

  // Calculate potential improvements with Quokka Marketing
  const improvedConversionRate = currentConversionRate * 1.3 // 30% improvement
  const currentMonthlyRevenue = (monthlySpend / 100) * currentConversionRate * averageOrderValue
  const improvedMonthlyRevenue = (monthlySpend / 100) * improvedConversionRate * averageOrderValue
  const monthlyIncrease = improvedMonthlyRevenue - currentMonthlyRevenue
  const annualIncrease = monthlyIncrease * 12
  const roi = ((annualIncrease - monthlySpend * 0.1 * 12) / (monthlySpend * 0.1 * 12)) * 100

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Calculate Your <span className="text-gradient">Potential ROI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how much additional revenue you could generate with our promotional campaign optimization.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Form */}
          <Card className="shadow-xl border-0">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                  <Calculator size={20} className="text-pink-600" />
                </div>
                <div>
                  <CardTitle className="text-xl">ROI Calculator</CardTitle>
                  <CardDescription>Enter your current marketing metrics</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="monthly-spend">Monthly Marketing Spend ($)</Label>
                <Input
                  id="monthly-spend"
                  type="number"
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(Number(e.target.value))}
                  className="text-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="conversion-rate">Current Conversion Rate (%)</Label>
                <Input
                  id="conversion-rate"
                  type="number"
                  step="0.1"
                  value={currentConversionRate}
                  onChange={(e) => setCurrentConversionRate(Number(e.target.value))}
                  className="text-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="order-value">Average Order Value ($)</Label>
                <Input
                  id="order-value"
                  type="number"
                  value={averageOrderValue}
                  onChange={(e) => setAverageOrderValue(Number(e.target.value))}
                  className="text-lg"
                />
              </div>

              <Button className="w-full btn-primary">Get Detailed Analysis</Button>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="space-y-6">
            <Card className="shadow-lg border-0 bg-gradient-to-r from-pink-500 to-pink-600 text-white">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <TrendingUp size={24} />
                  <CardTitle className="text-xl">Projected Results</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold">{improvedConversionRate.toFixed(1)}%</div>
                    <div className="text-pink-100 text-sm">Improved Conversion Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">+30%</div>
                    <div className="text-pink-100 text-sm">Performance Increase</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <DollarSign size={24} className="text-green-600" />
                  <CardTitle className="text-xl">Revenue Impact</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Current Monthly Revenue:</span>
                    <span className="font-semibold">${currentMonthlyRevenue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Projected Monthly Revenue:</span>
                    <span className="font-semibold text-green-600">${improvedMonthlyRevenue.toLocaleString()}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-900 font-medium">Monthly Increase:</span>
                      <span className="font-bold text-green-600 text-lg">+${monthlyIncrease.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-gray-900 font-medium">Annual Increase:</span>
                      <span className="font-bold text-green-600 text-xl">+${annualIncrease.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-2">Projected ROI: {roi.toFixed(0)}%</h4>
              <p className="text-gray-600 text-sm">
                Based on industry averages and our client success data. Individual results may vary.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
