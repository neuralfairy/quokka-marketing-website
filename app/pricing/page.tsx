import type { Metadata } from "next"
import { Check, X, Star, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Pricing Plans - Promotional Campaign Solutions | Quokka Marketing Solutions",
  description:
    "Transparent pricing for promotional campaign management. Choose from Starter, Professional, or Enterprise plans. 14-day free trial available.",
  keywords:
    "promotional campaign pricing, marketing automation pricing, B2B marketing costs, campaign management plans",
}

const plans = [
  {
    name: "Starter",
    price: 299,
    description: "Perfect for small businesses getting started with promotional campaigns",
    badge: null,
    features: [
      { name: "Up to 5,000 contacts", included: true },
      { name: "Basic campaign templates", included: true },
      { name: "Email & social campaigns", included: true },
      { name: "Basic analytics dashboard", included: true },
      { name: "Standard integrations", included: true },
      { name: "Email support", included: true },
      { name: "Advanced targeting", included: false },
      { name: "A/B testing", included: false },
      { name: "Custom reporting", included: false },
      { name: "Priority support", included: false },
      { name: "Dedicated account manager", included: false },
      { name: "Custom integrations", included: false },
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: 799,
    description: "Advanced features for growing businesses and marketing teams",
    badge: "Most Popular",
    features: [
      { name: "Up to 25,000 contacts", included: true },
      { name: "Advanced campaign builder", included: true },
      { name: "Multi-channel campaigns", included: true },
      { name: "Advanced analytics & reporting", included: true },
      { name: "All integrations included", included: true },
      { name: "Priority email & chat support", included: true },
      { name: "Advanced targeting & segmentation", included: true },
      { name: "A/B testing & optimization", included: true },
      { name: "Custom reporting & dashboards", included: true },
      { name: "Lead scoring & nurturing", included: true },
      { name: "Dedicated account manager", included: false },
      { name: "Custom integrations", included: false },
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large organizations with complex needs",
    badge: "Best Value",
    features: [
      { name: "Unlimited contacts", included: true },
      { name: "Custom campaign solutions", included: true },
      { name: "Omnichannel campaign orchestration", included: true },
      { name: "Enterprise analytics & BI", included: true },
      { name: "Custom integrations & API access", included: true },
      { name: "24/7 phone & priority support", included: true },
      { name: "AI-powered targeting & optimization", included: true },
      { name: "Advanced testing & personalization", included: true },
      { name: "White-label reporting", included: true },
      { name: "Advanced lead management", included: true },
      { name: "Dedicated customer success manager", included: true },
      { name: "Custom development & training", included: true },
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

const faqs = [
  {
    question: "What's included in the free trial?",
    answer:
      "The 14-day free trial includes full access to all features in the Professional plan, up to 1,000 contacts, and email support. No credit card required.",
  },
  {
    question: "Can I change plans at any time?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments.",
  },
  {
    question: "What happens if I exceed my contact limit?",
    answer:
      "We'll notify you when you approach your limit. You can upgrade your plan or we'll temporarily pause new contact additions until the next billing cycle.",
  },
  {
    question: "Do you offer custom pricing for large organizations?",
    answer:
      "Yes, our Enterprise plan includes custom pricing based on your specific needs, contact volume, and required features. Contact our sales team for a quote.",
  },
  {
    question: "What integrations are included?",
    answer:
      "We offer 50+ integrations including Salesforce, HubSpot, Mailchimp, Google Analytics, and more. Enterprise plans include custom integrations and API access.",
  },
  {
    question: "Is there a setup fee?",
    answer:
      "No setup fees for Starter and Professional plans. Enterprise customers receive complimentary onboarding and setup assistance.",
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-pink-100 text-pink-700">Transparent Pricing</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Choose the Perfect Plan for <span className="text-gradient">Your Business</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Start with our 14-day free trial. No credit card required. Scale your promotional campaigns with
              transparent, flexible pricing.
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <div className="bg-white rounded-lg p-1 shadow-sm border border-gray-200">
              <div className="flex items-center">
                <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-pink-100 text-pink-700 rounded-md">
                  Monthly
                </button>
                <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
                  Annual (Save 20%)
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? "ring-2 ring-pink-500 shadow-2xl scale-105" : "shadow-lg"} border-0`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-pink-600 text-white px-4 py-1">{plan.badge}</Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    {typeof plan.price === "number" ? (
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                        <span className="text-gray-500 ml-2">/month</span>
                      </div>
                    ) : (
                      <div className="text-4xl font-bold text-gray-900">{plan.price}</div>
                    )}
                  </div>
                  <CardDescription className="text-gray-600 leading-relaxed">{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features List */}
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        {feature.included ? (
                          <Check size={16} className="text-green-600 flex-shrink-0" />
                        ) : (
                          <X size={16} className="text-gray-400 flex-shrink-0" />
                        )}
                        <span className={`text-sm ${feature.included ? "text-gray-700" : "text-gray-400"}`}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button className={`w-full py-3 ${plan.popular ? "btn-primary" : "btn-secondary"}`}>
                    {plan.cta}
                  </Button>

                  {/* Additional Info */}
                  <div className="text-center text-xs text-gray-500">
                    {plan.name !== "Enterprise" && "14-day free trial • No credit card required"}
                    {plan.name === "Enterprise" && "Custom onboarding included"}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enterprise Features */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Enterprise Features & Benefits</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Zap size={24} className="text-pink-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Custom Development</h4>
                <p className="text-sm text-gray-600">Tailored features and integrations</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Star size={24} className="text-pink-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Dedicated Support</h4>
                <p className="text-sm text-gray-600">24/7 priority support team</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Check size={24} className="text-pink-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">SLA Guarantee</h4>
                <p className="text-sm text-gray-600">99.9% uptime guarantee</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Star size={24} className="text-pink-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Training & Onboarding</h4>
                <p className="text-sm text-gray-600">Comprehensive team training</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about our pricing and plans.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Button variant="outline" className="border-pink-200 text-pink-600 hover:bg-pink-50 bg-transparent">
              Contact Our Sales Team
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-pink-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Join 500+ companies already using Quokka Marketing to drive their promotional campaign success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-pink-600 hover:bg-pink-50 font-semibold px-8 py-3">
              Start Free Trial
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 bg-transparent">
              Schedule Demo
            </Button>
          </div>
          <div className="mt-6 text-pink-200 text-sm">14-day free trial • No credit card required • Cancel anytime</div>
        </div>
      </section>
    </div>
  )
}
