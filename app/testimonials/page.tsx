import type { Metadata } from "next"
import { TestimonialsHero } from "@/components/testimonials/testimonials-hero"
import { VideoTestimonials } from "@/components/testimonials/video-testimonials"
import { GoogleReviews } from "@/components/testimonials/google-reviews"
import { ClientQuotes } from "@/components/testimonials/client-quotes"
import { TrustBadges } from "@/components/testimonials/trust-badges"
import { TestimonialsCta } from "@/components/testimonials/testimonials-cta"
import ClientLogo from "@/components/ClientLogo"

export const metadata: Metadata = {
  title: "Testimonials | Internet Moguls - What Our Partners Say",
  description:
    "Hear from 1900+ hotels who trust Internet Moguls for their digital marketing success. Video testimonials, Google reviews, and client stories.",
}

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-background">
      <TestimonialsHero />
      <VideoTestimonials />
      <GoogleReviews />
      <ClientQuotes />
      <TrustBadges />      
      <ClientLogo /> 
      <TestimonialsCta />
    </main>
  )
}
