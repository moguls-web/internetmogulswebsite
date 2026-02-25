"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CaseStudyProps {
  caseStudy: {
    title: string
    subtitle: string
    category: string
    heroImage: string
    logo: string
    headline: string
    story: string
    objectives: string[]
    challenges: string[]
    results: { value: string; label: string }[]
    services: string[]
    gallery: string[]
  }
}

export function CaseStudyDetail({ caseStudy }: CaseStudyProps) {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0)

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-end">
        <div className="absolute inset-0">
          <img
            src={caseStudy.heroImage || "/placeholder.svg"}
            alt={caseStudy.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
        </div>

         

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-16 lg:pb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <p className="text-sm font-bold tracking-[0.3em] uppercase text-white/50 mb-4">{caseStudy.category}</p>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-[0.9]">
                {caseStudy.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/80 font-medium">{caseStudy.subtitle}</p>
            </div>

            {/* Results Preview */}
            {/* <div className="flex gap-8 lg:justify-end">
              {caseStudy.results.map((result, index) => (
                <div key={index} className="text-center lg:text-right">
                  <p className="text-4xl lg:text-3xl font-bold text-white mb-1">{result.value}</p>
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/50">{result.label}</p>
                </div>
              ))}
            </div> */}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* Headline Section */}
      <section className="py-24 lg:py-32 bg-foreground text-background">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">{caseStudy.headline}</h2>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm font-bold tracking-[0.3em] uppercase text-muted-foreground mb-4">Story So Far</p>
              <h3 className="font-serif text-3xl lg:text-4xl font-bold mb-8">
                The <span className="italic font-normal">Background</span>
              </h3>
              <div className="prose prose-lg text-muted-foreground font-medium leading-relaxed">
                {caseStudy.story.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Services Used */}
            <div className="lg:sticky lg:top-32">
              <div className="bg-muted p-8 lg:p-12">
                <p className="text-sm font-bold tracking-[0.3em] uppercase text-muted-foreground mb-6">
                  Services Deployed
                </p>
                <div className="flex flex-wrap gap-3">
                  {caseStudy.services.map((service, index) => (
                    <span key={index} className="px-4 py-2 bg-foreground text-background text-sm font-bold">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives & Challenges */}
      <section className="py-24 lg:py-32 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Objectives */}
            <div>
              <p className="text-sm font-bold tracking-[0.3em] uppercase text-muted-foreground mb-4">Goals</p>
              <h3 className="font-serif text-3xl lg:text-4xl font-bold mb-8">Objectives</h3>
              <div className="space-y-4">
                {caseStudy.objectives.map((objective, index) => (
                  <div key={index} className="flex gap-4 items-start p-4 bg-background border border-border">
                    <div className="w-8 h-8 bg-foreground text-background flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <p className="text-muted-foreground font-medium">{objective}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges */}
            <div>
              <p className="text-sm font-bold tracking-[0.3em] uppercase text-muted-foreground mb-4">Obstacles</p>
              <h3 className="font-serif text-3xl lg:text-4xl font-bold mb-8">Challenges</h3>
              <div className="space-y-4">
                {caseStudy.challenges.map((challenge, index) => (
                  <div key={index} className="flex gap-4 items-start p-4 bg-foreground text-background">
                    <div className="w-8 h-8 border-2 border-background/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <p className="text-background/80 font-medium">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 lg:py-32 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-background/50 mb-4">Impact</p>
            <h3 className="font-serif text-4xl lg:text-6xl font-bold">
              The <span className="italic font-normal">Results</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-4 gap-8 justify-items-center">
            {caseStudy.results.map((result, index) => (
              <div
                key={index}
                className="text-center p-8 border-2 border-background/20 hover:border-background/50 transition-colors"
              >
                <p className="text-3xl lg:text-4xl font-bold mb-4">{result.value}</p>
                <p className="text-sm font-bold tracking-[0.2em] uppercase text-background/60">{result.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
            <div>
              <p className="text-sm font-bold tracking-[0.3em] uppercase text-muted-foreground mb-4">Visual</p>
              <h3 className="font-serif text-3xl lg:text-4xl font-bold">
                Project <span className="italic font-normal">Gallery</span>
              </h3>
            </div>

            {/* Gallery Navigation */}
            <div className="flex gap-2 mt-6 lg:mt-0">
              <button
                onClick={() => setActiveGalleryIndex((prev) => (prev === 0 ? caseStudy.gallery.length - 1 : prev - 1))}
                className="w-12 h-12 border-2 border-border flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveGalleryIndex((prev) => (prev === caseStudy.gallery.length - 1 ? 0 : prev + 1))}
                className="w-12 h-12 border-2 border-border flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Gallery Image */}
          <div className="relative aspect-[16/9] overflow-hidden mb-6">
            <img
              src={caseStudy.gallery[activeGalleryIndex] || "/placeholder.svg"}
              alt={`${caseStudy.title} gallery ${activeGalleryIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-4">
            {caseStudy.gallery.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveGalleryIndex(index)}
                className={`relative aspect-[4/3] overflow-hidden ${
                  activeGalleryIndex === index ? "ring-4 ring-foreground" : "opacity-60 hover:opacity-100"
                } transition-all`}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${caseStudy.title} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-muted/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-muted-foreground mb-6">Your Turn</p>
          <h3 className="font-serif text-4xl lg:text-5xl font-bold mb-8">
            Ready for Similar <span className="italic font-normal">Results?</span>
          </h3>
          <p className="text-xl text-muted-foreground mb-12 font-medium max-w-2xl mx-auto">
            Let's discuss how we can apply these strategies to grow your hotel's revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/Reach_Us" className="flex items-center justify-center bg-foreground text-background hover:bg-foreground/90 px-10 py-6 text-base font-bold"> 
              Book Free Strategy Call
              <ArrowRight className="ml-2 w-5 h-5" />             
            </Link>
            <Link href="/case-studies"className="flex items-center justify-center bg-foreground text-background hover:bg-foreground/90 px-10 py-1 text-base font-bold">
              View More Case Studies <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
