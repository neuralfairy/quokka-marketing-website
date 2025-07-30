"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle, Zap } from "lucide-react"

export function CTA() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("CTA form submitted:", email)
    setEmail("")
  }

  return (
    <section className="py-20 bg-gradient-to-r from-pink-600 to-pink-700 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap size={16} />
              <span>Limited Time Offer</span>
            </div>

            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your <span className="text-pink-200">Marketing Results?</span>
            </h2>

            <p className="text-xl lg:text-2xl text-pink-100 leading-relaxed max-w-3xl mx-auto">
              Start your free trial today and see why 500+ companies trust us to drive their promotional campaign
              success.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle size={20} className="text-pink-200" />
              <span className="text-lg">14-day free trial</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle size={20} className="text-pink-200" />
              <span className="text-lg">No credit card required</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle size={20} className="text-pink-200" />
              <span className="text-lg">Setup in under 5 minutes</span>
            </div>
          </div>

          {/* CTA Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your business email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-pink-200"
                required
              />
              <Button type="submit" className="bg-white text-pink-600 hover:bg-pink-50 font-semibold px-8">
                Start Free Trial
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </form>

          {/* Secondary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent" asChild>
              <Link href="/demo">Watch Demo</Link>
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent" asChild>
              <Link href="/contact">Talk to Sales</Link>
            </Button>
          </div>

          {/* Trust Badge */}
          <div className="mt-12 text-center">
            <p className="text-pink-200 text-sm mb-4">Trusted by industry leaders</p>
            <div className="flex justify-center items-center space-x-8 opacity-70">
              <div className="text-white font-semibold">Fortune 500</div>
              <div className="w-px h-4 bg-white/30"></div>
              <div className="text-white font-semibold">SOC 2 Certified</div>
              <div className="w-px h-4 bg-white/30"></div>
              <div className="text-white font-semibold">GDPR Compliant</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
