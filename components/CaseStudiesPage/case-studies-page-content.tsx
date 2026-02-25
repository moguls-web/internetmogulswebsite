"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, TrendingUp, Target, Users, BarChart3, Filter, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"

const caseStudies = [
  {
    id: "leisure-hotels",
    title: "Leisure Hotels",
    subtitle: "GMB Optimization + Influencer Campaign",
    category: "SEO & Influencer",
    image: "/luxury-resort-pool-aerial-view-evening.jpg",
    stats: [
      { label: "Direct Bookings", value: "+45%" },
      { label: "Organic Traffic", value: "+120%" },
      { label: "Revenue Growth", value: "+38%" },
    ],
    description:
      "How a heritage hotel group transformed their digital presence through strategic GMB optimization and influencer partnerships.",
    featured: true,
    tags: ["GMB", "Influencer Marketing", "Content Strategy"],
  },
  {
    id: "grand-dragon-ladakh",
    title: "The Grand Dragon Ladakh",
    subtitle: "Seasonal SEO Success",
    category: "SEO Strategy",
    image: "/gdl-banner-case.webp",
    stats: [
      { label: "Organic Traffic", value: "+120%" },
      { label: "Keyword Rankings", value: "Top 3" },
      { label: "Booking Inquiries", value: "+85%" },
    ],
    description: "Dominating seasonal search results for a luxury mountain resort through strategic SEO.",
    featured: true,
    tags: ["SEO", "Seasonal Marketing", "Content"],
  },
  {
    id: "moksha-himalaya-spa-resort",
    title: " Moksha Himalaya Spa Resort",
    subtitle: "Wedding Destination · Performance Marketing",
    category: "Performance Marketing",
    image: "/5ergtf.webp",
    stats: [
      { label: "Increase in Revenue", value: "+438%" },
      { label: "Increase in Website Bookings", value: "+309%" }, 
    ],
    description:
      "How an upscale hotel chain reached a 40% growth in revenue through OTA optimization and dynamic pricing.",
    featured: true,
    tags: ["OTA Management", "Revenue Management", "Dynamic Pricing"],
  },
  {
    id: "noor-mahal-palace-karnal",
    title: "Noor Mahal, Karnal",
    subtitle: "Destination Wedding · SEO Strategy",
    category: "SEO Strategy",
    image: "/noor-mahal-86756ytgh.jpg",
    stats: [
      { label: "Increase in Wedding Enquiries", value: "+21.32%" },
      { label: "Increase in Calls", value: "+17.24%" },
      { label: "Increase in Organic Traffic", value: "+11.23%" },
    ],
    description: "Building a vibrant social community that drives real bookings.",
    featured: false,
    tags: ["Social Media", "Content Creation", "Community"],
  },
  {
    id: "taj-mahal-new-delhi",
    title: "Taj Mahal, New Delhi",
    subtitle: "Luxury Hotel · Social Media Revamp",
    category: "Social Media Revamp",
    image: "/464303942.jpg",
    stats: [
      { label: "Increase in Instagram Reach", value: "+267%" },
      { label: "Increase in Content Reach", value: "+143%" },
      { label: "Organic Reach (No Paid Boosts)", value: "100%" },
    ],
    description: "A complete digital transformation that turned visitors into guests.",
    featured: false,
    tags: ["Web Design", "UX/UI", "Conversion"],
  },
  {
    id: "lemon-tree-hotels",
    title: "Lemon Tree Hotels",
    subtitle: "Chain Hotel · Website, SEO & Direct Booking Growth",
    category: "Website, SEO & Direct Booking Growth",
    image: "/29_Jun_2023_04_33_21Facade_.webp",
    stats: [
      { label: "Increase in Bookings", value: "+150%" },
      { label: "Increase in Total Traffic", value: "+36%" },
      { label: "Bookings", value: "+90%" },
    ],
    description: "Maximizing ROI through precision-targeted Google Ads campaigns.",
    featured: false,
    tags: ["Google Ads", "PPC", "Performance Marketing"],
  },
  {
    id: "niranta-airport-transit-hotel-mumbai",
    title: "Niranta Airport Transit Hotel",
    subtitle: "City Hotel · Revenue & OTA Strategy",
    category: "Revenue & OTA Strategy",
    image: "/f0108c83878.webp",
    stats: [
      { label: "Increase in Revenue", value: "+175%" },
      { label: "Increase in Room Nights", value: "+119%" },
      { label: "Bookings", value: "+90%" },
    ],
    description: "Maximizing ROI through precision-targeted Google Ads campaigns.",
    featured: false,
    tags: ["Google Ads", "PPC", "Performance Marketing"],
  },
  {
    id: "the-corinthians-resort",
    title: "The Corinthians Resort",
    subtitle: "City Hotel · Revenue & OTA Strategy",
    category: "SEO + Performance Marketing + Website Optimisation",
    image: "/Facade-2.jpg",
    stats: [
      { label: "Increase in Direct Booking Revenue (YoY)", value: "+168%" },
      { label: "Growth in Organic Traffic Recovery", value: "+156%" },
      { label: "ROAS achieved during peak seasonal campaigns", value: "+38X" },
    ],
    description: "Driving Direct Revenue Growth Post Website Migration",
    featured: false,
    tags: ["Google Ads", "PPC", "Performance Marketing"],
  },
  {
    id: "hard-rock-hotel",
    title: "Hard Rock Hotel",
    subtitle: "City Hotel · Revenue & OTA Strategy",
    category: "SEO + Social Media + Performance Marketing",
    image: "/hr-1banner.jpg",
    stats: [
      { label: "Direct booking value generated through Google Ads", value: "₹14.7L+ " },
      { label: "Qualified calls generated from performance campaigns", value: "118+" }, 
    ],
    description: "Driving Direct Revenue Growth Post Website Migration",
    featured: false,
    tags: ["SEO", "Social Media", "Performance Marketing"],
  },
  {
    id: "celebrity-resort",
    title: "Celebrity Resort",
    subtitle: "City Hotel · Revenue & OTA Strategy",
    category: "SEO + OTA Strategy + Performance Marketing + Social Media",
    image: "/banner-tcp-home.jpg",
    stats: [
      { label: "Increase in Direct Booking Revenue", value: "59%" },
      { label: "Reduction in OTA Dependency from", value: "80% to 30%" }, 
    ],
    description: "Driving Direct Revenue Growth Post Website Migration",
    featured: false,
    tags: ["SEO", "OTA Strategy", "Performance Marketing", "Social Media"],
  },
]

const categories = [
  "All",
  "SEO Strategy",
  "Revenue Optimization",
  "Social Media",
  "Web Design",
  "Paid Advertising",
  "SEO & Influencer",
]

function Counter({ end, suffix = "", prefix = "", duration = 2 }: { end: number; suffix?: string; prefix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!inView) return

    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animate)
  }, [inView, end, duration])

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}

function DecimalCounter({ end, suffix = "", prefix = "", decimals = 1, duration = 2 }: { end: number; suffix?: string; prefix?: string; decimals?: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!inView) return

    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(easeOutQuart * end)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animate)
  }, [inView, end, duration])

  return (
    <span ref={ref}>
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>
  )
}

export function CaseStudiesPageContent() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredStudy, setHoveredStudy] = useState<string | null>(null)

  const filteredStudies =
    activeCategory === "All" ? caseStudies : caseStudies.filter((study) => study.category === activeCategory)

  const featuredStudies = caseStudies.filter((study) => study.featured)

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/luxury-hotel-collage-multiple-properties-aerial-vi.jpg" alt="Case Studies" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm font-bold tracking-[0.4em] uppercase text-white/60 mb-6">Success Stories</p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[0.9]">
            Case <span className="italic font-normal">Studies</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-medium leading-relaxed mb-12">
            Real results. Real hotels. Real growth stories that speak for themselves.
          </p>

          {/* Hero Stats */}
          <div className="flex flex-wrap justify-center gap-12 md:gap-20">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-5xl md:text-6xl font-bold text-white mb-2">
                <Counter end={1900} suffix="+" />
              </p>
              <p className="text-sm font-bold tracking-[0.2em] uppercase text-white/60">Hotels Served</p>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-5xl md:text-6xl font-bold text-white mb-2">
                <Counter end={40} suffix="%" />
              </p>
              <p className="text-sm font-bold tracking-[0.2em] uppercase text-white/60">Avg. Revenue Growth</p>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-5xl md:text-6xl font-bold text-white mb-2">
                <Counter end={16} suffix="+" />
              </p>
              <p className="text-sm font-bold tracking-[0.2em] uppercase text-white/60">Years Experience</p>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-white/40">Scroll to explore</p>
          <div className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent" />
        </div> */}
      </section>

      {/* Featured Case Studies - Large Cards */}
      <section className="py-24 lg:py-32 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
            <div>
              <p className="text-sm font-bold tracking-[0.3em] uppercase text-background/50 mb-4">Featured</p>
              <h2 className="font-serif text-4xl lg:text-6xl font-bold">
                Spotlight <span className="italic font-normal">Stories</span>
              </h2>
            </div>
            <p className="text-lg text-background/70 mt-4 lg:mt-0 max-w-md font-medium">
              Our most impactful transformations
            </p>
          </div>

          {/* All Case Studies - 3 Column Classic Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study) => (
              <Link
                key={study.id}
                href={`/case-studies/${study.id}`}
                className="group relative h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden"
                onMouseEnter={() => setHoveredStudy(study.id)}
                onMouseLeave={() => setHoveredStudy(null)}
              >
                <img
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <p className="text-xs font-bold tracking-[0.3em] uppercase text-white/60 mb-2">{study.category}</p>
                  <h3 className="font-serif text-2xl font-bold text-white mb-1">{study.title}</h3>
                  <p className="text-sm text-white/80 mb-4">{study.subtitle}</p>

                  <div className="flex gap-6">
                    {study.stats.slice(0, 2).map((stat, idx) => (
                      <div key={idx}>
                        <p className="text-xl font-bold text-white">{stat.value}</p>
                        <p className="text-xs font-bold tracking-wider uppercase text-white/50">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Arrow */}
                <div
                  className={`absolute top-6 right-6 w-12 h-12 rounded-full bg-white flex items-center justify-center transition-all duration-300 ${hoveredStudy === study.id ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
                >
                  <ArrowRight className="w-5 h-5 text-foreground" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies with Filter */}
      

      {/* Results Overview */}
      <section className="py-24 lg:py-32 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-muted-foreground mb-4">Impact</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
              Collective <span className="italic font-normal">Results</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
              The combined impact of our strategies across all client properties
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, value: "₹500M", label: "Revenue Generated", type: "currency", amount: 500, suffix: "M" },
              { icon: Target, value: "1.5M+", label: "Direct Bookings", type: "decimal", amount: 1.5, suffix: "M+" },
              { icon: Users, value: "50M+", label: "Website Visitors", type: "integer", amount: 50, suffix: "M+" },
              { icon: BarChart3, value: "8.5x", label: "Average ROAS", type: "decimal", amount: 8.5, suffix: "x" },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center p-8 bg-background border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <stat.icon className="w-10 h-10 mx-auto mb-6 text-foreground" />
                <p className="text-4xl lg:text-5xl font-bold mb-2">
                  {stat.type === "currency" && <Counter end={stat.amount} prefix="₹" suffix={stat.suffix} />}
                  {stat.type === "decimal" && <DecimalCounter end={stat.amount} suffix={stat.suffix} decimals={1} />}
                  {stat.type === "integer" && <Counter end={stat.amount} suffix={stat.suffix} />}
                </p>
                <p className="text-sm font-bold tracking-[0.2em] uppercase text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-background/50 mb-6">Your Story Next</p>
          <h2 className="font-serif text-4xl lg:text-6xl font-bold mb-8">
            Ready to Write Your <span className="italic font-normal">Success Story?</span>
          </h2>
          <p className="text-xl text-background/70 mb-12 font-medium max-w-2xl mx-auto">
            Let's discuss how we can transform your hotel's digital presence and drive measurable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/Reach_Us" className="flex items-center justify-center gap-2 bg-background text-foreground hover:bg-background/90 px-10 py-6 text-base font-bold">
                Book Free Strategy Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            <Link 
              href="/case-studies"
              className="border-2 border-background/30 text-background hover:bg-background/10 px-10 py-6 text-base font-bold bg-transparent"
            >
              Download Case Study PDF
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
