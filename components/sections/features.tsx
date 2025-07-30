import { Target, TrendingUp, Users, BarChart3, Zap, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Target,
    title: "Precision Targeting",
    description:
      "Advanced audience segmentation and targeting capabilities to reach your ideal customers with laser precision.",
    color: "text-pink-600",
  },
  {
    icon: TrendingUp,
    title: "ROI Optimization",
    description: "Real-time campaign optimization using AI-driven insights to maximize your return on investment.",
    color: "text-green-600",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Comprehensive reporting and analytics dashboard with actionable insights and performance metrics.",
    color: "text-blue-600",
  },
  {
    icon: Users,
    title: "Lead Generation",
    description:
      "Automated lead capture and nurturing systems that convert prospects into qualified sales opportunities.",
    color: "text-purple-600",
  },
  {
    icon: Zap,
    title: "Campaign Automation",
    description: "Streamlined campaign management with automated workflows and intelligent optimization.",
    color: "text-yellow-600",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with GDPR compliance, data encryption, and secure integrations.",
    color: "text-gray-600",
  },
]

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for <span className="text-gradient">Performance Marketing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to create, manage, and optimize promotional campaigns that drive real business results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover border-0 shadow-lg">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center mb-4`}>
                  <feature.icon size={24} className={feature.color} />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Integration Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Seamless Integrations with Your Favorite Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {/* Integration logos would go here */}
            <div className="h-12 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-sm font-medium text-gray-500">Salesforce</span>
            </div>
            <div className="h-12 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-sm font-medium text-gray-500">HubSpot</span>
            </div>
            <div className="h-12 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-sm font-medium text-gray-500">Mailchimp</span>
            </div>
            <div className="h-12 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-sm font-medium text-gray-500">Zapier</span>
            </div>
            <div className="h-12 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-sm font-medium text-gray-500">Slack</span>
            </div>
            <div className="h-12 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-sm font-medium text-gray-500">Google Ads</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
