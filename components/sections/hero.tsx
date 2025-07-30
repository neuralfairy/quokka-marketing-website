"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Play, TrendingUp, Users, Target } from "lucide-react"

export function Hero() {
  const [email, setEmail] = useState("")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission for demo/trial
    console.log("Demo request for:", email)
    setEmail("")
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-100 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className={`space-y-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-pink-50 text-pink-700 px-4 py-2 rounded-full text-sm font-medium">
              <TrendingUp size={16} />
              <span>Performance-Based Marketing</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Drive Conversions with <span className="text-gradient">Promotional Campaigns</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Create performance-based campaigns that deliver measurable results. Optimize conversions, maximize ROI,
                and scale your B2B growth with our proven methodology.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">300%</div>
                <div className="text-sm text-gray-600">Avg ROI Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">50K+</div>
                <div className="text-sm text-gray-600">Campaigns Launched</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>

            {/* CTA Form */}
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md">
              <Input
                type="email"
                placeholder="Enter your business email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button type="submit" className="btn-primary whitespace-nowrap">
                Start Free Trial
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </form>

            {/* Secondary CTA */}
            <div className="flex items-center space-x-6">
              <Button variant="outline" asChild>
                <Link href="/demo" className="flex items-center">
                  <Play size={16} className="mr-2" />
                  Watch Demo
                </Link>
              </Button>
              <div className="text-sm text-gray-500">No credit card required • 14-day free trial</div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className={`relative ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              {/* Dashboard Preview */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">Campaign Performance</h3>
                  <div className="flex items-center space-x-2 text-green-600">
                    <TrendingUp size={16} />
                    <span className="text-sm font-medium">+24% this month</span>
                  </div>
                </div>

                {/* Metrics Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-pink-50 to-pink-100 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Target size={16} className="text-pink-600" />
                      <span className="text-sm font-medium text-gray-700">Conversions</span>
                    </div>
                    <div className="text-2xl font-bold text-pink-600">2,847</div>
                    <div className="text-xs text-gray-500">+18% vs last month</div>
                  </div>
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Users size={16} className="text-gray-600" />
                      <span className="text-sm font-medium text-gray-700">Leads</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-700">12,394</div>
                    <div className="text-xs text-gray-500">+32% vs last month</div>
                  </div>
                </div>

                {/* Chart Placeholder */}
                <div className="h-32 bg-gradient-to-r from-pink-100 to-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-gray-500 text-sm">Interactive Campaign Analytics</div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-pink-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gray-400 rounded-full animate-bounce delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
