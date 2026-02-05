"use client"

import Image from "next/image"
import { Star, Award, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
const ownedHotels = [
  {
    name: "Hotel Ajanta",
    location: "New Delhi, India",
    type: "Heritage Hotel",
    description:
      "An award-winning heritage hotel operating since 1971—giving us real operational insight into hotel marketing.",
    awards: ["TripAdvisor Travellers' Choice", "Booking.com Guest Review Award"],
    image: "/elegant-heritage-hotel-exterior-in-new-delhi-with-.jpg",
    stats: { years: "59+", rooms: "78", rating: "4.5" },
      visitLink: "https://www.hotelajanta.com/",
  },
  {
    name: "The Tamarind",
    location: "Goa, India",
    type: "Boutique Resort",
    description:
      "An Award-winning boutique resort in North Goa that shaped our understanding of leisure marketing and experience-driven bookings.",
    awards: ["Condé Nast Traveller Top Pick", "Luxury Lifestyle Awards"],
    image: "/luxury-boutique-resort-in-goa-with-infinity-pool-o.jpg",
    stats: { years: "12+", rooms: "24", rating: "4.8" },
        visitLink: "https://www.thetamarind.com/",
  },
]

export function OwnedHotelsSection() {
  return (
    <section className="py-24 md:py-32 bg-[#f8f7f5]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
          Hoteliers First. Marketers Second
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] mb-6">
          We don’t just market hotels. 
            <br />
            <em className="font-normal">We own them.</em>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our founders are hoteliers with decades of hands-on experience. This isn't theory—it's knowledge born from
            running award-winning properties ourselves.
          </p>
        </div>

        {/* Hotels */}
        <div className="space-y-24">
          {ownedHotels.map((hotel, index) => (
            <div
              key={hotel.name}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={hotel.image || "/placeholder.svg"} alt={hotel.name} fill className="object-cover" />
                </div>
                {/* Stats overlay */}
                {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/90 to-transparent p-6">
                  <div className="flex items-center gap-8 text-background">
                    <div>
                      <p className="text-2xl font-medium">{hotel.stats.years}</p>
                      <p className="text-xs tracking-wide opacity-80">Years</p>
                    </div>
                    <div>
                      <p className="text-2xl font-medium">{hotel.stats.rooms}</p>
                      <p className="text-xs tracking-wide opacity-80">Rooms</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current" />
                      <p className="text-2xl font-medium">{hotel.stats.rating}</p>
                    </div>
                  </div>
                </div> */}
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div>
                  <p className="text-sm tracking-[0.15em] uppercase text-muted-foreground mb-2">{hotel.type}</p>
                  <h3 className="text-3xl md:text-4xl font-medium mb-2">{hotel.name}</h3>
                  <p className="text-muted-foreground">{hotel.location}</p>
                </div>

                <p className="text-lg leading-relaxed text-muted-foreground">{hotel.description}</p>

                {/* Awards */}
                <div className="space-y-3">
                  <p className="text-sm font-medium tracking-wide">Recognition</p>
                  <div className="flex flex-wrap gap-3">
                    {hotel.awards.map((award) => (
                      <div key={award} className="flex items-center gap-2 bg-background px-4 py-2 text-sm">
                        <Award className="w-4 h-4 text-muted-foreground" />
                        {award}
                      </div>
                    ))}
                  </div>
                </div>

                <Button variant="outline" className="group mt-4 bg-transparent">
                  <Link href={hotel.visitLink} target="_blank" rel="noopener noreferrer" className="flex gap-3 items-center cursor-pointer">
                    Visit Property
                    <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="mt-24 pt-16 border-t border-border/50 text-center">
          <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
            "When you work with us, you work with people who understand full weekends, slow seasons, and sleepless revenue nights."
          </p>
          <p className="mt-6 text-muted-foreground">— The Internet Moguls Team</p>
        </div>
      </div>
    </section>
  )
}
