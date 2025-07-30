"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    title: "VP of Marketing",
    company: "TechFlow Solutions",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "Quokka Marketing transformed our promotional campaigns completely. We saw a 245% increase in conversions within just 6 months. Their data-driven approach and expertise in B2B marketing is unmatched.",
    results: "245% conversion increase",
    industry: "SaaS",
  },
  {
    name: "Michael Rodriguez",
    title: "CEO",
    company: "GrowthCorp",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "The ROI we achieved with Quokka Marketing exceeded all expectations. Their team understood our business goals and delivered campaigns that not only increased leads but improved lead quality significantly.",
    results: "$1.8M revenue growth",
    industry: "E-commerce",
  },
  {
    name: "Emily Watson",
    title: "Marketing Director",
    company: "InnovateLab",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "Working with Quokka Marketing was a game-changer. Their promotional campaign strategies helped us reduce customer acquisition costs by 64% while tripling our monthly lead generation.",
    results: "320% lead increase",
    industry: "B2B Services",
  },
  {
    name: "David Park",
    title: "Head of Growth",
    company: "ScaleUp Inc",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "The level of expertise and attention to detail from Quokka Marketing is exceptional. They helped us optimize our entire funnel and achieve sustainable growth that continues to compound month over month.",
    results: "180% ROAS improvement",
    industry: "FinTech",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-pink-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about our promotional campaign results.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="shadow-2xl border-0 bg-white">
            <CardContent className="p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
                {/* Avatar and Info */}
                <div className="flex-shrink-0 text-center lg:text-left">
                  <Avatar className="w-20 h-20 mx-auto lg:mx-0 mb-4">
                    <AvatarImage src={currentTestimonial.avatar || "/placeholder.svg"} alt={currentTestimonial.name} />
                    <AvatarFallback className="text-lg font-semibold bg-pink-100 text-pink-700">
                      {currentTestimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">{currentTestimonial.name}</h4>
                    <p className="text-sm text-gray-600">{currentTestimonial.title}</p>
                    <p className="text-sm font-medium text-pink-600">{currentTestimonial.company}</p>
                    <Badge variant="secondary" className="bg-pink-100 text-pink-700">
                      {currentTestimonial.industry}
                    </Badge>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-center lg:justify-start mb-4">
                    <Quote size={24} className="text-pink-300 mr-2" />
                    <div className="flex space-x-1">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 text-center lg:text-left">
                    "{currentTestimonial.text}"
                  </blockquote>

                  <div className="bg-gradient-to-r from-pink-50 to-gray-50 rounded-lg p-4 text-center lg:text-left">
                    <div className="font-semibold text-pink-600 text-lg">{currentTestimonial.results}</div>
                    <div className="text-sm text-gray-600">Key Achievement</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-pink-50"
          >
            <ChevronLeft size={20} className="text-gray-600" />
          </button>

          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-pink-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-pink-50"
          >
            <ChevronRight size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-gray-700">500+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-gray-700">98%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-gray-700">50K+</div>
              <div className="text-sm text-gray-600">Campaigns Launched</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-gray-700">$50M+</div>
              <div className="text-sm text-gray-600">Revenue Generated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
