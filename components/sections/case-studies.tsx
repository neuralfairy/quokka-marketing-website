import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp } from "lucide-react"

const caseStudies = [
  {
    company: "TechFlow Solutions",
    industry: "SaaS",
    challenge: "Low conversion rates on landing pages",
    solution: "Implemented A/B testing and personalized campaigns",
    results: {
      conversionIncrease: "245%",
      revenueGrowth: "$2.3M",
      timeframe: "6 months",
    },
    metrics: [
      { label: "Conversion Rate", before: "1.2%", after: "4.1%" },
      { label: "Cost per Lead", before: "$180", after: "$52" },
      { label: "Monthly Leads", before: "450", after: "1,850" },
    ],
  },
  {
    company: "GrowthCorp",
    industry: "E-commerce",
    challenge: "High customer acquisition costs",
    solution: "Optimized promotional campaigns with advanced targeting",
    results: {
      conversionIncrease: "180%",
      revenueGrowth: "$1.8M",
      timeframe: "4 months",
    },
    metrics: [
      { label: "CAC Reduction", before: "$95", after: "$34" },
      { label: "ROAS", before: "2.1x", after: "5.8x" },
      { label: "Monthly Revenue", before: "$180K", after: "$505K" },
    ],
  },
  {
    company: "InnovateLab",
    industry: "B2B Services",
    challenge: "Poor lead quality and low sales conversion",
    solution: "Implemented lead scoring and nurturing campaigns",
    results: {
      conversionIncrease: "320%",
      revenueGrowth: "$3.1M",
      timeframe: "8 months",
    },
    metrics: [
      { label: "Lead Quality Score", before: "2.3/10", after: "8.7/10" },
      { label: "Sales Conversion", before: "8%", after: "34%" },
      { label: "Pipeline Value", before: "$850K", after: "$3.6M" },
    ],
  },
]

export function CaseStudies() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Real Results from <span className="text-gradient">Real Clients</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our promotional campaign strategies have transformed businesses across industries.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="card-hover border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="bg-pink-100 text-pink-700">
                    {study.industry}
                  </Badge>
                  <div className="flex items-center space-x-1 text-green-600">
                    <TrendingUp size={16} />
                    <span className="text-sm font-medium">+{study.results.conversionIncrease}</span>
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">{study.company}</CardTitle>
                <CardDescription className="text-gray-600">{study.challenge}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Solution */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Solution</h4>
                  <p className="text-sm text-gray-600">{study.solution}</p>
                </div>

                {/* Key Results */}
                <div className="bg-gradient-to-r from-pink-50 to-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3">Key Results</h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <div className="font-semibold text-pink-600">{study.results.conversionIncrease}</div>
                      <div className="text-gray-600">Conversion Increase</div>
                    </div>
                    <div>
                      <div className="font-semibold text-green-600">{study.results.revenueGrowth}</div>
                      <div className="text-gray-600">Revenue Growth</div>
                    </div>
                  </div>
                  <div className="mt-3 text-xs text-gray-500">Achieved in {study.results.timeframe}</div>
                </div>

                {/* Detailed Metrics */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Performance Metrics</h4>
                  <div className="space-y-2">
                    {study.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">{metric.label}:</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-400">{metric.before}</span>
                          <span className="text-gray-400">→</span>
                          <span className="font-semibold text-green-600">{metric.after}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Ready to achieve similar results for your business?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">View All Case Studies</button>
            <button className="btn-secondary">Schedule Strategy Call</button>
          </div>
        </div>
      </div>
    </section>
  )
}
