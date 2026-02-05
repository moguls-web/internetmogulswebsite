
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { FounderVideoSection } from "@/components/founder-video-section"
import { OwnedHotelsSection } from "@/components/owned-hotels-section"
import { LocationsSection } from "@/components/locations-section"
import { ChallengesSection } from "@/components/challenges-section"
import { ServicesSection } from "@/components/services-section"  
import {PaidGuestTrackerSection } from "@/components/PaidGuestTrackerSection"
import { AISection } from "@/components/ai-section"
import { ProcessSection } from "@/components/process-section"
import { ResultsSection } from "@/components/results-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { WordsOfTrust } from "@/components/words-of-trust"
import { RevenueStripe } from "@/components/revenue-stripe"  
import { CTASection } from "@/components/cta-section"
import ClientLogo from "@/components/ClientLogo"
import { services } from "@/data/serviceData"
import { Metadata } from "next"
export const metadata: Metadata = {
  title: "Hotel Digital Marketing | Internet Moguls - Hospitality Digital Marketing Company in Delhi, India",
  description:
    "7 Time award winning Internet moguls is a Digital Marketing + Revenue management company helping Hotels sell more Rooms, FNB, more banquet & spa bookings .",
    generator: 'v0.app'
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">

      <HeroSection />
      <AboutSection />
      <FounderVideoSection />
      <ChallengesSection />
      <ServicesSection  services={services.slice(0, 6)} isHomePage={true}/> 
      <PaidGuestTrackerSection />
      <AISection />
      <ProcessSection />
      <ResultsSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <WordsOfTrust />
      <OwnedHotelsSection />
      <LocationsSection />      
      <RevenueStripe />
      <CTASection />
      <ClientLogo /> 
    </main>
  )
}
