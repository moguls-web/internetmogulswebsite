"use client"

import Image from "next/image"
import { MapPin } from "lucide-react"

const locations = [
  {
    city: "New Delhi – Headquarter",
    country: "India",
    address: "20, First Floor, Local Shopping Complex, Near Pushp Vihar, Madangir Village, Madangir, New Delhi, Delhi 110062",
    description: "Our headquarter in the heart of India's capital",
    image: "/modern-office-interior-in-new-delhi-with-large-win.jpg",
  },
  {
    city: "Goa – Creative Hub",
    country: "India",
    address: "Panjim, Goa 403001",
    description: "Creative hub overlooking the Arabian Sea",
    image: "/img-679a.jpeg",
  },
  {
    city: "Vancouver – North American Operations",
    country: "Canada",
    address: "Downtown Vancouver, BC V6C 3E8",
    description: "North American operations center",
    image: "/modern-office-in-vancouver-with-mountain-and-harbo.jpg",
  },
]

export function LocationsSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">Global Presence</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] mb-6">
          Where <em className="font-normal">hospitality</em> meets innovation              
          </h2>
          <p className="text-lg text-muted-foreground">
            With offices across three continents, we bring local expertise and global perspectives to every hotel we
            partner with.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <div key={location.city} className="group relative  mb-8 md:mb-0">
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-muted mb-6 ">
                <Image
                  src={location.image || "/placeholder.svg"}
                  alt={`${location.city} office`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 object-right"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm tracking-wide">{location.country}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-medium">{location.city}</h3>
                <p className="text-muted-foreground">{location.description}</p>
                <p className="text-sm text-muted-foreground/70">{location.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
