import type { Metadata } from "next"
import { Target, TrendingUp, Users, BarChart3, Zap, Shield, Layers, Globe, Clock, Smartphone } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Features - Promotional Campaign Tools | Quokka Marketing Solutions",
  description:
    "Explore our comprehensive promotional campaign features: advanced targeting, ROI optimization, analytics, automation, and more. Drive conversions with performance-based marketing.",
  keywords:
    "promotional campaigns, conversion optimization, marketing automation, ROI analytics, B2B marketing tools, campaign management",
}

const mainFeatures = [
  {
    icon: Target,
    title: "Advanced Targeting & Segmentation",
    description: "Precision audience targeting with AI-powered segmentation to reach your ideal customers.",
    features: ["Behavioral targeting", "Demographic filters", "Lookalike audiences", "Custom segments"],
    color: "text-pink-600",
    bgColor: "bg-pink-50",
  },
  {
    icon: TrendingUp,
    title: "Real-Time ROI Optimization",
    description: "Continuous campaign optimization using machine learning to maximize your return on investment.",
    features: ["Auto-bidding", "Budget allocation", "Performance tracking", "Predictive analytics"],
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: BarChart3,
    title: "Comprehensive Analytics Dashboard",
    description: "Deep insights and actionable analytics to understand campaign performance and customer behavior.",
    features: ["Custom reports", "Attribution modeling", "Conversion tracking", "Cohort analysis"],
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Zap,
    title: "Marketing Automation",
    description: "Streamlined workflows and automated campaign management to scale your marketing efforts.",
    features: ["Workflow builder", "Trigger campaigns", "Lead nurturing", "Email sequences"],
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
  },
  {
    icon: Users,
    title: "Lead Generation & Scoring",
    description: "Intelligent lead capture and scoring system to identify and prioritize high-value prospects.",
    features: ["Lead scoring", "Form optimization", "Progressive profiling", "CRM sync"],
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Shield,
    title: "Enterprise Security & Compliance",
    description: "Bank-level security with full compliance to protect your data and maintain trust.",
    features: ["GDPR compliance", "Data encryption", "SSO integration", "Audit logs"],
    color: "text-gray-600",
    bgColor: "bg-gray-50",
  },
]

const additionalFeatures = [
  {
    icon: Layers,
    title: "Multi-Channel Campaigns",
    description: "Orchestrate campaigns across email, social, web, and mobile channels from one platform.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Launch campaigns in multiple languages and regions with localized content and targeting.",
  },
  {
    icon: Clock,
    title: "24/7 Monitoring",
    description: "Continuous campaign monitoring with real-time alerts and automatic optimization.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Responsive campaigns optimized for mobile devices and cross-platform performance.",
  },
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-pink-100 text-pink-700">Features Overview</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need for <span className="text-gradient">Successful Campaigns</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive promotional campaign tools designed to drive conversions, optimize ROI, and scale your B2B
              marketing efforts with precision and intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {mainFeatures.map((feature, index) => (
              <Card key={index} className="card-hover border-0 shadow-lg">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4`}>
                    <feature.icon size={32} className={feature.color} />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-lg leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {feature.features.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${feature.color.replace("text-", "bg-")}`}></div>
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-pink-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">See Our Features in Action</h2>
            <p className="text-xl text-pink-100 max-w-2xl mx-auto">
              Experience the power of our promotional campaign platform with an interactive demo.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="aspect-video bg-white/20 rounded-lg flex items-center justify-center mb-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-lg font-medium">Interactive Campaign Dashboard Demo</p>
              </div>
            </div>

            <div className="text-center">
              <Button className="bg-white text-pink-600 hover:bg-pink-50 font-semibold px-8 py-3">
                Launch Interactive Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">More Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Additional capabilities that make our platform the complete solution for promotional campaigns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="card-hover border-0 shadow-md bg-white">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon size={24} className="text-pink-600" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Seamless Integrations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with your existing tools and workflows for a unified marketing ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[
              "Salesforce",
              "HubSpot",
              "Mailchimp",
              "Zapier",
              "Google Analytics",
              "Facebook Ads",
              "LinkedIn Ads",
              "Slack",
              "Microsoft Teams",
              "Zoom",
              "Calendly",
              "Stripe",
            ].map((integration, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                <div className="h-12 flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-700">{integration}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-pink-200 text-pink-600 hover:bg-pink-50 bg-transparent">
              View All Integrations
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Experience These Features?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start your free trial today and see how our promotional campaign features can transform your marketing
            results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary px-8 py-3">Start Free Trial</Button>
            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3 bg-transparent">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
