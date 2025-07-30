import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { Testimonials } from "@/components/sections/testimonials"
import { ROICalculator } from "@/components/sections/roi-calculator"
import { CaseStudies } from "@/components/sections/case-studies"
import { CTA } from "@/components/sections/cta"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <ROICalculator />
      <CaseStudies />
      <Testimonials />
      <CTA />
    </div>
  )
}
